const languages = {
    source: {data: {language: "en", name: "english"}, active: "left"}, //Representa el primer idioma a traducir, como no hay nada por default, se va a detectar automaticamente el idioma introducido
    target: {data: {language: "es", name: "spanish"}, active: "right"},//Representa el idioma por defecto de la pagina en general, y el idioma por defecto a traducir, ej: metes "hola" y lo traduce a ingles "hello"
    extra: {data: {language: "sd", name: "sindhi"}, active: false}
}


const changeLanguageReducer = (state = languages, {type, payload}) => {
    let languagesCopy = Object.assign({}, state)
    let actualTarget = languagesCopy.target.active
    let actualSource = languagesCopy.source.active
    let actualExtra = languagesCopy.extra.active
    let actualTargetData = languagesCopy.target.data
    let actualSourceData = languagesCopy.source.data 
    let actualExtraData = languagesCopy.extra.data
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
        case "@changeExtra":
            // console.log(payload)
            // languagesCopy.source.data = payload
            // languagesCopy.extra.data = state.source.data
            // if(payload.type === "left") {
            //     languagesCopy.source.data = state.extra.data
            // }
            // if(payload.type === "right") {
            //     languagesCopy.target.active = false
            //     languagesCopy.extra.active = "right"
            // }
            languagesCopy.extra.active = "left"
            languagesCopy.target.active = actualExtra
            languagesCopy.source.active = false
            languagesCopy.extra.data = actualTargetData
            languagesCopy.target.data = actualExtraData
            return languagesCopy
        // case "@changeLanguages":
        //     if (payload.type === "source") languagesCopy.target.data = payload.language
        //     else languagesCopy.source.data = payload.language
        //     return languagesCopy
        case '@invertLanguages':
                console.log("payload",payload)
                if (payload === languagesCopy.target.data || payload === languagesCopy.source.data){
                    languagesCopy.extra.active = false
                    languagesCopy.target.active = actualSource
                    languagesCopy.source.active = actualTarget
                    languagesCopy.source.data = actualTargetData
                    languagesCopy.target.data = actualSourceData
                }else if(payload === languagesCopy.extra.data){
                    languagesCopy.extra.active = "left"
                    languagesCopy.target.active = actualExtra
                    languagesCopy.source.active = false
                    languagesCopy.extra.data = actualTargetData
                    languagesCopy.target.data = actualExtraData
                }
                
                
                
            return languagesCopy
        default:
            return state
    }
}

export default changeLanguageReducer