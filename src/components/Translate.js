import { useEffect, useState } from "react"
import { useDispatch ,useSelector } from "react-redux"
import useLanguagesListHelper from "../hooks/useLanguagesListHelper"
import useTranslateHelper from "../hooks/useTranslateHelper"
import LanguageList from "./LanguageList"
import SearchLanguage from "./SearchLanguage"

const Translate = () => {
    const [ showList, setShowList ] = useState()
    const [results, setResults] = useState()
    const { getLanguages, languages } = useLanguagesListHelper()
    const { translateText, textTranslated ,languageArrowList, changeLanguage, check, textToTranslate, setTextTranslated, autoGrow, emptyValue, checkActivatedLanguage, invertLanguage, languageInUse, setLanguageInUse} = useTranslateHelper(languages, showList, setShowList,results,setResults)
    const languagesState = useSelector(state => state.changeLanguageReducer)
    const dispatch = useDispatch()
    // {type:"@changeLanguages", payload: {type: "source", language: languagesState.source}

    useEffect(() => {
        console.log({languageInUse})
    }, [languageInUse])

    return (
        <article className="body-translate-container translate">
            <header className="translate-header">
                <div className="translate__left-navbar">
                    <ul className="translate-list">
                        <li className={checkActivatedLanguage(languagesState.source.name,"source")} onClick={() => { check("source"); invertLanguage(languagesState.source,"right") }}><p className="list__text" >{languagesState.source.name}</p></li>
                        <li className={checkActivatedLanguage(languagesState.target.name,"source")} onClick={() => { check(); invertLanguage(languagesState.target,"right")}}><p className="list__text">{languagesState.target.name}</p></li>
                        <li className={checkActivatedLanguage(languagesState.extraSource.name,"source")} onClick={() =>{ check();invertLanguage(languagesState.extraSource,"right") }}><p className="list__text" >{languagesState.extraSource.name}</p></li>
                        <li className="list__arrow" onClick={() => languageArrowList("source")}><i className="fas fa-chevron-down"></i></li>
                    </ul>
                </div>
                <div className={"list__change-language"} onClick={() => {changeLanguage(); check()}}><i className="fas fa-exchange-alt"></i></div>
                <div className="translate__right-navbar">
                    <ul className="translate-list">
                        <li className={checkActivatedLanguage(languagesState.target.name,"target")} onClick={() =>{ check("target"); invertLanguage(languagesState.target,"left")}}><p className="list__text" >{languagesState.target.name}</p></li>
                        <li className={checkActivatedLanguage(languagesState.source.name,"target")} onClick={() => {check(); invertLanguage(languagesState.source,"left")}}><p className="list__text">{languagesState.source.name}</p></li>
                        <li className={checkActivatedLanguage(languagesState.extraTarget.name,"target")} onClick={() => {check(); invertLanguage(languagesState.extraTarget,"left")}}><p className="list__text" >{languagesState.extraTarget.name}</p></li>
                        <li className="list__arrow" onClick={() => languageArrowList("target")}><i className="fas fa-chevron-down"></i></li>
                    </ul>
                </div>
            </header>
            <SearchLanguage languages={languages} showList={showList} setShowList={setShowList} results={results} setResults={setResults} ></SearchLanguage>
            {(languages || showList) && <LanguageList source={languageInUse.source} languages={languages} showList={showList} setShowList={setShowList} languageInUse={languageInUse} setLanguageInUse={setLanguageInUse} />}
            <body className={results ? "translate-body inactive" : "translate-body"} id="translate-body-id">
                <div className="translate__text-to-translate">
                    <textarea className="translate__textarea" type="text" autoFocus onChange={(e)=>{translateText(e.target.value);autoGrow(e.target)}} value={textToTranslate} id="translateText-textarea"></textarea>
                    {textToTranslate && <div className="translate__fa-times" onClick={()=> {emptyValue(); setTextTranslated("Translation")}}><i className="fas fa-times"></i></div>} 
                </div>
                <div className={textTranslated === 'Translation' ? "translate__traduction" : "translate__traduction active"}>
                    <p className="translate__text-result">{textTranslated}</p>
                </div>
            </body>
        </article>
    )
}
export default Translate
