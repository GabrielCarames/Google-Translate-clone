import { useState } from "react"
import { useDispatch ,useSelector } from "react-redux"
import useLanguagesListHelper from "../hooks/useLanguagesListHelper"
import useTranslateHelper from "../hooks/useTranslateHelper"
import LanguageList from "./LanguageList"
import SearchLanguage from "./SearchLanguage"

const Translate = () => {
    const [ showList, setShowList ] = useState()
    const [results, setResults] = useState()
    const { getLanguages, languages } = useLanguagesListHelper()
    const { translateText, textTranslated ,languageArrowList, changeLanguage, check, textToTranslate, setTextTranslated, autoGrow, emptyValue, checkActivatedLanguage, setLanguageInUse, languageInUse} = useTranslateHelper(languages, showList, setShowList,results,setResults)
    const languagesState = useSelector(state => state.changeLanguageReducer)
    const dispatch = useDispatch()
    // {type:"@changeLanguages", payload: {type: "source", language: languagesState.source}
    return (
        <article className="body-translate-container translate">
            <header className="translate-header">
                <div className="translate__left-navbar">
                    <ul className="translate-list">
                        {/* <li className={whatNameClass("extra")} onClick={() => {dispatch({type:"@detectLanguage"})}}>DETECT LANGUAGE</li> */}
                        <li className={checkActivatedLanguage(languagesState.source.data.name,"source")} onClick={() => { check(); setLanguageInUse({...languageInUse, ...{ source: languagesState.source.data}, ...{target: languagesState.target.data}}) }}><p className="list__text" >{languagesState.source.data.name}</p></li>
                        <li className={checkActivatedLanguage(languagesState.target.data.name,"source")} onClick={() => { check("source"); setLanguageInUse({...languageInUse, ...{ source: languagesState.target.data}, ...{target: languagesState.source.data}})}}><p className="list__text">{languagesState.target.data.name}</p></li>
                        <li className={checkActivatedLanguage(languagesState.extra.data.name,"source")} onClick={() =>{ check(); setLanguageInUse({...languageInUse, ...{ source: languagesState.extra.data}, ...{target: languagesState.target.data}})}}><p className="list__text" >{languagesState.extra.data.name}</p></li>
                        <li className="list__arrow" onClick={() => languageArrowList("source")}><i className="fas fa-chevron-down"></i></li>
                    </ul>
                </div>
                <div className={"list__change-language"} onClick={() => {changeLanguage(); check()}}><i className="fas fa-exchange-alt"></i></div>
                <div className="translate__right-navbar">
                    <ul className="translate-list">
                        <li className={checkActivatedLanguage(languagesState.source.data.name,"target")} onClick={() => {check("target"); setLanguageInUse({...languageInUse, ...{ source: languagesState.source.data}, ...{ target: languagesState.target.data}})}}><p className="list__text">{languagesState.source.data.name}</p></li>
                        <li className={checkActivatedLanguage(languagesState.target.data.name,"target")} onClick={() =>{ check(); setLanguageInUse({...languageInUse, ...{ source: languagesState.target.data}, ...{ target: languagesState.source.data}})}}><p className="list__text" >{languagesState.target.data.name}</p></li>
                        <li className={checkActivatedLanguage(languagesState.extra.data.name,"target")} onClick={() => {check(); setLanguageInUse({...languageInUse, ...{ source: languagesState.target.data}, ...{ target: languagesState.extra.data}})}}><p className="list__text" >{languagesState.extra.data.name}</p></li>
                        <li className="list__arrow" onClick={() => languageArrowList("target")}><i className="fas fa-chevron-down"></i></li>
                    </ul>
                </div>
            </header>
            <SearchLanguage languages={languages} showList={showList} setShowList={setShowList} results={results} setResults={setResults} ></SearchLanguage>
            {(languages || showList) && <LanguageList target={languagesState.target} languages={languages} showList={showList} />}
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
