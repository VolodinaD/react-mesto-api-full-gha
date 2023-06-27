import React from 'react';
import '../index.css';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
    const avatarRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();
      
        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    React.useEffect(() => {
        avatarRef.current.value = '';
    }, [props.isOpen]); 

    return (
        <PopupWithForm name="avatarEdit" title="Обновить аватар" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <>
                <input type="url" name="avatar" id="avatarLink-input" placeholder="Ссылка на картинку" className="form__input form__input_type_avatar" ref={avatarRef} required />
                <span className="form__input-error" id="avatarLink-input-error"></span>
            </>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;