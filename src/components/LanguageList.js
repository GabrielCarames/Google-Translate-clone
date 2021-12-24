import { useDispatch, useSelector } from "react-redux"




const LanguageList = ({target, languages, showList}) =>{
const dispatch = useDispatch()
    const checkLanguage = (className, item, id) => {
        const filterCosa = languagehistorySelector.filter((cosa) => {
            return cosa.language === item.language
        })
        if (target.language === item.language){
            return className + "--target"
        } else if (filterCosa.length >=1){
            return className + "--history"
        }else
            return className
        }
    
        
    const languagehistorySelector = useSelector(state => state.languageHistoryReducer)
    return(
        <div className = {showList ? "language-list-container active" : "language-list-container"} id="language-list-id">
            {/* <ul className="language-list">
                {
                    languages.map((item, id) => {
                            return <li className={checkLanguage("language-list__item",item, id)} key={id} onClick={()=>{dispatch({type:"@languagesHistory", payload: item });dispatch({type:"@setLanguage", payload: {"item":item, "showList": showList} })}}><i className="fas fa-history"></i><i className="fas fa-check"></i>{item.name}</li>
                    })
                }
            </ul> */}
        </div>
    )
}
export default LanguageList