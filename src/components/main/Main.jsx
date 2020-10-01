import React from 'react';
import './main.scss'

const Main = () => {
    return (
        <main className="main">
            <div className="clarification" style={{ backgroundImage: "url('./img/building.png')" }}>
                <div className="clarification__head">Save your data storage here.</div>
                <div className="clarification__text">
                    Data Warehouse is a data storage area that has been
                    tested for security, so you can store your data here
                    safely but not be afraid of being stolen by others.
                </div>
                <button className="clarification__btn">Learn more</button>
            </div>
            <div className="features">
                <div className="features__head-wrapper">
                    <div className="head">
                        <h1 className="head__h1">Features</h1>
                    </div>
                </div>
                <div className="article">
                    Some of the features and advantages that we provide
                    for those of you who store data in this Data Warehouse.
                </div>
            </div>

            <div className="main-section">
                <div className="main-section__block main-section__left-block">
                    <div className="main-section__background"><img src="./img/block-background.png" alt="" /></div>
                    <img src="./img/search-data-image.png" className="main-section__first-img" />
                    <div className="main-section__text-block">
                        <h2>Search Data</h2>
                        <p>
                            Don’t worry if your data is very large, the Data Warehoue provides
                            a search engine, which is useful for making it easier to find data effectively saving time.
                        </p>
                        <div className="main-section__button-wrapper">
                            <label htmlFor="main-section-button">Learn more</label>
                            <button id="main-section-button" className="main-section__button"><i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="main-section__block main-section__right-block">
                    <div className="main-section__background"><img src="./img/block-background.png" alt="" /></div>
                    <img src="./img/security-code-image.png" className="main-section__second-img" />
                    <div className="main-section__text-block">
                        <h2>Security Code</h2>
                        <p>
                            Data Security is one of our best facilities. Allows for your files
                            to be safer. The file can be secured with a code or password that
                            you created, so only you can open the file.
                        </p>
                        <div className="main-section__button-wrapper">
                            <label htmlFor="main-section-button">Learn more</label>
                            <button id="main-section-button" className="main-section__button"><i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="main-section__block main-section__left-block">
                    <div className="main-section__background"><img src="./img/block-background2.png" alt="" /></div>
                    <img src="./img/print-out-image.png" className="main-section__third-img" />
                    <div className="main-section__text-block">
                        <h2>Print Out</h2>
                        <p>
                            Print out service gives you convenience if someday
                            you need print data, just edit it all and just print it.
                        </p>
                        <div className="main-section__button-wrapper">
                            <label htmlFor="main-section-button">Learn more</label>
                            <button id="main-section-button" className="main-section__button"><i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="main-section__block main-section__right-block">
                    <div className="main-section__background"><img src="./img/block-background.png" alt="" /></div>
                    <img src="./img/24-hours-access-image.png" className="main-section__fourth-img" />
                    <div className="main-section__text-block">
                        <h2>24 Hours Access</h2>
                        <p>
                            Access is given 24 hours a full morning to night and
                            meet again in the morning, giving you comfort when
                            you need data when urgent.
                        </p>
                        <div className="main-section__button-wrapper">
                            <label htmlFor="main-section-button">Learn more</label>
                            <button id="main-section-button" className="main-section__button"><i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="search-data">
                <div className="search-data__image-container">
                    <img src="./img/search-data-image.png" />
                </div>
                <div className="search-data__vector">
                    <img src="./img/Vector56.png" alt="vector" />
                </div>
                <div className="search-data__content">
                    <div className="search-data__background"></div>
                    <div className="search-data__head">
                        Search Data
                    </div>
                    <div className="search-data__text">
                        Don’t worry if your data is very large, the Data Warehoue provides a search engine,
                        which is useful for making it easier to find data effectively saving time.
                    </div>
                    <div className="search-data__button-wrapper">
                        <label htmlFor="search-data-button">Learn more</label>
                        <button id="search-data-button" className="search-data__button"><i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main