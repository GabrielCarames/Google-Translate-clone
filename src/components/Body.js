import Translate from "./Translate"

const Body = () =>{
    return (
        <body>
            <div className="body-top"></div>
            <div className="body-container">
                <Translate></Translate>
                <div className="body-button-container">
                    <div className="body-history-button-container">
                        <button className="body__history-button"><i className="fas fa-history"></i></button>
                        <span>Historial</span>
                    </div>
                    <div className="body-save-button-container">
                        <button className="body__save-button"><i class="fas fa-star"></i></button>
                        <span>Guardados</span>
                    </div>
                    
                </div>
                
            </div>
        </body>
    )
}
export default Body