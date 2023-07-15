import {MOVIE_BASE_URL} from "./utils";


class MoviesApi {
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

    getMovies() {
        return fetch(`${this._baseUrl}/beatfilm-movies`, {
            headers: this._headers
        }).then(res => this._checkResponse(res))
    }
}

const moviesApiSetting = {
    baseUrl: MOVIE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
};
const moviesApi = new MoviesApi(moviesApiSetting);

export default moviesApi



