const languages = {
    source: {language: "en", name: "english"}, //Representa el primer idioma a traducir, como no hay nada por default, se va a detectar automaticamente el idioma introducido
    target: {language: "es", name: "spanish"},//Representa el idioma por defecto de la pagina en general, y el idioma por defecto a traducir, ej: metes "hola" y lo traduce a ingles "hello"
    extraSource: {language: "sd", name: "sindhi"},
    extraTarget: {language: "sd", name: "sindhi"},
}


const changeLanguageReducer = (state = languages, {type, payload}) => {
    let languagesCopy = Object.assign({}, state)
    let actualExtraSource = languagesCopy.extraSource
    let actualExtraTarget = languagesCopy.extraTarget
    switch (type) {
        case "@setExtraSourceLanguage":
            languagesCopy.extraSource = payload
            return languagesCopy
        case "@setExtraTargetLanguage":
            languagesCopy.extraTarget = payload
            return languagesCopy
        case "@setResponsiveTarget" :
            languagesCopy.target = payload
            return languagesCopy
        case "@setResponsiveSource" :
            console.log("paloyad", payload)
            languagesCopy.source = payload
            return languagesCopy
        case "@invertExtras":
            languagesCopy.extraSource = actualExtraTarget
            languagesCopy.extraTarget = actualExtraSource
            return languagesCopy
        case "@changeLanguage":
            switch (payload) {
                case "source":
                    languagesCopy.extraTarget= actualExtraSource
                    return languagesCopy
                case "target":
                    languagesCopy.extraSource= actualExtraTarget
                    return languagesCopy
                default:
                    break;
            }break;
            case "@invertResponsive":
                let actualTarget = languagesCopy.target
                let actualSource = languagesCopy.source
                languagesCopy.source = actualTarget
                languagesCopy.target = actualSource
                return languagesCopy
        default:
            return state
            
    }
}

export default changeLanguageReducer