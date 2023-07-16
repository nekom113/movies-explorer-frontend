import {BASE_URL} from "./utils";

class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getRegistrationUser({password, email, name}) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                password: password,
                email: email,
                name: name
            })
        })
            .then(this._checkResponse)
    }

    getAuthorizationUser({password, email}) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                password: password,
                email: email
            })
        })
            .then(this._checkResponse)
    }

    checkDataUser(jwt) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${jwt}`
            }
        })
            .then(this._checkResponse)
    }

    getProfileData(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
            .then(this._checkResponse)
    }
    setProfileInfo(userData, token) {
        console.log({userData})
        const { name, email } = userData
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email
            })
        })
            .then(this._checkResponse)
    }

}

const authSetting = {
    baseUrl: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
};

const mainApi = new MainApi(authSetting)

export default mainApi
