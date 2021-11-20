import { useEffect, useState } from "react";

import qs from "qs" 
var axios = require("axios").default;

export function useTranslateHelper (languages) {

    const [ textToTranslate, setTextToTranslate ] = useState()
    const [ source, setSource ] = useState("es") //Representa el primer idioma a traducir, como no hay nada por default, se va a detectar automaticamente el idioma introducido
    const [ target, setTarget ] = useState('en') //Representa el idioma por defecto de la pagina en general, y el idioma por defecto a traducir, ej: metes "hola" y lo traduce a ingles "hello"
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
            data: qs.stringify({q: textToTranslate, target: target, source: source})
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
              result = languages.filter((item)=>item.language === target)
              return result[0].name
          case "source":
              result = languages.filter((item)=>item.language === source)
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


    return { getTraduction, setTextToTranslate, setTarget, setSource, target, translateText, textTranslated, source, wholanguage }
}



export default useTranslateHelper