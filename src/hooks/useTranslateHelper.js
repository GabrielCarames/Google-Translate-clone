import { useEffect, useState } from "react";

import qs from "qs" 
import { useDispatch, useSelector } from "react-redux";
var axios = require("axios").default;

export function useTranslateHelper (languages, showList, setShowList, results, setResults) {
    const languagesState = useSelector(state => state.changeLanguageReducer)

    const [ textToTranslate, setTextToTranslate ] = useState()
    
    const [ textTranslated, setTextTranslated] = useState('Translation')

    const [ languageInUse, setLanguageInUse ] = useState({target: languagesState.target.data, source: languagesState.source.data })

    const dispatch = useDispatch()

    // const [state, setState] = useState(false)
    
    const getTraduction = () => {
        console.log("uso indefinido", languageInUse)
        let data
        if(languagesState.detect) data = qs.stringify({q: textToTranslate})
        else data = qs.stringify({q: textToTranslate, target: languageInUse.target.language, source: languageInUse.source.language})
        var traductionOptions = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
                'x-rapidapi-key': '7d349e67bemsh0695bb60cc2ce3dp18873fjsn8dab5e90bb12'
            },
            data: data
          };
        axios.request(traductionOptions).then(function (response) {
            console.log(response.data.data.translations[0].translatedText)
            setTextTranslated(response.data.data.translations[0].translatedText);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const translateText = (text) =>{
      setTextToTranslate(text)
    }
    const changeLanguage = () => {
      dispatch({type: '@changeLanguages'})
      //getTraduction()
    }

    const check = (type) => {
        if(window.innerWidth >= 320 && window.innerWidth <= 1200 ){
            languageArrowList(type)
        }
        // else {
        //     // changeLanguage()
        //     if (!state){
        //         setState(true)
        //     }else{
        //         setState(false)
        //     }

        // }
    }

    const languageArrowList = (type) =>{
      showList ? setShowList(false) : setShowList(type); setResults(false)
    }
    // const whatNameClass = (className) => {
    //   switch (state) {
    //     case true:
    //       return `list__item--${className} active`
    //     case false:
    //       return `list__item--${className}`
    //     default:
    //       break
    //   }
    // }

    const checkActivatedLanguage = (className,type,side) => {
        console.log("sasasa",className,languageInUse)
        // console.log("hoasldasdasd", languagesState.source.active)
        // switch (type) {
        //     case "left":
        //         if(languagesState[className].active === "left") return `list__item--${className} active`
        //         else return `list__item--${className}`
        //     case "right":
        //         if(languagesState[className].active === "right") return `list__item--${className} active`
        //         else return `list__item--${className}`
        //     default:
        //         break;
        // }
        // if(Object.keys(languageInUse).find((type)=> type.name === className)){
        //     return `list__item--${type} active`
        // }
        // if(languageInUse[type] && className === languageInUse[type].name){
        //     return `list__item--${type} active`
        // }
        // return `list__item--${type}`
        switch (side) {
            case "left":
                if(languageInUse.source.name === className){
                    return `list__item--${type}`
                }
                if(languageInUse[type] && className === languageInUse[type].name){
                    return `list__item--${type} active`
                }
                return `list__item--${type}`
            // case "right":

            default:
                return `list__item--${type}`
                
        }
    }

    // const wholanguage = (type) =>{
    //   let result
    //   switch (type) {
    //       case "target":
    //           result = languages.filter((item)=>item.language === languagesState.target)
    //           return result[0].name
    //       case "source":
    //           result = languages.filter((item)=>item.language === languagesState.source)
    //           return result[0].name
    //       default:
    //           break;
    //   }
    // }

    useEffect(()=>{
      const timer = setTimeout(async () => {
        getTraduction()
    }, 1000);
    return () => clearTimeout(timer);
    },[textToTranslate])

    const autoGrow = (element) => {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight)+"px";
    }

    const emptyValue = () => {
        setTextToTranslate("")
        const textArea = document.getElementById("translateText-textarea")
        textArea.style.height = "150px";
    }

    return { getTraduction, setTextToTranslate, translateText, textTranslated, languageArrowList, changeLanguage, check, textToTranslate, setTextTranslated, autoGrow, emptyValue, checkActivatedLanguage, setLanguageInUse, languageInUse }
}



export default useTranslateHelper