import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './Movies.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Movies() {
    return (
        <>
            <Header userSignin={true}/>
            <main>
                <SearchForm/>
                <MoviesCardList savedMovieBtnIsActive={false} btnElse={true}/>
            </main>
            <Footer/>
        </>

    )
}
