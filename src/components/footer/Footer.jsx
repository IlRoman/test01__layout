import React from 'react'
import './footer.scss'

const Footer = ({ requestDemoHandler }) => {
    return (
        <>
            <div className="hr"></div>
            <div className="footer">
                <div className="footer__background"></div>
                <div className="top-block-wrapper">
                    <div className="footer-description">
                        <div className="footer-description__head">Try for free!</div>
                        <div className="footer-description__text">Get limited 1 week free try our features!</div>
                    </div>
                    <div className="top-block__buttons-wrapper">
                        <div className="learn-more-button"><button>Learn more</button></div>
                        <div className="request-demo-button">
                            <button onClick={requestDemoHandler}>
                                <div>Request Demo</div><i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="bottom-block">
                    <div className="first-column bottom-block__column">
                        <div className="logo-wrapper">
                            <div className="logo">
                                <div className="logo__elem logo__first-elem"></div>
                                <div className="logo__elem logo__second-elem"></div>
                            </div>
                            <div className="logo-text">
                                DataWare
                            </div>
                        </div>
                        <div className="adress">
                            Warehouse Society, 234 <br />
                            Bahagia Ave Street PRBW 29281
                        </div>
                        <div className="contacts">
                            info@warehouse.project<br />
                            1-232-3434 (Main)
                        </div>
                        <div className="bottom-text">
                            © Datawarehouse™, 2020. All rights reserved.
                            Company Registration Number: 21479524.
                        </div>
                    </div>
                    <div className="second-column bottom-block__column">
                        <div className="second-column__head">About</div>
                        <div className="second-column-nav">
                            <div className="second-column-nav__elem">Profile</div>
                            <div className="second-column-nav__elem">Features</div>
                            <div className="second-column-nav__elem">Careers</div>
                            <div className="second-column-nav__elem">DW news</div>
                        </div>
                    </div>
                    <div className="third-column bottom-block__column">
                        <div className="second-column__head">Help</div>
                        <div className="second-column-nav">
                            <div className="second-column-nav__elem">Support</div>
                            <div className="second-column-nav__elem">Sign up</div>
                            <div className="second-column-nav__elem">Guide</div>
                            <div className="second-column-nav__elem">Reports</div>
                            <div className="second-column-nav__elem">Q & A</div>
                        </div>
                    </div>
                    <div className="fourth-column bottom-block__column">
                        <div className="fourth-column__head">Sotial media</div>
                        <div className="social-networks">
                            <div className="social-networks__elem social-networks__facebook">
                                <img src="./img/Facebook.png" />
                            </div>
                            <div className="social-networks__elem social-networks__twitter">
                                <img src="./img/twitter.png" />
                            </div>
                            <div className="social-networks__elem social-networks__instagram">
                                <img src="./img/Instagram.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer