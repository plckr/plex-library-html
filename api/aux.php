<?php

function base64_safe_encode($input, $stripPadding = true) {
    $encoded = strtr(base64_encode($input), '+/=', '-_~');

    return ($stripPadding) ? str_replace("~","",$encoded) : $encoded;
}

function base64_safe_decode($input) {
    return base64_decode(strtr($input, '-_~', '+/='));
}

function slugify($text = null) {
    if (is_null($text)) return false;
    
    $text = preg_replace('~[^\pL\d]+~u', '-', $text);
    $text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);
    $text = preg_replace('~[^-\w]+~', '', $text);
    $text = trim($text, '-');
    $text = preg_replace('~-+~', '-', $text);
    $text = strtolower($text);
    return $text;
}

function getUrl($url_target = "", $additionalArgs = false, $ignoreHost = false) {
    global $settings;
    $url = sprintf(
        'http%s://%s:%d/%s?%sX-Plex-Token=%s', 
        $settings["ssl"]?"s":"", 
        $settings["host"], 
        $settings["port"], 
        $url_target, 
        (is_array($additionalArgs)?http_build_query($additionalArgs)."&":""), 
        $settings["token"])
        ;
    if ($ignoreHost) {
        $url = sprintf('/%s?X-Plex-Token=%s', $url_target, $settings["token"]);
    }
    return $url;
}

function getContent($url = null) {
    if (is_null($url)) return false;

    if ($cont = @file_get_contents($url)) {
        $xml = simplexml_load_string($cont);
        $json = json_encode($xml, JSON_UNESCAPED_UNICODE|JSON_NUMERIC_CHECK);
        $vals = json_decode($json,TRUE);
        return $vals;
    } else {
        return false;
    };
}

function responseJson($status, $data) {
    header('Content-Type: application/json');
    echo json_encode(
        array(
            "status" => $status,
            "result" => $data
        ), JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES
    );
}
function responseJsonOk($data) { return responseJson("OK", $data); }
function responseJsonNok($message) { return responseJson("NOK", $data); }

function getImageUrl($type, $xmlValueOrId, $additionalData = "") {
    if (is_int($xmlValueOrId)) {
        $id = $xmlValueOrId;
    } else if (!is_null($xmlValueOrId)) {
        $id = explode("/", $xmlValueOrId)[3];
    }
    if (isset($id)) {
        return BASE_URL_IMG."/$id/$type$additionalData.jpg";
    } else {
        return null;
    }
}
function getPosterUrl($xmlValueOrId = false, $large = false) {
    $additionalData = ($large?"-large":"");
    return getImageUrl("poster", $xmlValueOrId, $additionalData);
}
function getBackgroundUrl($xmlValueOrId = false) {
    return getImageUrl("background", $xmlValueOrId);
}
function getArtUrl($xmlValueOrId = false) {
    return getImageUrl("art", $xmlValueOrId);
}
function getBannerUrl($xmlValueOrId = false) {
    return getImageUrl("banner", $xmlValueOrId);
}
function getThumbUrl($xmlValueOrId = false) {
    return getImageUrl("thumb", $xmlValueOrId);
}

function xmlArrayIfNotArray(&$xml) {
    if (!boolval(count($xml))) return false;
    if (array_key_exists("@attributes", $xml)) return $xml = array($xml);
    return $xml;
}

function getEpisodeData($xml) {
    $attr = $xml["@attributes"];
    $result = populateArray($xml);
    return $result;
}

function getAllEpisodes($id) {

}

function getEpisodes($xml, $all=false) {
    $attr = $xml["@attributes"];
    $result = array();

    if ($all) {
        $result["parent"] = array(
            "link" => BASE_URL."/media/".$attr["key"],
            "id" => $attr["key"],
            "type" => "show",
            "title" => $attr["parentTitle"]
        );
    }

    $result["size"] = $xml["@attributes"]["size"];
    if ($result["size"] < 1) return $result;
    
    xmlArrayIfNotArray($xml["Video"]);

    $result["size"] = $xml["@attributes"]["size"];

    for ($i=0; $i<$xml["@attributes"]["size"]; $i++) {

        $attrEpisodes = &$xml["Video"][$i]["@attributes"];
        $index = $attrEpisodes["index"];

        $resultep = &$result;
        if ($all) $resultep = &$result[$attrEpisodes["parentIndex"]];

        $resultep[$index] = array(
            "link" => BASE_URL."/media/".$attrEpisodes["ratingKey"],
            "id" => $attrEpisodes["ratingKey"],
            "title" => $attrEpisodes["title"],
            "type" => $attrEpisodes["type"],
            "thumbnail" => getThumbUrl($attrEpisodes["thumb"])
        );
    }

    return $result;
}

function getShowData($xml) {
    $attr = $xml["@attributes"];

    $result = populateArray($xml);
    populateSecondaryMediaInfo($xml, $result);

    
    if ($dataSeasons = getContent(getUrl("library/metadata/".$attr["ratingKey"]."/children"))) {
        xmlArrayIfNotArray($dataSeasons["Directory"]);
        if ($dataSeasons["@attributes"]["size"] >= 1) {
            for ($i=0; $i<$dataSeasons["@attributes"]["size"]; $i++) {
                $attrSeasons = &$dataSeasons["Directory"][$i]["@attributes"];

                $result["seasons"][$i] = populateArray($dataSeasons["Directory"][$i], "season");
                $result["seasons"][$i]["link"] = BASE_URL."/media/". (!isset($attrSeasons["ratingKey"]) ? $result["id"]."/all" : $attrSeasons["ratingKey"]);
                $result["seasons"][$i]["episodes"] = $attrSeasons["leafCount"];
            }
        }
    }

    return $result;
}

