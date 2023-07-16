import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './Movies.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useState} from "react";

export default function Movies({loggedIn}) {
    const [moviesList, setMoviesList] = useState({})
    return (
        <>
            <Header loggedIn={loggedIn}/>
            <main>
                <SearchForm
                    setMoviesList={setMoviesList}
                />
                <MoviesCardList
                    savedMovieBtnIsActive={false}
                    btnElse={true}
                    moviesList={moviesList}
                />
            </main>
            <Footer/>
        </>

    )
}
