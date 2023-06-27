import React from 'react';
import '../index.css';
import PopupWithForm from './PopupWithForm.js';

function InfoTooltip(props) {
    return (
        <PopupWithForm name="info" title="" buttonText="" isOpen={props.isOpen} onClose={props.onClose}>
            <>
                <div className="info">
                    <img className="info__image" src={props.image} alt={props.alt} />
                    <h2 className="info__title">{props.title}</h2>
                </div>
            </>
        </PopupWithForm>
    );
}

export default InfoTooltip;