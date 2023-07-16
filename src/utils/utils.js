export const BASE_URL = 'https://api.movies-explorer.nomoreparties.sbs'
export const MOVIE_BASE_URL = 'https://api.nomoreparties.co'


export const getJWTByLocalStorage = () =>{
    return localStorage.getItem('jwt')
}
