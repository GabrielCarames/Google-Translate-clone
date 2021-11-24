const languages = {
    source: {language: "es", name: "spanish"}, //Representa el primer idioma a traducir, como no hay nada por default, se va a detectar automaticamente el idioma introducido
    target: {language: "en", name: "english"}//Representa el idioma por defecto de la pagina en general, y el idioma por defecto a traducir, ej: metes "hola" y lo traduce a ingles "hello"
}

const changeLanguageReducer = (state = languages, {type, payload}) => {
    let languagesCopy
    switch (type) {
        case '@setSource':
            languagesCopy = Object.assign({}, state)
            languagesCopy.source.language = payload
            return languagesCopy
        case '@setTarget':
            languagesCopy = Object.assign({}, state)
            languagesCopy.target.language = payload
            return languagesCopy
        default:
            return state
    }
}

export default changeLanguageReducer