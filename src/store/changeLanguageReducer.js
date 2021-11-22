const languages = {
    source: 'es', //Representa el primer idioma a traducir, como no hay nada por default, se va a detectar automaticamente el idioma introducido
    target: 'en' //Representa el idioma por defecto de la pagina en general, y el idioma por defecto a traducir, ej: metes "hola" y lo traduce a ingles "hello"
}

const changeLanguageReducer = (state = languages, {type, payload}) => {
    let languagesCopy
    switch (type) {
        case '@setSource':
            languagesCopy = Object.assign({}, state)
            languagesCopy.source = payload
            return languagesCopy
        case '@setTarget':
            languagesCopy = Object.assign({}, state)
            languagesCopy.target = payload
            return languagesCopy
        default:
            return state
    }
}

export default changeLanguageReducer