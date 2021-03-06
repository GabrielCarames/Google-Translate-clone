import { useDispatch, useSelector } from "react-redux";

export default function useSelectLanguageHelper(languageInUse, setLanguageInUse) {
    const languagesState = useSelector(state => state.changeLanguageReducer)
    const dispatch = useDispatch()

    const selectLanguage = (showList, item) => {
        if(window.innerWidth >= 320 && window.innerWidth <= 1200) {
            switch (showList) {
                case "target": 
                    dispatch({type:"@setResponsiveTarget", payload: item})
                    setLanguageInUse({...languageInUse, ...{target: item}})
                    break;
                case "source": 
                    dispatch({type:"@setResponsiveSource", payload: item})
                    setLanguageInUse({...languageInUse, ...{source: item}})
                    break;
                default:
                    break;
            }
        } else {
            let actualTarget = languageInUse.target
            let actualSource = languageInUse.source
            switch (showList) {
                case "target":
                    if(languagesState.extraSource.name === languageInUse.source.name && languagesState.extraTarget.name === languageInUse.target.name) dispatch({type: "@changeLanguage", payload: "target"})
                    dispatch({type:"@setExtraTargetLanguage", payload: item})
                    if(languageInUse.source.name === item.name) setLanguageInUse({...languageInUse, ...{source: actualTarget}, ...{target: item}})
                    else setLanguageInUse({...languageInUse, ...{target: item}})
                    break;
                case "source": 
                if(languagesState.extraSource.name === languageInUse.source.name && languagesState.extraTarget.name === languageInUse.target.name) dispatch({type: "@changeLanguage", payload: "source"})
                    dispatch({type:"@setExtraSourceLanguage", payload: item})
                    if(languageInUse.target.name === item.name) setLanguageInUse({...languageInUse, ...{source: item}, ...{target: actualSource}})
                    else setLanguageInUse({...languageInUse, ...{source: item}})
                    break;
                default:
                    break;
            }
        }   
    }

    return {selectLanguage}
}
