import { useState } from "react"
import useLanguagesListHelper from "../hooks/useLanguagesListHelper"
import useTranslateHelper from "../hooks/useTranslateHelper"
import LanguageList from "./LanguageList"
import SearchLanguage from "./SearchLanguage"

const Translate = () => {
    const [ showList, setShowList ] = useState()
    const { getTraduction, setTextToTranslate, setTarget, setSource, target, translateText, textTranslated} = useTranslateHelper()
    const { getLanguages, languages } = useLanguagesListHelper()
    
    console.log("sorsosa", languages)
    return (
        <article className="body-translate-container translate">
            <header className="translate-header">
                <div className="translate__left-navbar">
                    <ul className="translate-list">
                        <li className={target?"list__item--target":"list__item"}><p className="list__text">Español</p></li>
                        <li className="list__item"><p className="list__text">Ingles</p></li>
                        <li className="list__arrow" onClick={() => {getLanguages(); showList ? setShowList(false) : setShowList(true)}}><i class="fas fa-chevron-down"></i></li>
                        
                    </ul>
                </div>
                <div className="translate__right-navbar">
                    <ul className="translate-list">
                        <li className={target?"list__item--target":"list__item"}><p className="list__text">Ingles</p></li>
                        <li className="list__item"><p className="list__text">Español</p></li>
                        <li className="list__arrow" onClick={() => {getLanguages(); showList ? setShowList(false) : setShowList(true)}}><i class="fas fa-chevron-down"></i></li>
                    </ul>
                </div>
            </header>
            <SearchLanguage languages={languages}></SearchLanguage>
            {languages && <LanguageList target={target} languages={languages} showList={showList} />}
            <body className="translate-body">
                <div className="translate__text-to-translate">
                    <textarea className="translate__textarea" type="text" onChange={(e)=>translateText(e.target.value)}></textarea>
                </div>
                <div className="translate__traduction">
                    <p className="translate__text-result">{textTranslated}</p>
                </div>
            </body>
        </article>
    )
}
export default Translate