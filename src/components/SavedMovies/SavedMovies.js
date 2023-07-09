import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function SavedMovies() {
    return (
        <>
            <Header userSignin={true}/>
            <main className='section-saved-movies'>
                <SearchForm/>
                <MoviesCardList savedMovieBtnIsActive={true} btnElse={false}/>
            </main>
            <Footer/>
        </>

    )
}
