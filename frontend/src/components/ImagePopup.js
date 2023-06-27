import React from 'react';
import '../index.css';

function ImagePopup(props) {
    return (
        <section className={`popup popup-style ${JSON.stringify(props.card) !== '{}' ? 'popup_opened' : ''}`}>
            <div className="popup__card">
                <button onClick={props.onClose} type="button" className="popup__close" id="popupCardClose"></button>
                <img className="popup__card-image" src={`${props.card.link}`} alt={`${props.card.name}`} />
                <h2 className="popup__card-text">{props.card.name}</h2>
            </div>
        </section>
    );
}

export default ImagePopup; 