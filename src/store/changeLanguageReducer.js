const languages = {
    source: {language: "es", name: "spanish"}, //Representa el primer idioma a traducir, como no hay nada por default, se va a detectar automaticamente el idioma introducido
    target: {language: "en", name: "english"},//Representa el idioma por defecto de la pagina en general, y el idioma por defecto a traducir, ej: metes "hola" y lo traduce a ingles "hello"
    extra: {language: "sd", name: "sindhi"},
    detect: false
}


const changeLanguageReducer = (state = languages, {type, payload}) => {
    let languagesCopy
    switch (type) {
        case '@changeLanguages':
            languagesCopy = Object.assign({}, state)
            const actualTarget = languagesCopy.target
            const actualSource = languagesCopy.source
            languagesCopy.source = actualTarget
            languagesCopy.target = actualSource
            return languagesCopy
        case "@setLanguage":
            console.log("hola", payload)
            languagesCopy = Object.assign({}, state)
            if (payload.showList === "source") languagesCopy.source = payload.item
            else languagesCopy.target = payload.item
            return languagesCopy
        case "@detectLanguage":
            languagesCopy = Object.assign({}, state)
            languagesCopy.detect = true
            return languagesCopy
        case "@changeExtra":
            console.log(payload)
            languagesCopy = Object.assign({}, state)
            languagesCopy.target = payload
            languagesCopy.extra = state.target
            return languagesCopy
            default:
            return state
    }
}

export default changeLanguageReducer