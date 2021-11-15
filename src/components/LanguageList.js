const LanguageList = ({languages}) =>{
    return(
        <div className="language-list-container">
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