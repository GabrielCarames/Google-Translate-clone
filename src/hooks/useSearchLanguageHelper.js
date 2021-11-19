import { useEffect, useState } from "react"

export function useSearchLanguageHelper (languages)
{
    const [textToSearch, setTextToSearch] = useState()
    const searchLanguage = (language) => {
        setTextToSearch(language)
    }
    useEffect(()=>{
        if (!textToSearch) return 
       const timer = setTimeout(async () => {
        const result = languages.filter((languageItem)=>{
            console.log(languageItem.name.toLowerCase(), textToSearch)
            return languageItem.name.toLowerCase()===textToSearch
        })
        console.log(result)
    }, 1000);
    return () => clearTimeout(timer);
    },[textToSearch])
    return {searchLanguage }
}

export default useSearchLanguageHelper