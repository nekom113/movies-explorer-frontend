import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";

export default function SavedMovies() {
    const savedMovieBtnIsActive = true
    return (
        <section className='section-saved-movies'>
            <Header userSignin={true}/>
            <SearchForm/>
            <MoviesCardList savedMovieBtnIsActive={savedMovieBtnIsActive}/>
        </section>
    )
}
