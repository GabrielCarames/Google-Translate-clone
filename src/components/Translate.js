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
    const { getTraduction, setTextToTranslate, translateText, textTranslated, wholanguage ,languageArrowList, changeLanguage, whatNameClass, check} = useTranslateHelper(languages, showList, setShowList,results,setResults)
    const languagesState = useSelector(state => state.changeLanguageReducer)
    const dispatch = useDispatch()
    console.log("hola2",languagesState.extra)
    return (
        <article className="body-translate-container translate">
            <header className="translate-header">
                <div className="translate__left-navbar">
                    <ul className="translate-list">
                        <li className={whatNameClass("target")} onClick={() => check()}><p className="list__text">{languagesState.source.name}</p></li>
                        <li className={whatNameClass("source")} onClick={() => check()}><p className="list__text" >{languagesState.target.name}</p></li>
                        <li className={whatNameClass("extra")} onClick={() =>{console.log(languagesState.extra);dispatch({type:"@changeExtra", payload: languagesState.extra });check()}}><p className="list__text" >{languagesState.extra.name}</p></li>
                        <li className="list__arrow" onClick={() => languageArrowList()}><i class="fas fa-chevron-down"></i></li>
                    </ul>
                </div>
                <div className="translate__right-navbar">
                    <ul className="translate-list">
                        <li className={"list__change-language"} onClick={() => {changeLanguage(); check()}}><i className="fas fa-exchange-alt"></i></li>
                        <li className={whatNameClass("target")} onClick={() => check()}><p className="list__text">{languagesState.target.name}</p></li>
                        <li className={whatNameClass("source")} onClick={() => check()}><p className="list__text" >{languagesState.source.name}</p></li>
                        <li className={whatNameClass("extra")} onClick={() => {dispatch({type:"@changeExtra", payload: languagesState.extra });check()}}><p className="list__text" >{languagesState.extra.name}</p></li>
                        <li className="list__arrow" onClick={() => languageArrowList()}><i class="fas fa-chevron-down"></i></li>
                    </ul>
                </div>
            </header>
            <SearchLanguage languages={languages} showList={showList} setShowList={setShowList} results={results} setResults={setResults} ></SearchLanguage>
            {(languages || showList) && <LanguageList target={languagesState.target} languages={languages} showList={showList} />}
            <body className={results ? "translate-body inactive" : "translate-body"}>
                <div className="translate__text-to-translate">
                    <textarea className="translate__textarea" type="text" onChange={(e)=>translateText(e.target.value)}></textarea>
                </div>
                <div className={textTranslated ? "translate__traduction active" : "translate__traduction"}>
                    <p className="translate__text-result">{textTranslated === 'Traduccion' ? "" : textTranslated}</p>
                </div>
            </body>
        </article>
    )
}
export default Translate
