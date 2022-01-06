import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"




const LanguageList = ({source, languages, showList, languageInUse, setLanguageInUse}) =>{
const dispatch = useDispatch()
    const checkLanguage = (className, item, id) => {
        const languages = languagehistorySelector.filter((languageItem) => {
            return languageItem.language === item.language
        })
        switch (showList) {
            case "source":
                if (languageInUse.source.language === item.language){
                    return className + "--target"
                }else if (languages.length >= 1) {
                    return className + "--history"
                }else{
                    return className
                }
            case "target":
                if (languageInUse.target.language === item.language){
                    return className + "--target"
                }else if (languages.length >= 1) {
                    return className + "--history"
                }else{
                    return className
                }
            default:
                break;
        
        }
    }
    const selectLanguage = (item) => {
        console.log("item", item, showList)
        if(window.innerWidth >= 320 && window.innerWidth <= 1200) {
            if(showList === "target") {
                dispatch({type:"@setResponsiveTarget", payload: item })
                setLanguageInUse({...languageInUse, ...{ target: item}})
            }
            if(showList === "source" ) {
                dispatch({type:"@setResponsiveSource", payload: item })
                setLanguageInUse({...languageInUse, ...{ source: item}})
            }
        } else {
            let actualTarget = languageInUse.target
            let actualSource = languageInUse.source
            if (showList === "target"){
                dispatch({type:"@setExtraTargetLanguage", payload: item })
                setLanguageInUse({...languageInUse, ...{ source: actualSource }, ...{target: item}})
            }
            if (showList === "source"){
                dispatch({type:"@setExtraSourceLanguage", payload: item })
                setLanguageInUse({...languageInUse, ...{ source: item}, ...{target: actualTarget }})    
            }
        }
            
    }
        
    const languagehistorySelector = useSelector(state => state.languageHistoryReducer)

    useEffect(() => {
        if(showList){
            const translateId = document.getElementById("translate-body-id")
                translateId.className = "translate-body inactive"
        } else {
            const translateId = document.getElementById("translate-body-id")
                translateId.className = "translate-body"
        }
    }, [showList])

    return(
        <div className = {showList ? "language-list-container active" : "language-list-container"} id="language-list-id">
            <ul className="language-list">
                {
                    languages.map((item, id) => {
                            return <li className={checkLanguage("language-list__item",item, id)} key={id} onClick={()=>{selectLanguage(item);dispatch({type:"@languagesHistory", payload: item })}}><i className="fas fa-history"></i><i className="fas fa-check"></i>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default LanguageList