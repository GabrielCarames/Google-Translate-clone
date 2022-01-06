import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import useSelectLanguageHelper from "./useSelectLanguageHelper"

export function useSearchLanguageHelper(languageList, setShowList, results, setResults, showList, languageInUse, setLanguageInUse) {
    const {selectLanguage} = useSelectLanguageHelper(languageInUse, setLanguageInUse)
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

    const selectSearchLanguage = (item) => {
        const prevShowList = prevShowListRef.current;
        selectLanguage(prevShowList, item)
    }

    return {setTextToSearch, backToLanguage, backToLanguagesList, textToSearch, emptyValue, selectSearchLanguage}
}

export default useSearchLanguageHelper