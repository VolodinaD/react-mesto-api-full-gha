import React from 'react';
import '../index.css';

function PopupWithForm(props) {
    return (
        <section className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className={`popup__container popup_type_${props.name}`}>
                <button onClick={props.onClose} type="button" className="popup__close"></button>
                <form name={props.name} className="form" onSubmit={props.onSubmit}>
                    <h2 className="form__title">{props.title}</h2>
                    <div>{props.children}</div>
                    <button type="submit" className={`form__button form__button_type_${props.name}`}>{props.buttonText}</button>
                </form>
            </div>
        </section>
    );
}

export default PopupWithForm;