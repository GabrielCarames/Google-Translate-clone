import useTranslateHelper from "../hooks/useTranslateHelper"

const Translate = () => {
    const { getLanguages, getTraduction, setTextToTranslate, setTarget, setSource } = useTranslateHelper()
    const lista = () => {
        return (<ul className="translate-list">
        <li className="list__item"><p className="list__text">Ingles</p></li>
        <li className="list__item"><p className="list__text">Español</p></li>
    </ul>)
    }
    return (
        <article className="body-translate-container translate">
            <header className="translate-header">
                <div className="translate__left-navbar">
                    {lista()}
                </div>
                <div className="translate__right-navbar">
                    {lista()}
                </div>
            </header>
            <body className="translate-body">
                <div className="translate__text-to-translate">
                    <textarea className="translate__input" type="text"></textarea>
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