import './Footer.css'

export default function Footer() {
    return (
        <section className='footer'>
            <h3 className='footer__title'>Учебный проект Яндекс.Практикум&nbsp;х&nbsp;BeatFilm.</h3>
            <div className='footer__contain'>
                <p className='footer__copyright'>© {new Date().getFullYear()}</p>
                <ul className='footer__link-list'>
                    <li>
                        <a
                            className='footer__link-item'
                            rel='noreferrer'
                            target='_blank'
                            href='https://practicum.yandex.ru'
                        > Яндекс.Практикум </a>
                    </li>
                    <li>
                        <a
                            className='footer__link-item'
                            href='https://github.com'
                            rel='noreferrer'
                            target='_blank'
                        > Github </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}
