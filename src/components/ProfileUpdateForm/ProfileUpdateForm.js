import Header from "../Header/Header";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {CurrentUserContext} from "../../context/CurrentUserContext";
import mainApi from "../../utils/MainApi";
import {getJWTByLocalStorage, TOOL_TIP_MESSAGES} from "../../utils/utils";
import useValidationForm from "../../Hooks/useValidationForm";

import ('./ProfileUpdateForm.css')

export default function ProfileUpdateForm({loggedIn, setLoggedIn, setTooltipSettings}) {
    const {
        valuesForm,
        errors,
        handleChange,
        isValid,
        resetForm
    } = useValidationForm()
    const token = getJWTByLocalStorage()
    const navigate = useNavigate();
    const {currentUser, setCurrentUser} = useContext(CurrentUserContext)
    const [isSameData, setSameData] = useState(false);
    const [isActiveModeInput, setActiveModeInput] = useState(false)

    useEffect(() => {
        if (currentUser.name === valuesForm.name && currentUser.email === valuesForm.email) {
            return setSameData(true);
        }
        return setSameData(false);
    }, [currentUser, valuesForm])

    useEffect(() => {
        if (!currentUser.name) {
            return
        }
        resetForm(false,
            {
                name: currentUser.name,
                email: currentUser.email
            });
    }, [currentUser])

    const handleSubmitUpdateUserData = (e) => {
        e.preventDefault()
        mainApi.setProfileInfo(valuesForm, token).then(data => {
            setCurrentUser(data)

            setTooltipSettings({isOpen: true, status: true, message: TOOL_TIP_MESSAGES.update_profile_data_ok})

        })
            .catch((errorObj) => {
                    setTooltipSettings({
                        isOpen: true,
                        status: false,
                        message: errorObj?.message || TOOL_TIP_MESSAGES.duplicate_data_error
                    })

                }
            )
        setActiveModeInput(false)
    }
    console.log({isValid})
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
                            name='name'
                            autoComplete="off"
                            className='section-profile-update__input-field'
                            onChange={(e) => {
                                handleChange(e)
                            }}
                            value={valuesForm.name}
                            minLength={2}
                            maxLength={30}
                            required={true}
                            placeholder="Введите имя"
                            disabled={!isActiveModeInput}
                        />
                    </label>
                    <span className="reg-log-section__error">{errors.name}</span>
                    <span className='section-profile-update__hr'/>
                    <label className='section-profile-update__label'>
                        <span className='section-profile-update__name'>E-mail</span>
                        <input
                            type="text"
                            name='email'
                            className='section-profile-update__input-field'
                            autoComplete="off"
                            value={valuesForm.email}
                            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                            onChange={(e) => {
                                handleChange(e)
                            }}
                            minLength={6}
                            required={true}
                            placeholder="Введите email"
                            disabled={!isActiveModeInput}
                        />
                    </label>
                    <span className="reg-log-section__error">{errors.email}</span>

                    <div className='section-profile-update__buttons-container'>
                        {isActiveModeInput ?
                            <button
                                type='button'
                                disabled={isSameData || !isValid}
                                className={`section-profile-update__submit-btn ${isSameData || !isValid ? 'section-profile-update__submit-btn_inactive' : ''}`}
                                onClick={handleSubmitUpdateUserData}
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
