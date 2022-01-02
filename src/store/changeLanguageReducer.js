const languages = {
    source: {data: {language: "en", name: "english"}, active: "left"}, //Representa el primer idioma a traducir, como no hay nada por default, se va a detectar automaticamente el idioma introducido
    target: {data: {language: "es", name: "spanish"}, active: "right"},//Representa el idioma por defecto de la pagina en general, y el idioma por defecto a traducir, ej: metes "hola" y lo traduce a ingles "hello"
    extra: {data: {language: "sd", name: "sindhi"}, active: false}
}


const changeLanguageReducer = (state = languages, {type, payload}) => {
    let languagesCopy = Object.assign({}, state)
    switch (type) {
        case "@setExtraLanguage":
            languagesCopy.extra.data = payload
            return languagesCopy
        case "@setResponsiveTarget" :
            languagesCopy.target.data = payload
            return languagesCopy
        case "@setResponsiveSource" :
            console.log("paloyad", payload)
            languagesCopy.source.data = payload
            return languagesCopy
        default:
            return state
    }
}

export default changeLanguageReducer