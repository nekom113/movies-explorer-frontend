import Header from "../Header/Header";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {CurrentUserContext} from "../../context/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import {getJWTByLocalStorage} from "../../utils/utils";


import ('./ProfileUpdateForm.css')

export default function ProfileUpdateForm({loggedIn, setLoggedIn}) {
    const token = getJWTByLocalStorage()
    const navigate = useNavigate();
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext)
    const [isActiveModeInput, setActiveModeInput] = useState(false)

    const handleSubmitUpdateUserData = (e) => {
        e.preventDefault()
        mainApi.setProfileInfo(currentUser, token).then(data => setCurrentUser(data))
        setActiveModeInput(false)
    }
    return (
        <>
            <Header loggedIn={loggedIn}/>
            <main className='section-profile-update'>
                <h1 className='section-profile-update__title'>{`Привет, ${currentUser.name}!`}</h1>

                <form className='section-profile-update__form'
                      id="profile-update__form"
                >

                    <label className='section-profile-update__label'>
                        <span className='section-profile-update__name'>Имя</span>
                        <input
                            type="text"
                            name='profile-update__name'
                            className='section-profile-update__input-field'
                            onChange={(e) => setCurrentUser({...currentUser, name: e.target.value})}
                            value={currentUser.name}
                            minLength={2}
                            maxLength={30}
                            required={true}
                            placeholder="Введите имя"
                            disabled={!isActiveModeInput}
                        />
                    </label>
                    <span className='section-profile-update__hr'/>
                    <label className='section-profile-update__label'>
                        <span className='section-profile-update__name'>E-mail</span>
                        <input
                            type="text"
                            name='profile-update__name'
                            className='section-profile-update__input-field'
                            value={currentUser.email}
                            onChange={(e) => setCurrentUser({...currentUser, email: e.target.value})}
                            minLength={2}
                            required={true}
                            placeholder="Введите email"
                            disabled={!isActiveModeInput}
                        />
                    </label>
                    <div className='section-profile-update__buttons-container'>
                        <span className='section-profile-update__error' style={{display: 'none'}}>При обновлении профиля произошла ошибка.</span>

                        {isActiveModeInput ?
                            <button
                                type='button'
                                className='section-profile-update__submit-btn'
                                onClick={e => handleSubmitUpdateUserData(e)}
                            >
                                Сохранить
                            </button>
                            :
                            <>
                                <button
                                    type='button'
                                    className="section-profile-update__edit-btn "
                                    onClick={() => setActiveModeInput(true)}
                                >
                                    Редактировать
                                </button>
                                <button
                                    type='button'
                                    className="section-profile-update__exit-btn"
                                    onClick={() => {
                                        setLoggedIn(false);
                                        setCurrentUser(null);
                                        localStorage.clear();
                                        navigate("/", {replace: true})
                                    }}>
                                    Выйти из аккаунта
                                </button>
                            </>
                        }
                    </div>
                </form>
            </main>
        </>

    )
}