function getMovieData($xml) {
    $attr = $xml["@attributes"];

    $result = populateArray($xml);
    populateSecondaryMediaInfo($xml, $result);

    return $result;
}

function populateSecondaryMediaInfo($xml, &$result) {
    if (xmlArrayIfNotArray($xml["Genre"]))
        $result["genre"] = populateArrayMultiple($xml["Genre"], array("id"=>"id", "tag"=>"name"));
    if (xmlArrayIfNotArray($xml["Director"]))
        $result["director"] = populateArrayMultiple($xml["Director"], array("id"=>"id", "tag"=>"name"));
    if (xmlArrayIfNotArray($xml["Writer"]))
        $result["writer"] = populateArrayMultiple($xml["Writer"], array("id"=>"id", "tag"=>"name"));
    if (xmlArrayIfNotArray($xml["Producer"]))
        $result["producer"] = populateArrayMultiple($xml["Producer"], array("id"=>"id", "tag"=>"name"));
    if (xmlArrayIfNotArray($xml["Role"]))
        $result["role"] = populateArrayMultiple($xml["Role"], array("id"=>"id", "tag"=>"name", "role"=>"role", "thumb"=>"thumb"));
}

function getSeasonData($xml) {
    $attr = $xml["@attributes"];

    $result = populateArray($xml);
    
    // Add episodes
    if ($attr["leafCount"] > 0) {
        if ($dataEpisodes = getContent(getUrl("library/metadata/".$attr["ratingKey"]."/children"))) {
            $result["episodes"] = getEpisodes($dataEpisodes);
        }
    }

    return $result;
}

function copyLibrary($xmlLibrary) {
    $attr = $xmlLibrary["@attributes"];
    $result = array(
        "link" => BASE_URL."/libraries/".$attr["librarySectionID"],
        "id" => $attr["librarySectionID"],
        "title" => $attr["librarySectionTitle"],
        "slug" => slugify($attr["librarySectionTitle"])
    );
    return $result;
}

function copyFullLibrary($xmlLibrary) {
    $library = $xmlLibrary["@attributes"];
    $array = array(
        "link" => BASE_URL."/libraries/".$library["key"],
        "id" => $library["key"],
        "type" => $library["type"],
        "title" => $library["title"],
        "slug" => slugify($library["title"]),
        "language" => $library["language"],
        "scanner" => $library["scanner"],
        "agent" => $library["agent"],
        "updatedAt" => $library["updatedAt"],
        "hidden" => boolval($library["hidden"])
    );
    return $array;
}

$commonKeys = array(
    "type" => "type",
    "ratingKey" => "id",
    "title" => "title",
    "duration" => "duration",
    "addedAt" => "addedAt",
    "thumb" => "poster",
    "art" => "art",
    "banner" => "banner",
    "originalTitle" => "originalTitle",
    "titleSort" => "titleSort",
    "summary" => "summary",
    "year" => "year",
    "contentRating" => "contentRating",
    "audienceRating" => "audienceRating",
    "audienceRatingImage" => "audienceRatingImage",
    "rating" => "audienceRating",
    "ratingImage" => "audienceRatingImage",
    "studio" => "studio",

    "parentRatingKey" => "parent,id",
    "parentTitle" => "parent,title",
    "parentYear" => "parent,year",
    "parentStudio" => "parent,studio",
);

function populateArray($xml, $type=null, $commonKeys=null) {
    if (!$commonKeys) global $commonKeys;
    $attr = &$xml;
    if (array_key_exists("@attributes", $xml)) $attr=$xml["@attributes"];
    if (!$type && $attr) $type = $attr["type"];
    $result = array();
    foreach ($commonKeys as $k => $v) {
        foreach($attr as $kx => $vx) {
            if ($k == $kx) {
                switch ($kx) {
                    case "thumb":
                        switch ($type) {
                            case null: $result[$v] = $vx; break;
                            case "episode":
                                $result["thumbnail"] = getThumbUrl($vx); break;
                            default:
                                $result["poster"] = getPosterUrl($vx);
                                $result["posterLarge"] = getPosterUrl($vx, true);
                                $result["background"] = getBackgroundUrl($vx);
                        }
                        break;
                    case "art": $result[$v] = getArtUrl($vx); break;
                    case "banner": $result[$v] = getBannerUrl($vx); break;
                    case "ratingKey": $result["link"] = BASE_URL."/media/".$attr["ratingKey"];
                    default:
                        // Add sub array. Example: parent -> id
                        if (strpos($v, ",")) {
                            $explode = explode(",", $v);
                            $result[$explode[0]][$explode[1]] = $vx;
                        } else {
                            $result[$v] = $vx;
                        }
                }
            }
        }
    }
    return $result;
}

function populateArrayMultiple($xml, $commonKeys) {
    $result = array();
    $c = 0;
    foreach($xml as $k => $v) {
        $result[$c] = populateArray($v, null, $commonKeys);
        $c++;
    }
    return $result;
}