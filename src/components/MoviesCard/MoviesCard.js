import './MoviesCard.css'
import React, {useState} from "react";

export default function MoviesCard({movieName, movieDuration, moviePoster, savedMovieBtnIsActive, linkToMovie}) {
    const [isActive, setActive] = useState(true)
    return (
        <div className='movie-card'>
            <a
                className="movie-card__trailer-link"
                href={linkToMovie}
                target="_blank"
                rel="noreferrer"
            >
                <img className='movie-card__img' src={moviePoster}
                     alt={`Poster for ${movieName}`}/>
            </a>
            <div className='movie-card__caption-block'>
                <div className='movie-card__text-wrapper'>
                    <h2 className='movie-card__title'>{movieName}</h2>
                    <p className='movie-card__subtitle'>{movieDuration}</p>
                </div>
                {savedMovieBtnIsActive ? (
                        <div className='movie-card__btn-wrapper'
                             onClick={() => alert('Вы нажали кнопку удаления карточки')}>
                            <button
                                type='button'
                                className='movie-card__btn movie-card__btn-delete'
                            />
                        </div>)
                    :
                    (<div className='movie-card__btn-wrapper' onClick={() => setActive(!isActive)}>
                        <div
                            className={`movie-card__btn movie-card__btn_${isActive ? 'saved' : 'unsaved'}`}
                        />
                    </div>)}
            </div>
        </div>
    )
}
