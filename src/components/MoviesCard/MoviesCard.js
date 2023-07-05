import './MoviesCard.css'
import {useState} from "react";

export default function MoviesCard({movieName, movieDuration, moviePoster}) {
    const [isActive, setActive] = useState(true)
    return (
        <div className='movie-card'>
            <img className='movie-card__img' src={moviePoster}
                 alt='В погоде за Бенкси'/>
            <div className='movie-card__caption-block'>
                <div className='movie-card__text-wrapper'>
                    <h2 className='movie-card__title'>{movieName}</h2>
                    <p className='movie-card__subtitle'>{movieDuration}</p>
                </div>
                <div className='movie-card__btn-wrapper' onClick={() => setActive(!isActive)}>
                    <div
                        className={`movie-card__btn movie-card__btn_${isActive ? 'saved' : 'unsaved'}`}
                    />
                </div>
            </div>
        </div>
    )
}
