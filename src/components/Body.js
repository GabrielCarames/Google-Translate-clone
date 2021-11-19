import Translate from "./Translate"

const Body = () =>{
    return (
        <div>
            <div className="body-top"></div>
            <div className="body-container">
                <Translate></Translate>
                <div className="body-button-container">
                    <div className="body-history-button-container">
                        <button className="body__history-button"><i className="fas fa-history"></i></button>
                        <span className="body__history-span">Historial</span>
                    </div>
                    <div className="body-save-button-container">
                        <button className="body__save-button"><i class="fas fa-star"></i></button>
                        <span className="body__save-span">Guardados</span>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}
export default Body