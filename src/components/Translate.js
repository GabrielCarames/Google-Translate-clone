import { useState } from "react"
import { useSelector } from "react-redux"
import useLanguagesListHelper from "../hooks/useLanguagesListHelper"
import useTranslateHelper from "../hooks/useTranslateHelper"
import SearchLanguage from "./SearchLanguage"
import LanguageList from "./LanguageList"

const Translate = () => {
    const [showList, setShowList] = useState()
    const [results, setResults] = useState()
    const {languageList} = useLanguagesListHelper()
    const {setTextToTranslate, textTranslated, languageArrowList, changeLanguage, check, textToTranslate, setTextTranslated, autoGrow, emptyValue, checkActivatedLanguage, invertLanguage, languageInUse, setLanguageInUse} = useTranslateHelper(showList, setShowList, setResults)
    const languagesState = useSelector(state => state.changeLanguageReducer)

    return (
        <article className="body-translate-container translate">
            <header className="translate-header">
                <div className="translate__left-navbar">
                    <ul className="translate-list">
                        <li className={checkActivatedLanguage(languagesState.source.name,"source")} onClick={() => {check("source"); invertLanguage(languagesState.source,"right")}}><p className="list__text" >{languagesState.source.name}</p></li>
                        <li className={checkActivatedLanguage(languagesState.target.name,"source")} onClick={() => {check(); invertLanguage(languagesState.target,"right")}}><p className="list__text">{languagesState.target.name}</p></li>
                        <li className={checkActivatedLanguage(languagesState.extraSource.name,"source")} onClick={() =>{check(); invertLanguage(languagesState.extraSource,"right")}}><p className="list__text" >{languagesState.extraSource.name}</p></li>
                        <li className="list__arrow" onClick={() => languageArrowList("source")}><i className="fas fa-chevron-down"></i></li>
                    </ul>
                </div>
                <div className={"list__change-language"} onClick={() => {changeLanguage(); check()}}><i className="fas fa-exchange-alt"></i></div>
                <div className="translate__right-navbar">
                    <ul className="translate-list">
                        <li className={checkActivatedLanguage(languagesState.target.name,"target")} onClick={() =>{check("target"); invertLanguage(languagesState.target,"left")}}><p className="list__text" >{languagesState.target.name}</p></li>
                        <li className={checkActivatedLanguage(languagesState.source.name,"target")} onClick={() => {check(); invertLanguage(languagesState.source,"left")}}><p className="list__text">{languagesState.source.name}</p></li>
                        <li className={checkActivatedLanguage(languagesState.extraTarget.name,"target")} onClick={() => {check(); invertLanguage(languagesState.extraTarget,"left")}}><p className="list__text" >{languagesState.extraTarget.name}</p></li>
                        <li className="list__arrow" onClick={() => languageArrowList("target")}><i className="fas fa-chevron-down"></i></li>
                    </ul>
                </div>
            </header>
            <SearchLanguage languageList={languageList} showList={showList} setShowList={setShowList} results={results} setResults={setResults} />
            {(languageList || showList) && <LanguageList languageList={languageList} showList={showList} setShowList={setShowList} languageInUse={languageInUse} setLanguageInUse={setLanguageInUse} />}
            <body className={results ? "translate-body inactive" : "translate-body"} id="translate-body-id">
                <div className="translate__text-to-translate">
                    <textarea className="translate__textarea" type="text" autoFocus onChange={(e)=>{setTextToTranslate(e.target.value); autoGrow(e.target)}} value={textToTranslate} id="translateText-textarea"></textarea>
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
