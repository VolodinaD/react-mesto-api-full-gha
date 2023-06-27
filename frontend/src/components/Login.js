import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import Header from './Header.js';
import FormForAuth from './FormForAuth.js';

function Login(props) {
    const [formValue, setFormValue] = React.useState({
        email: '',
        password: ''
    });

    function handleChange(e) {
        const {name, value} = e.target;
    
        setFormValue({
            ...formValue,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        
        if (!formValue.email || !formValue.password) {
            return;
        } else {
            props.onLogin(formValue);
            setFormValue({email: '', password: ''});
        }
    }

    return (
        <>
            <Header email="">
                <>
                    <Link to="/signup" className="header__link">Регистрация</Link>
                </>
            </Header>
            <FormForAuth name="register" title="Вход" buttonText="Войти" text="" onSubmit={handleSubmit}>
                <>
                    <input type="email" name="email" id="email-input" placeholder="Email" className="auth-form__input auth-form__input_type_email" value={formValue.email} onChange={handleChange} />
                    <input type="password" name="password" id="password-input" placeholder="Пароль" className="auth-form__input auth-form__input_type_password" value={formValue.password} onChange={handleChange} />
                </>
            </FormForAuth>
        </>
    );
}

export default Login;