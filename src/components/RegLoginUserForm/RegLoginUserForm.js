import './RegLoginUserForm.css'
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";

export default function RegLoginUserForm({isRegistrationForm}) {
    const formData = isRegistrationForm ?
        {
            title: 'Добро пожаловать!',
            button_name: "Зарегистрироваться",
            link_name: "Войти",
            question: 'Уже зарегистрированы?'
        } :
        {
            title: 'Рады видеть!',
            button_name: "Войти",
            link_name: "Регистрация",
            question: 'Ещё не зарегистрированы?'
        }
    const handleSubmit = e => {
        e.preventDefault()
        alert('Вы активировали отправку формы')
    }
    return (
        <main className='reg-log-section'>
            <div className='reg-log-section__header'>
                <div className='reg-log-section__logo'><Logo/></div>
                <h1 className='reg-log-section__title'>{formData.title}</h1>
            </div>

            <form
                className='reg-log-section__form'
                id="reg-log-form"
                onSubmit={handleSubmit}
            >
                {isRegistrationForm &&
                    <>
                        <label className='reg-log-section__label'>
                            <span className='reg-log-section__name'>Имя</span>
                            <input
                                placeholder='Введите имя'
                                type='text'
                                name='user-name'
                                className='reg-log-section__input-field'
                                minLength={2}
                                maxLength={30}
                                required={true}
                                defaultValue='Александр'
                            />
                            <span className='reg-log-section__hr'/>
                        </label>
                        <span className="reg-log-section__error"/>
                    </>

                }
                <label className='reg-log-section__label'>
                    <span className='reg-log-section__name'>E-mail</span>
                    <input
                        placeholder='Введите E-mail'
                        type="text"
                        name='registration-email'
                        className='reg-log-section__input-field'
                        minLength={2}
                        required={true}
                        defaultValue='pochta@yandex.ru'
                    />
                    <span className='reg-log-section__hr'/>
                </label>
                <span className="reg-log-section__error"/>
                <label className='reg-log-section__label'>
                    <span className='reg-log-section__name'>Пароль</span>
                    <input
                        type="password"
                        placeholder='Введите пароль'
                        name='registration-password'
                        className='reg-log-section__input-field reg-log-section__input-field-error'
                        minLength={2}
                        defaultValue={isRegistrationForm ? "123456" : ''}
                        required={true}
                    />
                    <span className='reg-log-section__hr'/>
                </label>
                <span className="reg-log-section__error">{isRegistrationForm && 'что - то пошло не так'}</span>
            </form>
            <div className='reg-log-section__container'>
                <button
                    type='button'
                    className='reg-log-section__button'
                    onClick={() => alert(`Вы нажали на кнопку "${formData.button_name}"`)}>{formData.button_name}</button>
                <div className='reg-log-section__link-block'>
                    <p className='reg-log-section__question'>{formData.question}</p>
                    <Link to={isRegistrationForm ? '/signin' : '/signup'}
                          className='reg-log-section__btn'>
                        {formData.link_name}
                    </Link>
                </div>
            </div>

        </main>

    )
}
