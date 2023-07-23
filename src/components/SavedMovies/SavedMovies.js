import './SavedMovies.css'
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {
    filterMoviesByDuration,
    searchMoviesByKeyWord,
} from "../../utils/utils";
import {useEffect, useState} from "react";
import Preloader from "../Preloader/Preloader";

export default function SavedMovies({
                                        loggedIn,
                                        savedMoviesList,
                                        handleDeleteSavedMove,
                                        isLoading,
                                    }) {
    const [searchedMovies, setSearchedMovies] = useState([])
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [isSavedMoveListActual, setSavedMoveListActual] = useState([]);

    useEffect(() => {
        setSearchedMovies(savedMoviesList);
    }, [savedMoviesList]);

    useEffect(() => {
        if (isFilterActive) {
            setSavedMoveListActual(filterMoviesByDuration(searchedMovies))
        } else {
            setSavedMoveListActual(searchedMovies);
        }
    }, [isFilterActive, searchedMovies])

    const handleSearchSavedMovie = (searchValue) => {
        setSearchedMovies(searchMoviesByKeyWord(savedMoviesList, searchValue));
    }
    const handleSwitchShortMov = () => {
        setIsFilterActive(!isFilterActive);
    }
    return (
        <>
            <Header loggedIn={loggedIn}/>
            <main className='section-saved-movies'>
                <SearchForm
                    sectionName={'saved-movies'}
                    searchMovies={handleSearchSavedMovie}
                    handleSwitchShortMov={handleSwitchShortMov}
                    isFilterShortMovActive={isFilterActive}
                />
                {isLoading ? <Preloader/> :
                    (isSavedMoveListActual.length > 0 && savedMoviesList.length > 0) ? <MoviesCardList
                            savedMoviesList={isSavedMoveListActual}
                            sectionName={'saved-movies'}
                            btnElse={false}
                            handleDeleteSavedMove={handleDeleteSavedMove}
                            isFilterShortMovActive={isFilterActive}
                        />
                        :
                        <p className='nothing-found-message'> {
                            savedMoviesList.length === 0 ? "Нет сохранённых фильмов" :
                                "Среди сохранённых сильмов соответствий не обнаружено"}</p>

                }
            </main>
            <Footer/>
        </>

    )
}
