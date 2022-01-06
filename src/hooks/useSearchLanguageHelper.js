import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"

export function useSearchLanguageHelper(languageList, setShowList, results, setResults, showList, languageInUse, setLanguageInUse) {
    const [textToSearch, setTextToSearch] = useState()
    const dispatch = useDispatch()
    const prevShowListRef = useRef();

    const backToLanguage = () => {
        document.getElementById("language-result-id").className = "language-results"
        document.getElementById("translate-body-id").className = "translate-body"
    }

    useEffect(() => {
        if (!textToSearch) return 
        prevShowListRef.current = showList;
        const timer = setTimeout(async () => {
            const searchResults = languageList.filter(languageItem => {return languageItem.name.toLowerCase().indexOf(textToSearch) >= 0})
            searchResults ? setResults(searchResults) : setResults('No results')
            setShowList(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, [textToSearch])

    const backToLanguagesList = () => {
        if(results) {
            document.getElementById("language-list-id").className = "language-list-container active"
            setResults(null)
            setShowList(true)
        } else setShowList(false)
    }

    const emptyValue = () => {
        setTextToSearch("")
        setResults(null)
        setShowList(true)
    }

    const selectLanguage = (item) => {
        const prevShowList = prevShowListRef.current;
        if(window.innerWidth >= 320 && window.innerWidth <= 1200) {
            setLanguageInUse({...languageInUse, ...{ source: item}})
            switch (prevShowList) {
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
            switch (prevShowList) {
                case "target": 
                    if (languageInUse.source.name === item.name){
                        dispatch({type:"@setExtraTargetLanguage", payload: item })
                        setLanguageInUse({...languageInUse, ...{ source: actualTarget }, ...{target: item}})
                    } else {
                        dispatch({type:"@setExtraTargetLanguage", payload: item })
                        setLanguageInUse({...languageInUse, ...{ source: actualSource }, ...{target: item}})
                    }
                    break;
                    
                case "source": 
                    if (languageInUse.target.name === item.name){
                        dispatch({type:"@setExtraSourceLanguage", payload: item })
                        setLanguageInUse({...languageInUse, ...{ source: item}, ...{target: actualSource }})   
                    }else{
                        dispatch({type:"@setExtraSourceLanguage", payload: item })
                        setLanguageInUse({...languageInUse, ...{ source: item}, ...{target: actualTarget }})  
                    }
                    break;

                default:
                    break;
            }
        }   
    }

    return {setTextToSearch, backToLanguage, backToLanguagesList, textToSearch, emptyValue, selectLanguage}
}

export default useSearchLanguageHelper