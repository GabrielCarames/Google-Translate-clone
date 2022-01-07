import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import qs from "qs" 
var axios = require("axios").default;
require("dotenv").config()

export function useTranslateHelper (showList, setShowList, setResults) {
    const languagesState = useSelector(state => state.changeLanguageReducer)
    const [languageInUse, setLanguageInUse] = useState({target: languagesState.target, source: languagesState.source})
    const [textTranslated, setTextTranslated] = useState('Translation')
    const [textToTranslate, setTextToTranslate] = useState()
    const dispatch = useDispatch()

    const getTraduction = () => {
        let data
        if(languagesState.detect) data = qs.stringify({q: textToTranslate})
        else data = qs.stringify({q: textToTranslate, target: languageInUse.target.language, source: languageInUse.source.language})
        let traductionOptions = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_X_RAPIDAPI_KEY
            },
            data: data
        };
        axios.request(traductionOptions).then(function(response) {
            console.log(response.data.data.translations[0].translatedText)
            setTextTranslated(response.data.data.translations[0].translatedText);
        }).catch(function(error) {
            console.error(error);
        });
    }

    const changeLanguage = () => {
        let actualSource = languageInUse.source
        let actualTarget = languageInUse.target
        setLanguageInUse({...languageInUse, ...{ source: actualTarget}, ...{target: actualSource}})
        if(window.innerWidth >= 320 && window.innerWidth <= 1200) dispatch({type:"@invertResponsive"})
        else {
            if(languagesState.extraSource.name === languageInUse.source.name && languagesState.extraTarget.name === languageInUse.target.name) dispatch({type: "@invertExtras"})
            else if (languageInUse.source.name === languagesState.extraSource.name ) dispatch({type: "@changeLanguage", payload: "source"})
            else if(languageInUse.target.name === languagesState.extraTarget.name) dispatch({type: "@changeLanguage", payload: "target"})
        }
    }

    const check = (type) => window.innerWidth >= 320 && window.innerWidth <= 1200 && languageArrowList(type)
    
    const languageArrowList = (type) => {
        showList ? setShowList(false) : setShowList(type)
        setResults(false)
    }

    const checkActivatedLanguage = (className, type) => {
        if(languageInUse[type] && className === languageInUse[type].name) return `list__item--${type} active`
        return `list__item--${type}`
    }

    const invertLanguage = (languageToChange, type) => {
        switch (type) {
            case "right":
                let actualSource = languageInUse.source
                if(languageToChange.language === languageInUse.target.language) setLanguageInUse({...languageInUse, ...{ source: languageToChange}, ...{target: actualSource}})
                else setLanguageInUse({...languageInUse, ...{ source: languageToChange}})
                if (languagesState.extraSource.name === languageInUse.source.name) dispatch({type: "@invertExtras"})
                break;
            case "left":
                let actualTarget = languageInUse.target
                if(languageToChange.language === languageInUse.source.language) setLanguageInUse({...languageInUse, ...{ source: actualTarget}, ...{target: languageToChange}})
                else setLanguageInUse({...languageInUse, ...{ target: languageToChange}})
                if (languagesState.extraTarget.name === languageInUse.target.name) dispatch({type: "@invertExtras"})
                break;
            default:
                break;
        }
    }

    useEffect(()=>{
        if(textToTranslate) {
            const timer = setTimeout(async () => {
                getTraduction()
            }, 1000)
            return () => clearTimeout(timer);
        }
    }, [textToTranslate])

    const autoGrow = (element) => {
        element.style.height = "5px"
        element.style.height = (element.scrollHeight) + "px"
    }

    const emptyValue = () => {
        setTextToTranslate("")
        const textArea = document.getElementById("translateText-textarea")
        textArea.style.height = "150px";
    }

    return {setTextToTranslate, textTranslated, languageArrowList, changeLanguage, check, textToTranslate, setTextTranslated, autoGrow, emptyValue, checkActivatedLanguage, invertLanguage, languageInUse, setLanguageInUse}
}

export default useTranslateHelper