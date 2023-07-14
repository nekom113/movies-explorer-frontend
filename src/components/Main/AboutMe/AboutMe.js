import './AboutMe.css'
import Avatar from '../../../images/piontek_avatar.jpg'

export default function AboutMe() {
    return (
        <section className='about-me-section' id='about-me'>
            <h2 className='about-me-section__header-title'>Студент</h2>
            <div className='about-me-section__contain'>
                <div className='about-me-section__info'>
                    <h3 className='about-me-section__name'>Александр</h3>
                    <p className='about-me-section__subtitle'>Фронтенд-разработчик, 35&nbsp;лет</p>
                    <p className='about-me-section__description'>
                        Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. У&nbsp;меня есть
                        жена
                        и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
                        С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс
                        по&nbsp;веб-разработке, начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
                    </p>
                    <a
                        className='about-me-section__link'
                        href='https://github.com/nekom113'
                        target='_blank'
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </div>
                <img
                    className='about-me-section__avatar'
                    src={Avatar}
                    alt='аватар'
                />
            </div>
        </section>
    )
}
