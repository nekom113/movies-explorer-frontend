import './NotFound.css'
import {useNavigate} from 'react-router-dom';


export default function NotFound() {
    const navigate = useNavigate()
    return (
        <section className='section-not-found'>
            <h1 className='section-not-found-title'>404</h1>
            <p className='section-not-found-subtitle'>Страница не найдена</p>
            <button
                type='button'
                className='section-not-found-back-step-btn'
                onClick={() => navigate(-1)}
            > Назад
            </button>
        </section>
    )
}
