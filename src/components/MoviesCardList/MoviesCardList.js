import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({savedMovieBtnIsActive}) {
    return (
        <section className='section-movie-cards'>
            <div className='section-movie-cards-list__block'>
                {savedMovieBtnIsActive ?
                    <>
                        <MoviesCard
                            savedMovieBtnIsActive={savedMovieBtnIsActive}
                            movieName={"Беги Лола, беги"} movieDuration={'1ч 44м'}
                            moviePoster={'https://avatars.dzeninfra.ru/get-zen_doc/1362956/pub_5cf7727e34ace300afb30624_5cf772abaff15000afe52d10/scale_1200'}/>
                        <MoviesCard
                            savedMovieBtnIsActive={savedMovieBtnIsActive}
                            movieName={"Беги Лола, беги"}
                            movieDuration={'1ч 44м'}
                            moviePoster={'https://avatars.dzeninfra.ru/get-zen_doc/1362956/pub_5cf7727e34ace300afb30624_5cf772abaff15000afe52d10/scale_1200'}/>
                        <MoviesCard
                            savedMovieBtnIsActive={savedMovieBtnIsActive}
                            movieName={"Беги Лола, беги"}
                            movieDuration={'1ч 44м'}
                            moviePoster={'https://avatars.dzeninfra.ru/get-zen_doc/1362956/pub_5cf7727e34ace300afb30624_5cf772abaff15000afe52d10/scale_1200'}/>
                    </> :
                    <>
                        <MoviesCard movieName={"Беги Лола, беги"} movieDuration={'1ч 44м'}
                                    moviePoster={'https://gorodprima.ru/wp-content/uploads/2020/10/kino1.jpg'}/>
                        <MoviesCard movieName={"Беги Лола, беги"} movieDuration={'1ч 44м'}
                                    moviePoster={'https://gorodprima.ru/wp-content/uploads/2020/10/kino1.jpg'}/>
                        <MoviesCard movieName={"Беги Лола, беги"} movieDuration={'1ч 44м'}
                                    moviePoster={'https://w.forfun.com/fetch/08/08cda7cd58c2cd769af07cd2a33c5e2c.jpeg'}/>
                    </>

                }
            </div>

            <button className='section-movie-cards__loading-btn' onClick={() => alert('Вы нажали кнопку "Ещё"')}>Ещё
            </button>
        </section>
    )
}
