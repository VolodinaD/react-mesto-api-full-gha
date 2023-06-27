export const BASE_URL = 'https://api.volodina.students.nomoreparties.sbs';

function getResponse(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    
    return res.json();
} 

export const register = (data) => {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password
        })
    })
    .then((res) => getResponse(res));
}

export const authorize = (data) => {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: data.email,
            password: data.password
        }),     
    })
    .then((res) => getResponse(res));
}

export const getToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        credentials: 'include' ,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    })
    .then((res) => getResponse(res));
}