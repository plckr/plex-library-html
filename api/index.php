<?php
require __DIR__ . '/vendor/autoload.php';

define('BASE_URL', '/api');
define('BASE_URL_IMG', '/img');
require __DIR__ . '/settings.php';
require __DIR__ . '/aux.php';

$router = new \Bramus\Router\Router();

$router->setBasePath(BASE_URL);

$router->set404( function() {
    header('HTTP/1.1 404 Not Found');
});

$router->get('/server', function() use ($router) {
    if (!$data = getContent(getUrl("")))
        return $router->trigger404();
    $attr = &$data["@attributes"];
    $result = array(
        "friendlyName" => $attr["friendlyName"],
        "countryCode" => $attr["countryCode"]
    );
    return responseJsonOk($result);
});

$router->mount('/libraries', function() use ($router) {

    $router->get('/', function() use ($router) {
        // Get all libraries or error
        if (!$data = getContent(getUrl("library/sections")))
            return $router->trigger404();

        $resultArray = array();
        foreach ($data["Directory"] as $i => $v) {
            $library = $data["Directory"][$i];
            if (!in_array($library["@attributes"]["type"], array("movie", "show"))) continue;

            $resultArray[$i] = copyFullLibrary($library);
        }

        // Sort them
        array_multisort(array_column($resultArray, 'id'), SORT_ASC, $resultArray);

        return responseJsonOk($resultArray);
    });

    function perId($id, $router, $containerStart = 0, $containerSize = 5000) {
        if ($data = getContent(getUrl("library/sections/$id/all", array("X-Plex-Container-Start" => $containerStart, "X-Plex-Container-Size" => $containerSize)))) {
            // Assigning library values
            $library = $data["@attributes"];
            $resultArray = array(
                "library" => copyLibrary($data),
                "totalSize" => $library["totalSize"],
                "items" => array()
            );

            // Check if library is Movie or a Show
            if ($library["viewGroup"] == "movie") {
                $loopData = $data["Video"];
            } else if ($library["viewGroup"] == "show") {
                $loopData = $data["Directory"];
            } else {
                return $router->trigger404();
            }

            // Loop through them and assing values to new object
            foreach ($loopData as $k => $v) {
                $item = $loopData[$k];
                $attr = $item["@attributes"];
                $resultArray["items"][$k] = array(
                    "link" => BASE_URL."/media/".$attr["ratingKey"],
                    "id" => $attr["ratingKey"],
                    "title" => $attr["title"],
                    "poster" => getPosterUrl($attr["thumb"]),
                    "year" => $attr["year"],
                    "added" => $attr["addedAt"],
                    "genre" => array()
                );
                if ($library["viewGroup"] == "show") {
                    $resultArray["items"][$k]["seasons"] = $attr["childCount"];
                    $resultArray["items"][$k]["episodes"] = $attr["leafCount"];
                }
                if (isset($item["Genre"]["@attributes"])) {
                    array_push($resultArray["items"][$k]["genre"], $item["Genre"]["@attributes"]["tag"]);
                } else {
                    foreach($item["Genre"] as $k2 => $v2) {
                        $resultArray["items"][$k]["genre"][$k2] = $item["Genre"][$k2]["@attributes"]["tag"];
                    }
                }
            }

            // Ordering if requested
            if (isset($_GET) && in_array($_GET["orderby"], array("id", "title", "year", "added"))) {
                $order = $_GET["order"] == "desc" ? SORT_DESC : SORT_ASC;
                array_multisort(array_column($resultArray["items"], $_GET["orderby"]), $order, $resultArray["items"]);
            }
            return responseJsonOk($resultArray);
        }
        $router->trigger404();
        return;
    }

    // per id
    $router->get('/(\d+)', function($id) use ($router) {
        if (isset($_GET["start"])) {
            $containerStart = $_GET["start"];
            perId($id, $router, $containerStart, 100);
            return;
        }
        perId($id, $router);
    });
    
    // per slug
    $router->get('/([a-z0-9_-]+)', function($slug) use ($router) {
        if (!$data = getContent(getUrl("library/sections")))
            return $router->trigger404();
        
        foreach ($data["Directory"] as $i => $v) {
            $library = $data["Directory"][$i]["@attributes"];
            if ($slug == slugify($library["title"])) {
                perId($library["key"], $router);
                return;
            }
        }
    });

});


