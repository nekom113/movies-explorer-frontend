import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";
import {MOVIE_BASE_URL} from "../../utils/utils";

export default function MoviesCardList({
                                           savedMovieBtnIsActive,
                                           searchMoviesList,
}) {
    const checkedMoviesList = (Array.isArray(searchMoviesList)) ? searchMoviesList : []
    return (
        <section className='section-movie-cards'>
            <div className='section-movie-cards-list__block'>
                {savedMovieBtnIsActive ?
                    <>
                        <MoviesCard
                            savedMovieBtnIsActive={savedMovieBtnIsActive}
                            movieName={"33 слова о дизайне"}
                            movieDuration={'1ч 47м'}
                            linkToMovie={'https://www.youtube.com/watch?v=5ovzC93EneA'}
                            moviePoster={'https://avatars.dzeninfra.ru/get-zen_doc/1362956/pub_5cf7727e34ace300afb30624_5cf772abaff15000afe52d10/scale_1200'}
                        />
                    </> :
                    checkedMoviesList.map(movie => {
                        return (<MoviesCard key={movie.id} movieName={movie.nameRU}
                                            movieDuration={movie.duration}
                                            moviePoster={`${MOVIE_BASE_URL}/${movie.image.url}`}
                                            linkToMovie={movie.trailerLink}/>)
                    })


                }
            </div>

        </section>
    )
}
