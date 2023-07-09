import Header from "../Header/Header";
import {useNavigate} from "react-router-dom";
import {useState} from "react";

import ('./ProfileUpdateForm.css')

export default function ProfileUpdateForm() {
    const userData = {name: "Александр", email: "alexander@alex.ru"}
    const navigate = useNavigate();
    const [isActiveModeInput, setActiveModeInput] = useState(false)


    return (
        <>
            <Header userSignin={true}/>
            <main className='section-profile-update'>
                <div className='section-profile-update__main-container'>
                    <h2 className='section-profile-update__title'>{`Привет, ${userData.name}!`}</h2>
                    <form className='section-profile-update__form'
                          id="profile-update__form"
                    >
                        <label className='section-profile-update__label'>
                            <span className='section-profile-update__name'>Имя</span>
                            <input
                                type="text"
                                name='profile-update__name'
                                className='section-profile-update__input-field'
                                defaultValue={userData.name}
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
                                defaultValue={userData.email}
                                minLength={2}
                                required={true}
                                placeholder="Введите email"
                                disabled={!isActiveModeInput}
                            />
                        </label>
                    </form>
                </div>
                <div className='section-profile-update__buttons-container'>
                    <span className='section-profile-update__error' style={{display:'none'}}>При обновлении профиля произошла ошибка.</span>

                    {isActiveModeInput ?
                        <button
                            className='section-profile-update__submit-btn'
                            onClick={() => setActiveModeInput(false)}
                        >
                            Сохранить
                        </button>
                        :
                        <>
                            <button
                                className="section-profile-update__edit-btn "
                                onClick={() => setActiveModeInput(true)}
                            >
                                Редактировать
                            </button>
                            <button
                                className="section-profile-update__exit-btn"
                                onClick={() => navigate("/signin", {replace: true})}>
                                Выйти из аккаунта
                            </button>
                        </>
                    }
                </div>
            </main>
        </>

    )
}
