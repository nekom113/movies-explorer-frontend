import './Portfolio.css'

export default function Portfolio() {
    return (
        <section className='portfolio-section'>
            <h2 className="portfolio-section__title"> Портфолио </h2>
            <ul className="portfolio-section__links-list">
                <li>
                    <a
                        className="portfolio-section__link"
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/nekom113/startkit_YP_task2.github.io"
                    >
                        Статичный сайт
                    </a>
                </li>
                <li>
                    <a
                        className="portfolio-section__link"
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/nekom113/russian-travel"
                    > Адаптивный сайт </a>
                </li>
                <li>
                    <a
                        className="portfolio-section__link"
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/nekom113/react-mesto-api-full-gha"
                    > Одностраничное приложение </a>
                </li>
            </ul>
        </section>
    )
}
