import { useEffect, useState } from "react";

import qs from "qs" 
import { useDispatch, useSelector } from "react-redux";
var axios = require("axios").default;

export function useTranslateHelper (languages, showList, setShowList, results, setResults) {
    const languagesState = useSelector(state => state.changeLanguageReducer)

    const [ textToTranslate, setTextToTranslate ] = useState()
    
    const [ textTranslated, setTextTranslated] = useState('Translation')

    const dispatch = useDispatch()

    const [state, setState] = useState(false)
    
    const getTraduction = () => {
        let data
        if(languagesState.detect) data = qs.stringify({q: textToTranslate})
        else data = qs.stringify({q: textToTranslate, target: languagesState.target.language, source: languagesState.source.language})
        var traductionOptions = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
                'x-rapidapi-key': '13eca88ee8mshe97f86ae1d3b431p19cfbbjsn59623dbc0ae3'
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
        }else {
            changeLanguage()
            if (!state){
                setState(true)
            }else{
                setState(false)
            }

        }
    }

    const languageArrowList = (type) =>{
      showList ? setShowList(false) : setShowList(type); setResults(false)
    }
    const whatNameClass = (className) => {
      switch (state) {
        case true:
          return `list__item--${className} active`
        case false:
          return `list__item--${className}`
        default:
          break
      }
    }

    const wholanguage = (type) =>{
      let result
      switch (type) {
          case "target":
              result = languages.filter((item)=>item.language === languagesState.target)
              return result[0].name
          case "source":
              result = languages.filter((item)=>item.language === languagesState.source)
              return result[0].name
          default:
              break;
      }
    }

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

    return { getTraduction, setTextToTranslate, translateText, textTranslated, wholanguage, languageArrowList, changeLanguage, whatNameClass, check, textToTranslate, setTextTranslated, autoGrow, emptyValue }
}



export default useTranslateHelper