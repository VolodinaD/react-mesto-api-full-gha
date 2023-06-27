import React from 'react';
import '../index.css';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, props.isOpen]); 

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateUser({
            name,
            about: description,
        });
    } 

    return (
        <PopupWithForm name="profileEdit" title="Редактировать профиль" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <>
                <input type="text" name="name" id="name-input" placeholder="Имя" className="form__input form__input_type_name" required minLength="2" maxLength="40" value={name || ''} onChange={handleNameChange} />
                <span className="form__input-error" id="name-input-error"></span>
                <input type="text" name="about" id="about-input" placeholder="О себе" className="form__input form__input_type_about" required minLength="2" maxLength="200" value={description || ''} onChange={handleDescriptionChange} />
                <span className="form__input-error" id="about-input-error"></span>
            </>
        </PopupWithForm>
    );
}

export default EditProfilePopup;