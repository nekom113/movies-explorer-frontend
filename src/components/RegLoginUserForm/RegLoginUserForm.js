import './RegLoginUserForm.css'
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";
import {useState} from "react";
import useValidationForm from "../../Hooks/useValidationForm";

export default function RegLoginUserForm({isRegistrationForm, handleOnSubmit}) {
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
    const [values, setValues] = useState({
        password: '111111',
        email: 'test@test.ru',
        name: "Alex"
    })
    const {
        inputValue,
        validationStatus,
        inputError,
        currentNameInput,
        handleChangeForm
    } = useValidationForm()

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues((prevValue) => ({...prevValue, [name]: value}))
    }
    const handleOnSubmitForm = (e) => {
        e.preventDefault();
        handleOnSubmit(values)
    }
    return (
        <main className='reg-log-section'>
            <div className='reg-log-section__header'>
                <div className='reg-log-section__logo'><Logo/></div>
                <h1 className='reg-log-section__title'>{formData.title}</h1>
            </div>

            <form
                action="#"
                className="reg-log-section__form"
                id="reg-log-form"
                name="reg-log-form"
                onSubmit={handleOnSubmitForm}
            >
                {isRegistrationForm &&
                    <>
                        <label className='reg-log-section__label'>
                            <span className='reg-log-section__name'>Имя</span>
                            <input
                                placeholder='Введите имя'
                                type='text'
                                name='name'
                                className='reg-log-section__input-field'
                                minLength={2}
                                maxLength={30}
                                required={true}
                                value={values.name}
                                // defaultValue='Александр'
                                onChange={handleChange}
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
                        type="email"
                        name="email"
                        className='reg-log-section__input-field'
                        // pattern='[a-zA-Z0-9_.]+@[a-zA-Z0-9_]+\\.{1,1}[a-z]{2,}'
                        minLength={2}
                        required={true}
                        onChange={handleChange}
                        value={values.email}

                    />
                    <span className='reg-log-section__hr'/>
                </label>
                <span className="reg-log-section__error"/>
                <label className='reg-log-section__label'>
                    <span className='reg-log-section__name'>Пароль</span>
                    <input
                        type="password"
                        placeholder='Введите пароль'
                        name="password"
                        className='reg-log-section__input-field reg-log-section__input-field-error'
                        minLength={2}
                        value={values.password}
                        onChange={handleChange}
                        required={true}
                    />
                    <span className='reg-log-section__hr'/>
                </label>
                <span className="reg-log-section__error">{isRegistrationForm && 'что - то пошло не так'}</span>
            </form>
            <div className='reg-log-section__container'>
                <button
                    type='submit'
                    form='reg-log-form'
                    className='reg-log-section__button'
                >{formData.button_name}</button>
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
