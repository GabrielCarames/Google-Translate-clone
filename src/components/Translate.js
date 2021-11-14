import useTranslateHelper from "../hooks/useTranslateHelper"

const Translate = () => {
    const { getLanguages, getTraduction, setTextToTranslate, setTarget, setSource, target, translateText} = useTranslateHelper()
    console.log(target)
    return (
        <article className="body-translate-container translate">
            <header className="translate-header">
                <div className="translate__left-navbar">
                    <ul className="translate-list">
                        <li className={target?"list__item--target":"list__item"}><p className="list__text">Español</p></li>
                        <li className="list__item"><p className="list__text">Ingles</p></li>
                        <li className="list__arrow"><i class="fas fa-chevron-down"></i></li>
                    </ul>
                </div>
                <div className="translate__right-navbar">
                    <ul className="translate-list">
                        <li className={target?"list__item--target":"list__item"}><p className="list__text">Ingles</p></li>
                        <li className="list__item"><p className="list__text">Español</p></li>
                        <li className="list__arrow"><i class="fas fa-chevron-down"></i></li>
                    </ul>
                </div>
            </header>
            <body className="translate-body">
                <div className="translate__text-to-translate">
                    <textarea className="translate__textarea" type="text" onChange={(e)=>translateText(e.target.value)}></textarea>
                </div>
                <div className="translate__traduction">
                    <p className="translate__text-result">Traducción</p>
                </div>
            </body>
            <button onClick={() => getLanguages()}>dame idiomas</button>
        </article>
    )
}
export default Translate