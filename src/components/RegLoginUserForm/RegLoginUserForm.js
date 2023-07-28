import './RegLoginUserForm.css'
import Logo from "../Logo/Logo";
import {Link} from "react-router-dom";
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
    const {
        valuesForm,
        errors,
        handleChange,
        isValid,
    } = useValidationForm()

    const handleOnSubmitForm = (e) => {
        e.preventDefault();
        handleOnSubmit(valuesForm)
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
                                autoComplete="off"
                                className={`reg-log-section__input-field ${errors.name ? 'reg-log-section__input-field-error' : ''}`}
                                minLength={2}
                                maxLength={30}
                                required={true}
                                value={valuesForm.name}
                                onChange={handleChange}
                            />

                            <span className='reg-log-section__hr'/>
                            <span
                                className="reg-log-section__error">{errors.name}</span>
                        </label>
                        <span className="reg-log-section__error"/>
                    </>

                }
                <label className='reg-log-section__label'>
                    <span className='reg-log-section__name'>E-mail</span>
                    <input
                        placeholder='Введите E-mail'
                        type="email"
                        autoComplete="off"
                        name="email"
                        className={`reg-log-section__input-field ${errors.email ? 'reg-log-section__input-field-error' : ''}`}
                        pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
                        minLength={2}
                        required={true}
                        onChange={handleChange}
                        value={valuesForm.email}

                    />
                    <span className='reg-log-section__hr'/>
                    <span className="reg-log-section__error">{errors.email}</span>

                </label>
                <span className="reg-log-section__error"/>
                <label className='reg-log-section__label'>
                    <span className='reg-log-section__name'>Пароль</span>
                    <input
                        type="password"
                        placeholder='Введите пароль'
                        name="password"
                        className={`reg-log-section__input-field ${errors.password ? 'reg-log-section__input-field-error' : ''}`}
                        minLength={6}
                        value={valuesForm.password}
                        onChange={handleChange}
                        required={true}
                    />
                    <span className='reg-log-section__hr'/>
                </label>
                <span className="reg-log-section__error">{errors.password}</span>
            </form>
            <div className='reg-log-section__container'>
                <button
                    type='submit'
                    disabled={!isValid}
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
