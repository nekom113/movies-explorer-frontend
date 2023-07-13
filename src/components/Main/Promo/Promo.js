import './Promo.css'

export default function Promo() {
    return (
        <section className='promo-section'>
            <h1 className="promo-section__title">Учебный проект студента факультета Веб-разработки.</h1>
            <nav className="promo-section__nav-panel">
                <a href="/#project" className="promo-section__link"> О проекте</a>
                <a href="/#tech" className="promo-section__link"> Технологии</a>
                <a href="/#about-me" className="promo-section__link"> Студент</a>
            </nav>
        </section>
    )
}
