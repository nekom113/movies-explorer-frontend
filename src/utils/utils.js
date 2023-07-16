export const BASE_URL = 'https://api.movies-explorer.nomoreparties.sbs'
export const MOVIE_BASE_URL = 'https://api.nomoreparties.co'


export const getJWTByLocalStorage = () =>{
    return localStorage.getItem('jwt')
}


export const TOOL_TIP_MESSAGES = {
    auth_error: 'Вы ввели неправильный логин или пароль.',
    duplicate_data_error: 'Пользователь с таким email уже существует.',
    internal_server_error: 'На сервере произошла ошибка.',

}
