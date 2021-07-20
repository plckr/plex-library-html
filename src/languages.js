const LANG = {
    PT: {
        home: "Início",
        readMore: "Ler mais",
        readLess: "Ler menos",
        directedBy: "Realizado por",
        writtenBy: "Escrito por",
        studio: "Estúdio",
        genre: "Género",
        cast: "Elenco"
    },
    EN: {
        home: "Home",
        readMore: "Read more",
        readLess: "Read less",
        directedBy: "Directed by",
        writtenBy: "Written by",
        studio: "Studio",
        genre: "Genre",
        cast: "Cast"
    }
}

const languageFind = lang => {
    if (!lang) return LANG.EN
    // if (["prt", "bra"].includes(lang)) return LANG.PT // TODO
    return LANG.EN
}

export {LANG, languageFind}