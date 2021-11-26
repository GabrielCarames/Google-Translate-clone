import { useEffect, useState } from "react";

import qs from "qs" 
import { useDispatch, useSelector } from "react-redux";
var axios = require("axios").default;

export function useTranslateHelper (languages, showList, setShowList, results, setResults) {
    const languagesState = useSelector(state => state.changeLanguageReducer)

    const [ textToTranslate, setTextToTranslate ] = useState()
    
    const [ textTranslated, setTextTranslated] = useState('Traduccion')

    const dispatch = useDispatch()

    const [state, setState] = useState(false)
    
    const getTraduction = () => {
        var traductionOptions = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
              'x-rapidapi-key': '7d349e67bemsh0695bb60cc2ce3dp18873fjsn8dab5e90bb12'
            },
            data: qs.stringify({q: textToTranslate, target: languagesState.target.language, source: languagesState.source.language})
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
      getTraduction()
    }

    const check = () => {
      changeLanguage()
      if (!state){
         setState(true)
      }else{
        setState(false)
      }
    }

    const languageArrowList = () =>{
      showList ? setShowList(false) : setShowList(true); setResults(false)
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


    return { getTraduction, setTextToTranslate, translateText, textTranslated, wholanguage, languageArrowList, changeLanguage, whatNameClass, check }
}



export default useTranslateHelper