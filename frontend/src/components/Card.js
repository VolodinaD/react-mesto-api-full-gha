import React from 'react';
import '../index.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card(props) {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner === currentUser._id;
    const isLiked = props.card.likes.some(i => i === currentUser._id);
    const cardLikeButtonClassName = ( 
        `element__like-button ${isLiked && 'element__like-button_active'}` 
    );

    function handleClick() {
        props.onCardClick(props.card);
    }
    
    function handleLikeClick() {
        props.onCardLike(props.card);
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card);
    } 

    return (
        <li className="element">
            <div className="element__grid">
                <img onClick={handleClick} className="element__image" src={`${props.card.link}`} alt={`${props.card.name}`} />
                {isOwn && <button type="button" className="element__trash-button" onClick={handleDeleteClick}></button>}
            </div>
            <div className="element__info">
                <h2 className="element__name">{props.card.name}</h2>
                <div className="element__like-container">
                    <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                    <p className="element__like-number">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    );
}

export default Card; 