import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

export default function SavedMovies() {
    const savedMovieBtnIsActive = true
    return (
        <section className='section-saved-movies'>
            <SearchForm/>
            <MoviesCardList savedMovieBtnIsActive={savedMovieBtnIsActive}/>
        </section>
    )
}
