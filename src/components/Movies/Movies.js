import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './Movies.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useState} from "react";

export function getSearchMoviesByLocalStorage(lsKey) {
    return localStorage.getItem(lsKey) ? JSON.parse(localStorage.getItem(lsKey)) : {}
}
export default function Movies({
                                   loggedIn,
                                   setMoviesList,
                                   savedMoviesList,
                                   setSavedMoviesList,
                                   moviesList
                               }) {
    const [searchMoviesList, setSearchMoviesList] = useState(getSearchMoviesByLocalStorage('moviesListSearched'))


    return (
        <>
            <Header loggedIn={loggedIn}/>
            <main>
                <SearchForm
                    moviesList={moviesList}
                    setMoviesList={setMoviesList}
                    savedMoviesList={savedMoviesList}
                    setSavedMoviesList={setSavedMoviesList}
                    setSearchMoviesList={setSearchMoviesList}
                    searchMoviesList={searchMoviesList}
                />
                <MoviesCardList
                    savedMovieBtnIsActive={false}
                    btnElse={true}
                    searchMoviesList={searchMoviesList}
                />
            </main>
            <Footer/>
        </>

    )
}
