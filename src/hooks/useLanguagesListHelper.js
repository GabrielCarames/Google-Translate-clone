import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export function useLanguagesListHelper (languageInUse, setLanguageInUse, showList) {
    const languagehistorySelector = useSelector(state => state.languageHistoryReducer)
    const dispatch = useDispatch()
    
    const languageList = [
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

    const checkLanguage = (className, item) => {
        const languages = languagehistorySelector.filter((languageItem) => {
            return languageItem.language === item.language
        })
        switch (showList) {
            case "source":
                if (languageInUse.source.language === item.language) return className + "--target"
                else if (languages.length >= 1) return className + "--history"
                else return className
            case "target":
                if (languageInUse.target.language === item.language) return className + "--target"
                else if (languages.length >= 1) return className + "--history"
                else return className
            default:
                break;
        }
    }

    const selectLanguage = (item) => {
        if(window.innerWidth >= 320 && window.innerWidth <= 1200) {
            setLanguageInUse({...languageInUse, ...{ source: item}})
            switch (showList) {
                case "target": dispatch({type:"@setResponsiveTarget", payload: item })
                    break;
                case "source": dispatch({type:"@setResponsiveSource", payload: item })
                    break;
                default:
                    break;
            }
        } else {
            let actualTarget = languageInUse.target
            let actualSource = languageInUse.source
            switch (showList) {
                case "target": 
                    dispatch({type:"@setExtraTargetLanguage", payload: item })
                    setLanguageInUse({...languageInUse, ...{ source: actualSource }, ...{target: item}})
                    break;
                case "source": 
                    dispatch({type:"@setExtraSourceLanguage", payload: item })
                    setLanguageInUse({...languageInUse, ...{ source: item}, ...{target: actualTarget }})    
                    break;
                default:
                    break;
            }
        }   
    }
        
    useEffect(() => {
        const translateId = document.getElementById("translate-body-id")
        switch (showList) {
            case true: translateId.className = "translate-body inactive"  
                break;
            case false: translateId.className = "translate-body"
                break;
            default:
                break;
        }
    }, [showList])

    return {languageList, checkLanguage, selectLanguage}
}

export default useLanguagesListHelper