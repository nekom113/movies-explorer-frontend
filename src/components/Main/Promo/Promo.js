import './Promo.css'
export default function Promo() {
    return (
        <section className='promo-section'>
            <h1 className="promo-section__title">Учебный проект студента факультета Веб-разработки</h1>
            <ul className="promo-section__nav-panel">
                <li>
                    <a href="/#project-section" className="promo-section__link">
                        О проекте
                    </a>
                </li>
                <li>
                    <a href="/#tech-section" className="promo-section__link">
                        Технологии
                    </a>
                </li>
                <li>
                    <a href="/#student-section" className="promo-section__link">
                        Студент
                    </a>
                </li>
            </ul>
        </section>
    )
}