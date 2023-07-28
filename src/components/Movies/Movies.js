import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './Movies.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {useEffect, useState} from "react";
import {filterMoviesByDuration, searchMoviesByKeyWord} from "../../utils/utils";
import Preloader from "../Preloader/Preloader";
import moviesApi from "../../utils/MoviesApi";
import useScreenSize from "../../Hooks/useSreenSize";
import mainApi from "../../utils/MainApi";


export default function Movies({
                                   loggedIn,
                                   savedMoviesList,
                                   setSavedMoviesList,
                                   setTooltipSettings,
                                   handleDeleteSavedMove,
                                   isLoading,
                                   setIsLoading
                               }) {
    const windowSize = useScreenSize()
    const [moviesList, setMoviesList] = useState([])
    const [searchMoviesList, setSearchMoviesList] = useState([])
    const [separatedMovies, setSeparatedMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isFilterActive, setIsFilterActive] = useState(false);


    const searchMovies = (searchValue) => {
        setIsLoading(true);
        setIsSearchActive(true);
        if (moviesList.length === 0) {
            localStorage.removeItem('allMoviesList')
            moviesApi.getMovies()
                .then(data => {
                    setMoviesList(data)
                    localStorage.setItem('allMoviesList', JSON.stringify(data));
                    const searchMoviesArray = searchMoviesByKeyWord(data, searchValue)
                    setSearchMoviesList(searchMoviesArray)
                    localStorage.setItem('searchedMoviesList', JSON.stringify(searchMoviesArray));
                    setIsLoading(false);
                    (searchMoviesArray.length > 0) ? setIsSearchActive(false) : setIsSearchActive(true);

                })
                .catch(err => {
                    console.error({err})
                    setIsLoading(false);
                    setIsSearchActive(false);
                    setTooltipSettings({
                        state: false,
                        isOpen: true,
                        message: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
                    })
                })

        } else {
            const searchMoviesArray = searchMoviesByKeyWord(moviesList, searchValue)
            setSearchMoviesList(searchMoviesArray)
            localStorage.setItem('searchedMoviesList', JSON.stringify(searchMoviesArray));
            setIsLoading(false);
            (searchMoviesArray.length > 0) ? setIsSearchActive(false) : setIsSearchActive(true);
        }
        localStorage.setItem('searchValue', searchValue)
        if (isFilterActive) {
            localStorage.setItem('filterActive', 'true')
        }
        localStorage.removeItem('filterActive');
    }
    const addMovies = () => {
        let loadingCards = windowSize > 1024 ? 3 : 2;
        setSeparatedMovies((val) => {
            return val.concat(filteredMovies.slice(val.length, val.length + loadingCards));
        })
    }
    useEffect(() => {
        if (isFilterActive) {
            setFilteredMovies(filterMoviesByDuration(searchMoviesList))
        } else {
            setFilteredMovies(searchMoviesList);
        }
    }, [isFilterActive, searchMoviesList])

    useEffect(() => {
        let limit;
        if (windowSize > 1024) {
            limit = 3;
        } else if (windowSize > 480) {
            limit = 8;
        } else {
            limit = 5;
        }
        if (filteredMovies.length > limit) {
            setSeparatedMovies(filteredMovies.slice(0, limit))
        } else {
            setSeparatedMovies(filteredMovies);
        }
    }, [windowSize, filteredMovies]);

    useEffect(() => {
        const allMovies = localStorage.getItem('allMoviesList');
        const searched = localStorage.getItem('searchedMoviesList');
        const isChecked = localStorage.getItem('filterActive');
        if (allMovies) {
            setMoviesList(JSON.parse(allMovies));
        }
        if (searched) {
            setSearchMoviesList(JSON.parse(searched));
        }
        if (isChecked) {
            setIsFilterActive(true);
        }
    }, [])

    const handleSwitchShortMov = () => {
        if (isFilterActive) {
            localStorage.removeItem('filterActive')
        }
        localStorage.setItem('filterActive', 'true');
        setIsFilterActive(!isFilterActive);
    }
    const handleSaveMovie = (movieId, token, setToggle) => {
        mainApi.saveMovie(movieId, token)
            .then(response => {
                setSavedMoviesList(prev => prev.concat(response))
                setToggle(true)
            })
            .catch(err => {
                console.error({err})
                setTooltipSettings({
                    state: false,
                    isOpen: true,
                    message: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
                })
            })
    }

    return (
        <>
            <Header loggedIn={loggedIn}/>
            <main>
                <SearchForm
                    sectionName={'movies'}
                    searchMovies={searchMovies}
                    handleSwitchShortMov={handleSwitchShortMov}
                    isFilterShortMovActive={isFilterActive}

                    moviesList={moviesList}
                    savedMoviesList={savedMoviesList}
                    setSavedMoviesList={setSavedMoviesList}
                    searchMoviesList={searchMoviesList}
                />
                {isLoading ? <Preloader/> :
                    <MoviesCardList
                        sectionName='movie'
                        searchMoviesList={searchMoviesList}
                        partOfMovies={separatedMovies}
                        savedMoviesList={savedMoviesList}
                        filteredMovies={filteredMovies}
                        isFilterActive={isFilterActive}
                        addMovies={addMovies}
                        handleSaveMovie={handleSaveMovie}
                        handleDeleteSavedMove={handleDeleteSavedMove}

                    />}
                {!isLoading && isSearchActive && filteredMovies.length === 0 &&
                    <p className='nothing-found-message'> Ничего не найдено</p>
                }
            </main>
            <Footer/>
        </>

    )
}
