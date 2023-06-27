import React from 'react';
import '../index.css';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onAddPlace({
            name,
            link,
        });
    }

    React.useEffect(() => {
        setName('');
        setLink('');
    }, [props.isOpen]); 

    return (
        <PopupWithForm name="сardAdd" title="Новое место" buttonText="Создать" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <>
                <input type="text" name="name" id="place-input" placeholder="Название" className="form__input form__input_type_place" required minLength="2" maxLength="30" value={name} onChange={handleNameChange} />
                <span className="form__input-error" id="place-input-error"></span>
                <input type="url" name="link" id="link-input" placeholder="Ссылка на картинку" className="form__input form__input_type_link" value={link} onChange={handleLinkChange} required />
                <span className="form__input-error" id="link-input-error"></span>
            </>
        </PopupWithForm>
    );
}

export default AddPlacePopup;