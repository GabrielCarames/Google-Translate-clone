import useSearchLanguageHelper from "../hooks/useSearchLanguageHelper"

const SearchLanguage = ({languages}) => {
const {searchLanguage}=useSearchLanguageHelper(languages)
    return (
        <div className="searchLanguge-container">
            <input type="text" className="searchLanguage-container__input" onChange={(e)=>searchLanguage(e.target.value)}/>
        </div>
    )
}
export default SearchLanguage