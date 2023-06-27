class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
            headers: this._headers,
            credentials: 'include'
        })
            .then(this._checkResponse);
    } 

    getInitialCards() {
        return fetch(this._baseUrl + '/cards', {
            headers: this._headers,
            credentials: 'include'
        })
            .then(this._checkResponse);
    } 

    patchUserInfo(data) {
        return fetch(this._baseUrl + '/users/me', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about
            }),
            credentials: 'include'
        })
            .then(this._checkResponse);
    }

    postNewCard(data) {
        return fetch(this._baseUrl + '/cards', {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link
            }),
            credentials: 'include'
        })
            .then(this._checkResponse);
    }

    deleteCard(cardId) {
        return fetch(this._baseUrl + `/cards/${cardId}`, {
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include'
        })
            .then(this._checkResponse);
    }

    putLike(cardId) {
        return fetch(this._baseUrl + `/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers,
            credentials: 'include'
        })
            .then(this._checkResponse);
    }

    deleteLike(cardId) {
        return fetch(this._baseUrl + `/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers,
            credentials: 'include'
        })
            .then(this._checkResponse);
    }

    patchUserAvatar(data) {
        return fetch(this._baseUrl + '/users/me/avatar', {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar
            }),
            credentials: 'include'
        })
            .then(this._checkResponse);
    }
}

const api = new Api({
    baseUrl: 'https://api.volodina.students.nomoreparties.sbs',
    headers: {
        authorization: 'fhmggotuo3egupfr46ge',
        'Content-Type': 'application/json'
    }
});

export default api;