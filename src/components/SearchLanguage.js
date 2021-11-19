import useSearchLanguageHelper from "../hooks/useSearchLanguageHelper"

const SearchLanguage = ({languages, showList, setShowList, results, setResults}) => {
const {searchLanguage}=useSearchLanguageHelper(languages, setShowList, results, setResults)
    return (
        <>
            <div className={showList || results ? "search-language-container active" : "search-language-container"}>
                <button className="search-language-icon">
                    <i className="fas fa-arrow-left"></i>
                </button>
                <input type="text" className="search-language-container__input" placeholder="Search languages" onChange={(e)=>searchLanguage(e.target.value)}/>
            </div>
            <div className={results ? "language-results active" : "language-results"}>
                <ul className="language-results-list list">
                {
                    results && results.map((result, id) => {
                        return (
                                <li className="list__item" key={id}>
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