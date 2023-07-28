import './MoviesCard.css'
import React, {useEffect, useState} from "react";
import durationFormatConverter, {getJWTByLocalStorage, MOVIE_BASE_URL, urlRegex} from "../../utils/utils";

export default function MoviesCard({
                                       movie,
                                       sectionName,
                                       handleSaveMovie,
                                       handleDeleteSavedMove,
                                       savedMoviesList
                                   }) {
    const token = getJWTByLocalStorage()
    const {nameEN, nameRU, country, description, director, duration, id, image, trailerLink, year} = movie
    const [isActive, setActive] = useState(false)
    const saveMovie = (e) => {
        e.preventDefault()
        handleSaveMovie({
            nameRU: nameRU || 'unknown',
            nameEN: nameEN || 'unknown',
            country: country || 'unknown',
            director: director || 'unknown',
            duration: duration || 0,
            year: year || 0,
            description: description || 'no description',
            image: urlRegex.test(MOVIE_BASE_URL + image.url) ? MOVIE_BASE_URL + image.url : 'https://i.ytimg.com/vi/8eohHq2ESow/maxresdefault.jpg',
            trailerLink: urlRegex.test(trailerLink) ? trailerLink : 'https://www.youtube.com',
            thumbnail: MOVIE_BASE_URL + image.url || 'https://i.ytimg.com/vi/8eohHq2ESow/maxresdefault.jpg',
            movieId: id,
        }, token, setActive)
    }
    const deleteMovie = (e) => {
        e.preventDefault()
        const saveMoviesCheckType = Array.isArray(savedMoviesList) ? savedMoviesList : []
        const thisMoviesInArr = saveMoviesCheckType.findIndex(() => movie.id)
        handleDeleteSavedMove(sectionName === 'movie' ? savedMoviesList[thisMoviesInArr]._id : movie._id, setActive)
    }
    useEffect(() => {
        if (sectionName === 'movie') {
            setActive(savedMoviesList.find(movieItem => movieItem.movieId === movie.id))
        }
    }, [isActive, movie, savedMoviesList])
    return (
        <div className='movie-card'>
            <a
                className="movie-card__trailer-link"
                href={trailerLink}
                target="_blank"
                rel="noreferrer"
            >
                <img className='movie-card__img'
                     src={(typeof image === 'string') ? image : `${MOVIE_BASE_URL}/${image.url}`}
                     alt={`обложка к фильму "${nameRU}"`}/>
            </a>
            <div className='movie-card__caption-block'>
                <div className='movie-card__text-wrapper'>
                    <h2 className='movie-card__title'>{nameRU}</h2>
                    <p className='movie-card__subtitle'>{durationFormatConverter(duration)}</p>
                </div>
                {sectionName === 'saved-movies' ? (
                        <div className='movie-card__btn-wrapper'
                             onClick={deleteMovie}>
                            <button
                                type='button'
                                className='movie-card__btn movie-card__btn-delete'
                            />
                        </div>)
                    :
                    (<div className='movie-card__btn-wrapper' onClick={!!isActive ? deleteMovie : saveMovie}>
                        <div
                            className={`movie-card__btn movie-card__btn_${!!isActive ? 'saved' : 'unsaved'}`}
                        />
                    </div>)}
            </div>
        </div>
    )
}
