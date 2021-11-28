import { useDispatch } from "react-redux"


const LanguageList = ({target, languages, showList}) =>{
const dispatch = useDispatch()
    const checkLanguege= (className, item) =>{
        return target===item.language? className + "--target":className
    }
    return(
        <div className={showList ? "language-list-container active" : "language-list-container"}>
            <ul className="language-list">
                {
                    languages.map((item, id) => {
                            return <li className={checkLanguege("language-list__item",item)} key={id} onClick={()=>{console.log("ayuda", item);dispatch({type:"@setLanguage", payload: item })}}><i className="fas fa-check"></i>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default LanguageList