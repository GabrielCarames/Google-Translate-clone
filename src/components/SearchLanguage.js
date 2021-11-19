import useSearchLanguageHelper from "../hooks/useSearchLanguageHelper"

const SearchLanguage = ({languages, showList}) => {
const {searchLanguage}=useSearchLanguageHelper(languages)
    return (
        <div className={showList ? "search-language-container active" : "search-language-container"}>
            <button className="search-language-icon">
                <i className="fas fa-arrow-left"></i>
            </button>
            <input type="text" className="search-language-container__input" placeholder="Search languages" onChange={(e)=>searchLanguage(e.target.value)}/>
        </div>
    )
}
export default SearchLanguage