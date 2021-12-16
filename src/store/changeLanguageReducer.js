const languages = {
    source: {data: {language: "es", name: "spanish"}, active: "left"}, //Representa el primer idioma a traducir, como no hay nada por default, se va a detectar automaticamente el idioma introducido
    target: {data: {language: "en", name: "english"}, active: "right"},//Representa el idioma por defecto de la pagina en general, y el idioma por defecto a traducir, ej: metes "hola" y lo traduce a ingles "hello"
    extra: {data: {language: "sd", name: "sindhi"}, active: false},
    detect: false
}


const changeLanguageReducer = (state = languages, {type, payload}) => {
    let languagesCopy = Object.assign({}, state)
    switch (type) {
        // case "@setLanguage":
        //     if (payload.showList === "source") languagesCopy.source.data = payload.item
        //     else languagesCopy.target.data = payload.item
        //     return languagesCopy
        // case "@detectLanguage":
        //     languagesCopy.detect = true
        //     return languagesCopy
        case "@changeExtra":
            // console.log(payload)
            // languagesCopy.source.data = payload
            // languagesCopy.extra.data = state.source.data
            if(payload.type === "left") {
                languagesCopy.source.data = state.extra.data
            }
            if(payload.type === "right") {
                languagesCopy.target.active = false
                languagesCopy.extra.active = "right"
            }
            return languagesCopy
        // case "@changeLanguages":
        //     if (payload.type === "source") languagesCopy.target.data = payload.language
        //     else languagesCopy.source.data = payload.language
        //     return languagesCopy
        case '@invertLanguages':
            const actualTarget = languagesCopy.target.active
            const actualSource = languagesCopy.source.active
                languagesCopy.source.active = actualTarget
                languagesCopy.target.active = actualSource
            return languagesCopy
        default:
            return state
    }
}

export default changeLanguageReducer