import useTranslateHelper from "../hooks/useTranslateHelper"

const Translate = () => {
    const { getLanguages } = useTranslateHelper()

    return (
        <div className="body-translate-container">
            <button onClick={() => getLanguages()}>dame idiomas</button>
        </div>
    )
}
export default Translate