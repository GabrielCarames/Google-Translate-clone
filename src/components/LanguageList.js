import { useDispatch, useSelector } from "react-redux"




const LanguageList = ({target, languages, showList}) =>{
const dispatch = useDispatch()
    const checkLanguage = (className, item, id) => {
        console.log("languagehistorySelector y length item ",languagehistorySelector[id], id, languagehistorySelector.length, item.language)
        const filterCosa = languagehistorySelector.filter((cosa) => {
            return cosa.language === item.language
        })
        console.log("fitro",filterCosa)
        if (target.language === item.language){
            return className + "--target"
        } else if (filterCosa.length >=1){
            return className + "--history"
        }else
            return className
        }
    
        
    const languagehistorySelector = useSelector(state => state.languageHistoryReducer)
    return(
        <div className = {showList ? "language-list-container active" : "language-list-container"}>
            <ul className="language-list">
                {
                    languages.map((item, id) => {
                            return <li className={checkLanguage("language-list__item",item, id)} key={id} onClick={()=>{console.log("ayuda", item);dispatch({type:"@languagesHistory", payload: item });dispatch({type:"@setLanguage", payload: item })}}><i class="fas fa-history"></i><i className="fas fa-check"></i>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default LanguageList