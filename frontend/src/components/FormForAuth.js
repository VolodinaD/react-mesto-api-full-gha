import React from 'react';
import { Link } from 'react-router-dom'; 
import '../index.css';

function FormForAuth(props) {
    return (
        <div className="auth-container">
            <form name={props.name} className="auth-form" onSubmit={props.onSubmit}>
                <h2 className="auth-form__title">{props.title}</h2>
                <div>{props.children}</div>
                <button type="submit" className="auth-form__button">{props.buttonText}</button>
                <Link to="/signin" className="auth-form__text">{props.text}</Link>
            </form>
        </div>
    );
}

export default FormForAuth;