$router->get('/media/(\d+)/all', function($id) use ($router) {
    if (!$data = getContent(getUrl("library/metadata/$id/allLeaves")))
        return $router->trigger404();
    if (!$data["@attributes"]["size"] > 0)
        return $router->trigger404();
    if ($data["@attributes"]["viewGroup"] != "episode")
        return $router->trigger404();
    if (!$dataLibrary = getContent(getUrl("library/sections/".$data["@attributes"]["librarySectionID"]."/all")))
        return $router->trigger404();
    
        // echo json_encode($data); return;

    $resultArray = array(
        "library" => copyLibrary($dataLibrary),
        "media" => getEpisodes($data, true)
    );
    return responseJsonOk($resultArray);
});

$router->get('/media/(\d+)', function($id) use ($router) {
    if (!$data = getContent(getUrl("library/metadata/$id")))
        return $router->trigger404();
        
    // Check what type media is: Movie, show, season or episode
    if (isset($data["Video"])) {
        $media = $data["Video"];
    } else if (isset($data["Directory"])) {
        $media = $data["Directory"];
    }
    $type = $media["@attributes"]["type"];

    $result = array(
        "library" => copyLibrary($data),
        "media" => array()
    );

    switch ($type) {
        case "episode":
            $result["media"] = getEpisodeData($media); break;
        case "season":
            $result["media"] = getSeasonData($media); break;
        case "show":
            $result["media"] = getShowData($media); break;
        case "movie":
            $result["media"] = getMovieData($media); break;
        default: return $router->trigger404();
    }
    return responseJsonOk($result);

});

$router->get('/(\d+)/background\.jpg', function($id) use ($router) {
    if ($img = @file_get_contents(getUrl(
        "photo/:/transcode",
        array(
            "width" => 720, "height" => 238, "minSize" => 1, "upscale" => 1, "opacity" => 25, "background" => "343a3f", "format" => "png", "blur" => 37, "url" => getUrl("library/metadata/$id/thumb", false, true)
        )
    ))) {
        header('Content-Type: image/jpeg');
        echo $img; 
        return;
    }
    return $router->trigger404();
});

$router->get('/(\d+)/poster(?:-(large))?\.jpg', function($id, $size = null) use ($router) {
    $_size = array("w" => $size=="large"?270:120, "h" => $size=="large"?400:181);
    if ($img = @file_get_contents(getUrl(
        "photo/:/transcode",
        array(
            "width" => $_size["w"], "height" => $_size["h"], "minSize" => 1, "upscale" => 1, "url" => getUrl("library/metadata/$id/thumb", false, true)
        )
    ))) {
        header('Content-Type: image/jpeg');
        echo $img; 
        return;
    }
    return $router->trigger404();
});

$router->get('/(\d+)/thumb\.jpg', function($id) use ($router) {
    if ($img = @file_get_contents(getUrl(
        "photo/:/transcode",
        array(
            "width" => 350, "height" => 200, "minSize" => 1, "upscale" => 1, "url" => getUrl("library/metadata/$id/thumb", false, true)
        )
    ))) {
        header('Content-Type: image/jpeg');
        echo $img; 
        return;
    }
    return $router->trigger404();
});

$router->get('/(\d+)/art\.jpg', function($id) use ($router) {
    $url = getUrl("library/metadata/$id/art");
    if ($img = @file_get_contents($url)) {
        header('Content-Type: image/jpeg');
        echo $img; 
        return;
    }
    return $router->trigger404();
});

$router->get('/(\d+)/banner\.jpg', function($id) use ($router) {
    $url = getUrl("library/metadata/$id/banner");
    if ($img = @file_get_contents($url)) {
        header('Content-Type: image/jpeg');
        echo $img; 
        return;
    }
    return $router->trigger404();
});

$router->all('/.*', function() use ($router) {
    return $router->trigger404();
});

$router->run();