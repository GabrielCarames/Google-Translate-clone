import useTranslateHelper from "../hooks/useTranslateHelper"

const LanguageList = () =>{
    const {getLanguages, getTraduction, setTextToTranslate, setTarget, setSource, target, translateText, textTranslated, languages} = useTranslateHelper()
    console.log(languages)
    return(
        <div className="language-list-container">
            <ul className="language-list">
            {/* {languages.map((item, id) => {
                    return <li className="language-list__item">{item.name}</li>
                })
            } */}
            </ul>
        </div>
    )
}
export default LanguageList