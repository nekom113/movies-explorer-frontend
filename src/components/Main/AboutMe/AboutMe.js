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
                        Я проживаю в&nbsp;городе Москве. С&nbsp;IT сферой связан более 10 лет. Занимаюсь
                        программированием с&nbsp;2021 года, с&nbsp;2022 года работаю
                        фронтенд-разработчиком в&nbsp;IT компании. Увлекаюсь скалолазанием,
                        игрой на&nbsp;гитаре и&nbsp;бегом. Женат, воспитываю сына.
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
