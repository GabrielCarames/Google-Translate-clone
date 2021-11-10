const Header = () =>{
    return (
        <header className="app__header header">
            <div className="header-container">
                <img className="header__logo" src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google" />
                <p className="header__title">Traductor</p>
            </div>
            <div className="header-toggle-theme-container">
                <button className="header__button"></button>
            </div>
            
        </header>
    )
} 
export default Header