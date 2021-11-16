
const LanguageList = ({languages, showList}) =>{

    return(
        <div className={showList ? "language-list-container active" : "language-list-container"}>
            <ul className="language-list">
                {
                    languages.map((item, id) => {
                            return <li className="language-list__item" ket={id}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default LanguageList