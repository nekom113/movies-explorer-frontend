import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({
                                           sectionName,
                                           searchMoviesList,
                                           addMovies,
                                           partOfMovies,
                                           filteredMovies,
                                           isFilterActive,
                                           handleSaveMovie,
                                           handleDeleteSavedMove,
                                           savedMoviesList
                                       }) {
    const checkActiveBtnView = () => {
        if (sectionName === 'saved-movies') {
            return false
        }
        if (isFilterActive) {
            return (filteredMovies.length !== partOfMovies.length)
        }
        return (partOfMovies.length !== searchMoviesList.length)
    }

    return (
        <section className='section-movie-cards'>
            <div className='section-movie-cards-list__block'>
                {sectionName === 'saved-movies' ?
                    savedMoviesList.map(movie => {
                            return <MoviesCard
                                key={movie._id}
                                handleDeleteSavedMove={handleDeleteSavedMove}
                                sectionName={sectionName}
                                movie={movie}
                            />
                        }
                    )

                    :
                    partOfMovies.map(movie => {
                        return (<MoviesCard key={movie.id}
                                            sectionName={sectionName}
                                            handleSaveMovie={handleSaveMovie}
                                            movie={movie}
                                            savedMoviesList={savedMoviesList}
                                            handleDeleteSavedMove={handleDeleteSavedMove}
                        />)
                    })


                }
            </div>
            {checkActiveBtnView() &&
                <button
                    className='section-movie-cards__loading-btn'
                    type='button'
                    onClick={addMovies}
                >
                    Ещё
                </button>
            }
        </section>
    )
}
