import { useDispatch } from "react-redux"
import useSearchLanguageHelper from "../hooks/useSearchLanguageHelper"

const SearchLanguage = ({languageList, showList, setShowList, results, setResults, languageInUse, setLanguageInUse}) => {
    const {setTextToSearch, backToLanguage, backToLanguagesList, textToSearch, emptyValue, selectSearchLanguage} = useSearchLanguageHelper(languageList, setShowList, results, setResults, showList, languageInUse, setLanguageInUse)
    const dispatch = useDispatch()
    
    return (
        <>
            <div className="search-language-container" id="search-language-id">
                <button className="search-language-icon" onClick={() => backToLanguagesList()}>
                    <i className="fas fa-arrow-left"></i>
                </button>
                <input type="text" className="search-language-container__input" value={textToSearch} placeholder="Search languages" onChange={(e)=> setTextToSearch(e.target.value)}/>
                {results && <div className="translate__fa-times" onClick={() => emptyValue()}><i className="fas fa-times"></i></div>} 
            </div>
            <div className={results ? "language-results active" : "language-results"} id="language-result-id">
                <ul className="language-results-list list">
                {
                    results && results.map((result, id) => {
                        return (
                            <li className="list__item" key={id} onClick={() => {selectSearchLanguage(result);backToLanguage();setResults(undefined);dispatch({type:"@languagesHistory", payload: result})}}>
                                <p className="list__language-name">{result.name}</p>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </>
    )
}

export default SearchLanguage