export const BASE_URL = 'https://api.movies-explorer.nomoreparties.sbs'
export const MOVIE_BASE_URL = 'https://api.nomoreparties.co'


export const getJWTByLocalStorage = () => {
    return localStorage.getItem('jwt')
}


export const TOOL_TIP_MESSAGES = {
    auth_error: 'Вы ввели неправильный логин или пароль.',
    duplicate_data_error: 'Пользователь с таким email уже существует.',
    internal_server_error: 'На сервере произошла ошибка.',

}


export function searchMoviesByKeyWord(array, searchValue) {
    const checkedArray = Array.isArray(array) ? array : []
    return checkedArray.filter(movie => movie.nameRU.toLowerCase().includes(searchValue.toLowerCase()));
}

export function filterMoviesByDuration(array) {
    return array.filter(item => item.duration <= 40);
}


export default function durationFormatConverter(originValue) {
    const hours = Math.floor(originValue / 60);
    const minutes = originValue % 60;
    if (hours > 0) {
        return `${hours}ч ${minutes}м`;
    } else {
        let ending;
        if (minutes >= 11 && minutes <= 14) {
            ending = 'минут';
        } else if (originValue % 10 === 1) {
            ending = 'минута';
        } else if (originValue % 10 >= 2 && originValue % 10 <= 4) {
            ending = 'минуты';
        } else {
            ending = 'минут'
        }
        return (originValue + ' ' + ending);
    }
}
const urlRegex = /^http(s)?:\/\/(www\.)?[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]{1,256}\.[a-z]{1,6}\b[a-zA-Z0-9-._~:/?#[\]@!$&'()*+,;=]*$/;
export {urlRegex}
