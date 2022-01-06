import { useEffect, useState } from "react"

export function useSearchLanguageHelper (languages, setShowList, results, setResults) {
    const [textToSearch, setTextToSearch] = useState()

    const backToLanguage = () => {
        document.getElementById("language-result-id").className = "language-results"
        document.getElementById("search-language-id").className = "search-language-container"
        document.getElementById("translate-body-id").className = "translate-body"
    }

    useEffect(() => {
        if (!textToSearch) return 
        const timer = setTimeout(async () => {
            const searchResults = languages.filter(languageItem => {return languageItem.name.toLowerCase().indexOf(textToSearch) >= 0})
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

    return {setTextToSearch, backToLanguage, backToLanguagesList, textToSearch, emptyValue}
}

export default useSearchLanguageHelper