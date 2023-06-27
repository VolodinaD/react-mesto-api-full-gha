import React from 'react';
import '../index.css';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Main(props) {
    const currentUser = React.useContext(CurrentUserContext);
    
    return (
        <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <div onClick={props.onEditAvatar} className="profile__image-container">
                        <img className="profile__image" src={`${currentUser.avatar}`} alt="Фото" />
                    </div>
                    <div>
                        <div className="profile__grid">
                            <h1 className="profile__title">{currentUser.name}</h1>
                            <button onClick={props.onEditProfile} type="button" className="profile__edit-button"></button>
                        </div>
                        <p className="profile__subtitle">{currentUser.about}</p>
                    </div>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__add-button"></button>
            </section>
            <section>
                <ul className="elements">
                    {props.cards.map((item) => {
                        return (
                            <Card card={item} key={item._id} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
                        );
                    })}
                </ul>
            </section>
        </main>
    );
}

export default Main;