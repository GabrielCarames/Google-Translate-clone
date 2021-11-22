import { useEffect, useState } from "react";

import qs from "qs" 
import { useSelector } from "react-redux";
var axios = require("axios").default;

export function useTranslateHelper (languages) {
    const languagesCosa = useSelector(state => state.changeLanguageReducer)

    const [ textToTranslate, setTextToTranslate ] = useState()
    
    const [ textTranslated, setTextTranslated] = useState('Traduccion')
    
    const getTraduction = () => {
        var traductionOptions = {
            method: 'POST',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
              'x-rapidapi-key': '7d349e67bemsh0695bb60cc2ce3dp18873fjsn8dab5e90bb12'
            },
            data: qs.stringify({q: textToTranslate, target: languagesCosa.target, source: languagesCosa.source})
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

    const wholanguage = (type) =>{
      let result
      switch (type) {
          case "target":
              result = languages.filter((item)=>item.language === languagesCosa.target)
              return result[0].name
          case "source":
              result = languages.filter((item)=>item.language === languagesCosa.source)
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


    return { getTraduction, setTextToTranslate, translateText, textTranslated, wholanguage }
}



export default useTranslateHelper