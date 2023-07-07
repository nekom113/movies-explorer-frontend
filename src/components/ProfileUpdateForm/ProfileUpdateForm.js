import Header from "../Header/Header";
import ('./ProfileUpdateForm.css')

export default function ProfileUpdateForm() {
    const userData = {name: "Александр", email: "alexander@alex.ru"}

    const handleSubmit = e => {
        e.preventDefault()
        alert('Вы активировали отправку формы')
    }
    return (
        <section className='section-profile-update'>
            <div className='section-profile-update__main-container'>
                <Header userSignin={true}/>
                <h2 className='section-profile-update__title'>{`Привет, ${userData.name}!`}</h2>
                <form className='section-profile-update__form'
                      id="profile-update__form"
                      onSubmit={handleSubmit}
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
                            placeholder="Имя"
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
                            placeholder="Email"
                        />
                    </label>
                </form>
            </div>

            <div className='section-profile-update__buttons-container'>
                <button
                    type="submit"
                    form="profile-update__form"
                    className="section-profile-update__submit-btn">
                    Редактировать
                </button>
                <button
                    className="section-profile-update__exit-btn"
                    onClick={() => alert('Вы нажали кнопку выхода')}>
                    Выйти из аккаунта
                </button>
            </div>
        </section>
    )
}
