import React from 'react';
import './popup.scss';

const Popup = ({ requestDemoHandler }) => {

    const messageHandler = (e) => {
        let maxLength = e.target.getAttribute('maxLength')
        if (e.target.value.length >= maxLength) {
            let elem = document.querySelector(`#input-${+e.target.id.split('-')[1] + 1}`)
            if (elem) {
                elem.focus()
            } else return
        } else if (e.target.value.length === 0) {
            let elem = document.querySelector(`#input-${+e.target.id.split('-')[1] - 1}`)
            if (elem) {
                elem.focus();
            } else return;
        }
    }

    return (
        <>
            <div className="background"></div>
            <div className="popup">
                <div className="popup__head">Request Demo</div>
                <div className="message-container">
                    <div className="message-container__first-column popup-column">
                        <div className="name popup-column__elem">
                            <div>Name</div>
                            <input type="text" />
                        </div>
                        <div className="email popup-column__elem">
                            <div>Email</div>
                            <input type="text" />
                        </div>
                        <div className="web popup-column__elem">
                            <div>Web</div>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="message-container__second-column popup-column">
                        <div className="popup-column__elem">
                            <div>Message</div>
                            <input type="text" id="input-1" maxLength="40" onChange={messageHandler} />
                        </div>
                        <div className="popup-column__elem">
                            <input type="text" id="input-2" maxLength="47" onChange={messageHandler} />
                        </div>
                        <div className="popup-column__elem">
                            <input type="text" id="input-3" maxLength="47" onChange={messageHandler} />
                        </div>
                    </div>
                </div>
                <button className="popup__btn" onClick={requestDemoHandler}>Send</button>
            </div>
        </>
    )
}

export default Popup