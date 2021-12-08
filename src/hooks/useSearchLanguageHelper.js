import { useEffect, useState } from "react"

export function useSearchLanguageHelper (languages, setShowList, results, setResults)
{
    const [textToSearch, setTextToSearch] = useState()

    const searchLanguage = (language) => {
        setTextToSearch(language)
    }

    const backToLanguage = () => {
        const element = document.getElementById("language-result-id")
        const container = document.getElementById("search-language-id")
        const translateId = document.getElementById("translate-body-id")
        element.className = "language-results" 
        container.className = "search-language-container"
        translateId.className = "translate-body"
    }

    useEffect(()=>{
        if (!textToSearch) return 
        const timer = setTimeout(async () => {
        const searchResults = languages.filter((languageItem)=>{
            console.log(languageItem.name.toLowerCase(), textToSearch)
            return languageItem.name.toLowerCase().indexOf(textToSearch) >= 0
        })
        searchResults ? setResults(searchResults) : setResults('No results')
        console.log(searchResults)
        setShowList(false)
    }, 1000);
    return () => clearTimeout(timer);
    },[textToSearch])
    return {searchLanguage, backToLanguage}
}

export default useSearchLanguageHelper