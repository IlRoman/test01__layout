import React from 'react'
import './header.scss'

const Header = ({ requestDemoHandler }) => {
    return (
        <header className="header">
            <div className="logo">
                <div className="logo__elem logo__first-elem"></div>
                <div className="logo__elem logo__second-elem"></div>
            </div>
            <nav className="nav">
                <div className="nav-desctop">
                    <div className="nav-desctop__elem"><button className="nav-desctop__btn nav-desctop__about">About</button></div>
                    <div className="nav-desctop__elem"><button className="nav-desctop__btn nav-desctop__help">Help</button></div>
                    <div className="nav-desctop__elem"><button className="nav-desctop__btn nav-desctop__features">Features</button></div>
                    <div className="nav-desctop__elem"><button className="nav-desctop__btn nav-desctop__signup">Signup</button></div>
                    <div className="nav-desctop__elem"><button className="nav-desctop__btn nav-desctop__search-btn"><i className="fas fa-search"></i></button></div>
                </div>
                <div className="nav__search-wrapper">
                    <button className="nav__search-btn nav__btn">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                <div className="nav__menu-wrapper">
                    <button className="nav__menu-btn nav__btn">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <div className="demo-wrapper">
                    <button className="demo-btn" onClick={requestDemoHandler}>
                        <div className="demo-btn__text">Request Demo</div>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header