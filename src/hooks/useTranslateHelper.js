import { useEffect, useState } from "react";

import qs from "qs" 
var axios = require("axios").default;

export function useTranslateHelper () {

    const [ textToTranslate, setTextToTranslate ] = useState()
    const [ source, setSource ] = useState() //Representa el primer idioma a traducir, como no hay nada por default, se va a detectar automaticamente el idioma introducido
    const [ target, setTarget ] = useState('en') //Representa el idioma por defecto de la pagina en general, y el idioma por defecto a traducir, ej: metes "hola" y lo traduce a ingles "hello"
    const [ textTranslated, setTextTranslated] = useState('Traduccion')
    const [ languages, setLanguages ] = useState()
    const objetoDeIdiomasParaNoGastarTicketsYNoCagarXd = {
        "data": {
          "languages": [
            {
              "language": "af",
              "name": "Afrikaans"
            },
            {
              "language": "sq",
              "name": "Albanian"
            },
            {
              "language": "am",
              "name": "Amharic"
            },
            {
              "language": "ar",
              "name": "Arabic"
            },
            {
              "language": "hy",
              "name": "Armenian"
            },
            {
              "language": "az",
              "name": "Azerbaijani"
            },
            {
              "language": "eu",
              "name": "Basque"
            },
            {
              "language": "be",
              "name": "Belarusian"
            },
            {
              "language": "bn",
              "name": "Bengali"
            },
            {
              "language": "bs",
              "name": "Bosnian"
            },
            {
              "language": "bg",
              "name": "Bulgarian"
            },
            {
              "language": "ca",
              "name": "Catalan"
            },
            {
              "language": "ceb",
              "name": "Cebuano"
            },
            {
              "language": "ny",
              "name": "Chichewa"
            },
            {
              "language": "zh-CN",
              "name": "Chinese (Simplified)"
            },
            {
              "language": "zh-TW",
              "name": "Chinese (Traditional)"
            },
            {
              "language": "co",
              "name": "Corsican"
            },
            {
              "language": "hr",
              "name": "Croatian"
            },
            {
              "language": "cs",
              "name": "Czech"
            },
            {
              "language": "da",
              "name": "Danish"
            },
            {
              "language": "nl",
              "name": "Dutch"
            },
            {
              "language": "en",
              "name": "English"
            },
            {
              "language": "eo",
              "name": "Esperanto"
            },
            {
              "language": "et",
              "name": "Estonian"
            },
            {
              "language": "tl",
              "name": "Filipino"
            },
            {
              "language": "fi",
              "name": "Finnish"
            },
            {
              "language": "fr",
              "name": "French"
            },
            {
              "language": "fy",
              "name": "Frisian"
            },
            {
              "language": "gl",
              "name": "Galician"
            },
            {
              "language": "ka",
              "name": "Georgian"
            },
            {
              "language": "de",
              "name": "German"
            },
            {
              "language": "el",
              "name": "Greek"
            },
            {
              "language": "gu",
              "name": "Gujarati"
            },
            {
              "language": "ht",
              "name": "Haitian Creole"
            },
            {
              "language": "ha",
              "name": "Hausa"
            },
            {
              "language": "haw",
              "name": "Hawaiian"
            },
            {
              "language": "iw",
              "name": "Hebrew"
            },
            {
              "language": "hi",
              "name": "Hindi"
            },
            {
              "language": "hmn",
              "name": "Hmong"
            },
            {
              "language": "hu",
              "name": "Hungarian"
            },
            {
              "language": "is",
              "name": "Icelandic"
            },
            {
              "language": "ig",
              "name": "Igbo"
            },
            {
              "language": "id",
              "name": "Indonesian"
            },
            {
              "language": "ga",
              "name": "Irish"
            },
            {
              "language": "it",
              "name": "Italian"
            },
            {
              "language": "ja",
              "name": "Japanese"
            },
            {
              "language": "jw",
              "name": "Javanese"
            },
            {
              "language": "kn",
              "name": "Kannada"
            },
            {
              "language": "kk",
              "name": "Kazakh"
            },
            {
              "language": "km",
              "name": "Khmer"
            },
            {
              "language": "rw",
              "name": "Kinyarwanda"
            },
            {
              "language": "ko",
              "name": "Korean"
            },
            {
              "language": "ku",
              "name": "Kurdish (Kurmanji)"
            },
            {
              "language": "ky",
              "name": "Kyrgyz"
            },
            {
              "language": "lo",
              "name": "Lao"
            },
            {
              "language": "la",
              "name": "Latin"
            },
            {
              "language": "lv",
              "name": "Latvian"
            },
            {
              "language": "lt",
              "name": "Lithuanian"
            },
            {
              "language": "lb",
              "name": "Luxembourgish"
            },
            {
              "language": "mk",
              "name": "Macedonian"
            },
            {
              "language": "mg",
              "name": "Malagasy"
            },
            {
              "language": "ms",
              "name": "Malay"
            },
            {
              "language": "ml",
              "name": "Malayalam"
            },
            {
              "language": "mt",
              "name": "Maltese"
            },
            {
              "language": "mi",
              "name": "Maori"
            },
            {
              "language": "mr",
              "name": "Marathi"
            },
            {
              "language": "mn",
              "name": "Mongolian"
            },
            {
              "language": "my",
              "name": "Myanmar (Burmese)"
            },
            {
              "language": "ne",
              "name": "Nepali"
            },
            {
              "language": "no",
              "name": "Norwegian"
            },
            {
              "language": "or",
              "name": "Odia (Oriya)"
            },
            {
              "language": "ps",
              "name": "Pashto"
            },
            {
              "language": "fa",
              "name": "Persian"
            },
            {
              "language": "pl",
              "name": "Polish"
            },
            {
              "language": "pt",
              "name": "Portuguese"
            },
            {
              "language": "pa",
              "name": "Punjabi"
            },
            {
              "language": "ro",
              "name": "Romanian"
            },
            {
              "language": "ru",
              "name": "Russian"
            },
            {
              "language": "sm",
              "name": "Samoan"
            },
            {
              "language": "gd",
              "name": "Scots Gaelic"
            },
            {
              "language": "sr",
              "name": "Serbian"
            },
            {
              "language": "st",
              "name": "Sesotho"
            },
            {
              "language": "sn",
              "name": "Shona"
            },
            {
              "language": "sd",
              "name": "Sindhi"
            },
            {
              "language": "si",
              "name": "Sinhala"
            },
            {
              "language": "sk",
              "name": "Slovak"
            },
            {
              "language": "sl",
              "name": "Slovenian"
            },
            {
              "language": "so",
              "name": "Somali"
            },
            {
              "language": "es",
              "name": "Spanish"
            },
            {
              "language": "su",
              "name": "Sundanese"
            },
            {
              "language": "sw",
              "name": "Swahili"
            },
            {
              "language": "sv",
              "name": "Swedish"
            },
            {
              "language": "tg",
              "name": "Tajik"
            },
            {
              "language": "ta",
              "name": "Tamil"
            },
            {
              "language": "tt",
              "name": "Tatar"
            },
            {
              "language": "te",
              "name": "Telugu"
            },
            {
              "language": "th",
              "name": "Thai"
            },
            {
              "language": "tr",
              "name": "Turkish"
            },
            {
              "language": "tk",
              "name": "Turkmen"
            },
            {
              "language": "uk",
              "name": "Ukrainian"
            },
            {
              "language": "ur",
              "name": "Urdu"
            },
            {
              "language": "ug",
              "name": "Uyghur"
            },
            {
              "language": "uz",
              "name": "Uzbek"
            },
            {
              "language": "vi",
              "name": "Vietnamese"
            },
            {
              "language": "cy",
              "name": "Welsh"
            },
            {
              "language": "xh",
              "name": "Xhosa"
            },
            {
              "language": "yi",
              "name": "Yiddish"
            },
            {
              "language": "yo",
              "name": "Yoruba"
            },
            {
              "language": "zu",
              "name": "Zulu"
            },
            {
              "language": "he",
              "name": "Hebrew"
            },
            {
              "language": "zh",
              "name": "Chinese (Simplified)"
            }
          ]
        }
      }

    var languagesOptions = {
      method: 'GET',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
      params: {target: target},
      headers: {
        'accept-encoding': 'application/gzip',
        'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
        'x-rapidapi-key': '7d349e67bemsh0695bb60cc2ce3dp18873fjsn8dab5e90bb12'
      }
    };
    
    const getLanguages = () => {
        // axios.request(languagesOptions).then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });
        setLanguages(objetoDeIdiomasParaNoGastarTicketsYNoCagarXd.data.languages)
        console.log("cosa", objetoDeIdiomasParaNoGastarTicketsYNoCagarXd.data.languages)
        console.log(objetoDeIdiomasParaNoGastarTicketsYNoCagarXd.data.languages)
        console.log(languages,setLanguages)
    }
    
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
            setTextTranslated(response.data.data.translations[0].translatedText);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const translateText = (text) =>{
      setTextToTranslate(text)
    }
    useEffect(()=>{
      const timer = setTimeout(async () => {
        getTraduction()
    }, 1000);
    return () => clearTimeout(timer);
    },[textToTranslate])


    return { getLanguages, getTraduction, setTextToTranslate, setTarget, setSource, target, translateText, textTranslated, languages }
}



export default useTranslateHelper