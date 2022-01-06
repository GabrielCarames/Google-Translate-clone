import { useDispatch } from "react-redux"
import useLanguagesListHelper from "../hooks/useLanguagesListHelper"

const LanguageList = ({languageList, showList, setShowList, languageInUse, setLanguageInUse}) => {
    const {checkLanguage, selectLanguage} = useLanguagesListHelper(languageInUse, setLanguageInUse, showList)
    const dispatch = useDispatch()

    return(
        <div className = {showList ? "language-list-container active" : "language-list-container"} id="language-list-id">
            <ul className="language-list">
                {
                    languageList.map((item, id) => {
                            return <li className={checkLanguage("language-list__item", item)} key={id} onClick={()=>{selectLanguage(item);dispatch({type:"@languagesHistory", payload: item }); setShowList(false)}}><i className="fas fa-history"></i><i className="fas fa-check"></i>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default LanguageList