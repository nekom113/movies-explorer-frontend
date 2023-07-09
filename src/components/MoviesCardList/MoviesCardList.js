import './MoviesCardList.css'
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({savedMovieBtnIsActive, btnElse}) {
    return (
        <section className='section-movie-cards'>
            <div className='section-movie-cards-list__block'>
                {savedMovieBtnIsActive ?
                    <>
                        <MoviesCard
                            savedMovieBtnIsActive={savedMovieBtnIsActive}
                            movieName={"33 слова о дизайне"} movieDuration={'1ч 47м'}
                            linkToMovie={'https://www.youtube.com/watch?v=5ovzC93EneA'}
                            moviePoster={'https://avatars.dzeninfra.ru/get-zen_doc/1362956/pub_5cf7727e34ace300afb30624_5cf772abaff15000afe52d10/scale_1200'}
                        />
                        <MoviesCard
                            savedMovieBtnIsActive={savedMovieBtnIsActive}
                            movieName={"Киноальманах «100 лет дизайна»"}
                            linkToMovie={'https://www.youtube.com/watch?v=DpDkewhiZiI'}
                            movieDuration={'1ч 47м'}
                            moviePoster={'https://avatars.dzeninfra.ru/get-zen_doc/1362956/pub_5cf7727e34ace300afb30624_5cf772abaff15000afe52d10/scale_1200'}/>
                        <MoviesCard
                            savedMovieBtnIsActive={savedMovieBtnIsActive}
                            movieName={"В погоне за Бенкси"}
                            movieDuration={'1ч 47м'}
                            moviePoster={'https://avatars.dzeninfra.ru/get-zen_doc/1362956/pub_5cf7727e34ace300afb30624_5cf772abaff15000afe52d10/scale_1200'}
                            linkToMovie={'https://www.youtube.com/watch?v=g85ErgcyqX8'}/>
                    </> :
                    <>
                        <MoviesCard movieName={"Соберись перед прыжком"} movieDuration={'1ч 10м'}
                                    moviePoster={'https://gorodprima.ru/wp-content/uploads/2020/10/kino1.jpg'}
                                    linkToMovie={'https://www.youtube.com/watch?v=g85ErgcyqX8'}/>
                        <MoviesCard movieName={"Пи Джей Харви: A dog called money"} movieDuration={'1ч 4м'}
                                    linkToMovie={'https://www.youtube.com/watch?v=g85ErgcyqX8'}
                                    moviePoster={'https://gorodprima.ru/wp-content/uploads/2020/10/kino1.jpg'}/>
                        <MoviesCard movieName={"По волнам: Искусство звука в кино"} movieDuration={'1ч 7м'}
                                    moviePoster={'https://w.forfun.com/fetch/08/08cda7cd58c2cd769af07cd2a33c5e2c.jpeg'}
                                    linkToMovie={'https://www.youtube.com/watch?v=g85ErgcyqX8'}/>
                        <MoviesCard movieName={"Соберись перед прыжком"} movieDuration={'1ч 10м'}
                                    moviePoster={'https://gorodprima.ru/wp-content/uploads/2020/10/kino1.jpg'}
                                    linkToMovie={'https://www.youtube.com/watch?v=g85ErgcyqX8'}/>
                        <MoviesCard movieName={"Пи Джей Харви: A dog called money"} movieDuration={'1ч 4м'}
                                    moviePoster={'https://gorodprima.ru/wp-content/uploads/2020/10/kino1.jpg'}
                                    linkToMovie={'https://www.youtube.com/watch?v=g85ErgcyqX8'}/>
                        <MoviesCard movieName={"По волнам: Искусство звука в кино"} movieDuration={'1ч 7м'}
                                    moviePoster={'https://w.forfun.com/fetch/08/08cda7cd58c2cd769af07cd2a33c5e2c.jpeg'}
                                    linkToMovie={'https://www.youtube.com/watch?v=g85ErgcyqX8'}/>
                        <MoviesCard movieName={"Соберись перед прыжком"} movieDuration={'1ч 10м'}
                                    moviePoster={'https://gorodprima.ru/wp-content/uploads/2020/10/kino1.jpg'}
                                    linkToMovie={'https://www.youtube.com/watch?v=g85ErgcyqX8'}/>
                        <MoviesCard movieName={"Пи Джей Харви: A dog called money"} movieDuration={'1ч 4м'}
                                    moviePoster={'https://gorodprima.ru/wp-content/uploads/2020/10/kino1.jpg'}
                                    linkToMovie={'https://www.youtube.com/watch?v=g85ErgcyqX8'}/>
                    </>

                }
            </div>
            {btnElse &&
                <button className='section-movie-cards__loading-btn' onClick={() => alert('Вы нажали кнопку "Ещё"')}>Ещё
                </button>
            }
        </section>
    )
}
