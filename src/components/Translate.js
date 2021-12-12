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
    const { getTraduction, setTextToTranslate, translateText, textTranslated, wholanguage ,languageArrowList, changeLanguage, whatNameClass, check, textToTranslate, setTextTranslated, autoGrow, emptyValue} = useTranslateHelper(languages, showList, setShowList,results,setResults)
    const languagesState = useSelector(state => state.changeLanguageReducer)
    const dispatch = useDispatch()
    

    return (
        <article className="body-translate-container translate">
            <header className="translate-header">
                <div className="translate__left-navbar">
                    <ul className="translate-list">
                        <li className={whatNameClass("extra")} onClick={() => {dispatch({type:"@detectLanguage"})}}>DETECT LANGUAGE</li>
                        <li className={whatNameClass("target")} onClick={() => check("source")}><p className="list__text">{languagesState.source.name}</p></li>
                        <li className={whatNameClass("source")} onClick={() => check()}><p className="list__text" >{languagesState.target.name}</p></li>
                        <li className={whatNameClass("extra")} onClick={() =>{console.log(languagesState.extra);dispatch({type:"@changeExtra", payload: languagesState.extra });check()}}><p className="list__text" >{languagesState.extra.name}</p></li>
                        <li className="list__arrow" onClick={() => languageArrowList("source")}><i className="fas fa-chevron-down"></i></li>
                    </ul>
                </div>
                <div className={"list__change-language"} onClick={() => {changeLanguage(); check()}}><i className="fas fa-exchange-alt"></i></div>
                <div className="translate__right-navbar">
                    <ul className="translate-list">
                        <li className={whatNameClass("target")} onClick={() => check("target")}><p className="list__text">{languagesState.target.name}</p></li>
                        <li className={whatNameClass("source")} onClick={() => check()}><p className="list__text" >{languagesState.source.name}</p></li>
                        <li className={whatNameClass("extra")} onClick={() => {dispatch({type:"@changeExtra", payload: languagesState.extra });check()}}><p className="list__text" >{languagesState.extra.name}</p></li>
                        <li className="list__arrow" onClick={() => languageArrowList("target")}><i className="fas fa-chevron-down"></i></li>
                    </ul>
                </div>
            </header>
            <SearchLanguage languages={languages} showList={showList} setShowList={setShowList} results={results} setResults={setResults} ></SearchLanguage>
            {(languages || showList) && <LanguageList target={languagesState.target} languages={languages} showList={showList} />}
            <body className={results ? "translate-body inactive" : "translate-body"} id="translate-body-id">
                <div className="translate__text-to-translate">
                    <textarea className="translate__textarea" type="text" autoFocus onChange={(e)=>{translateText(e.target.value);autoGrow(e.target)}} value={textToTranslate} id="translateText-textarea"></textarea>
                    {textToTranslate && <div className="translate__fa-times" onClick={()=> {emptyValue(); setTextTranslated("Translation")}}><i class="fas fa-times"></i></div>} 
                </div>
                <div className={textTranslated === 'Translation' ? "translate__traduction" : "translate__traduction active"}>
                    <p className="translate__text-result">{textTranslated}</p>
                </div>
            </body>
        </article>
    )
}
export default Translate
