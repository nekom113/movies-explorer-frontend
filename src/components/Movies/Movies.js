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


export default function Movies({
                                   loggedIn,
                                   savedMoviesList,
                                   setSavedMoviesList,
                                   setTooltipSettings
                               }) {
    const windowSize = useScreenSize()
    const [moviesList, setMoviesList] = useState([])
    const [searchMoviesList, setSearchMoviesList] = useState([])
    const [separatedMovies, setSeparatedMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isFilterActive, setIsFilterActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    // const inputValue = searchMoviesList.searchRequest ? searchMoviesList.searchRequest : ''

    const [shortMovToggleIsActive, setShortMovToggle] = useState(false)

    const searchMovies = (searchValue) => {
        setIsLoading(true);
        setIsSearchActive(true);
        setIsError(false)
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
                    setIsSearchActive(false);

                })
                .catch(err => {
                    console.error({err})
                    setIsLoading(false);
                    setIsSearchActive(false);
                    setTooltipSettings({
                        state: false,
                        isOpen: true,
                        message: 'При обращении к серверу произошла ошибка. Попробуйсте повторить запрос позднее'
                    })
                })

        } else {
            const searchMoviesArray = searchMoviesByKeyWord(moviesList, searchValue)
            setSearchMoviesList(searchMoviesArray)
            localStorage.setItem('searchedMoviesList', JSON.stringify(searchMoviesArray));
            setIsLoading(false);
            setIsSearchActive(false);
        }
        localStorage.setItem('searchValue', searchValue)
        if (isFilterActive) {
            localStorage.setItem('filterActive', 'true')
        }
        localStorage.removeItem('filterActive');
    }
    const handleCheckBox = () => {
        if (isFilterActive) {
            localStorage.removeItem('filterActive')
        }
        localStorage.setItem('filterActive', 'true');
        setIsFilterActive((state) => !state);
    }
    const addMovies = () => {
        let loadingCards = windowSize > 1024 ? 3 : 2;
        setSeparatedMovies((val) => {
            return val.concat(filteredMovies.slice(val.length, val.length + loadingCards));
        })
    }
    useEffect(() => {
        if(isFilterActive) {
            setFilteredMovies(filterMoviesByDuration(searchMoviesList))
        } else {
            setFilteredMovies(searchMoviesList);
        }
    }, [isFilterActive, searchMoviesList])

    useEffect (() => {
        let limit;
        if (windowSize > 1024) {
            limit = 3;
        } else if (windowSize > 480) {
            limit = 8;
        } else {
            limit = 5;
        }
        if(filteredMovies.length > limit) {
            setSeparatedMovies(filteredMovies.slice(0, limit))
        } else {
            setSeparatedMovies(filteredMovies);
        }
    }, [windowSize, filteredMovies]);

    useEffect(() => {
        const allMovies = localStorage.getItem('allMoviesList');
        const searched = localStorage.getItem('searchedMoviesList');
        const isChecked = localStorage.getItem('filterActive');
        if(allMovies) {
            setMoviesList(JSON.parse(allMovies));
        }
        if(searched) {
            setSearchMoviesList(JSON.parse(searched));
        }
        if(isChecked) {
            setIsFilterActive(true);
        }
    },[])

    return (
        <>
            <Header loggedIn={loggedIn}/>
            <main>
                <SearchForm
                    sectionName={'movies'}
                    moviesList={moviesList}
                    savedMoviesList={savedMoviesList}
                    setSavedMoviesList={setSavedMoviesList}
                    searchMoviesList={searchMoviesList}


                    searchMovies={searchMovies}
                />
                {isLoading ? <Preloader/> :
                    <MoviesCardList
                        savedMovieBtnIsActive={false}
                        searchMoviesList={searchMoviesList}
                        shortMovToggleIsActive={shortMovToggleIsActive}
                        separatedMovies={separatedMovies}
                        filteredMovies={filteredMovies}
                        addMovies={addMovies}

                    />}
                {
                    <button
                        className='section-movie-cards__loading-btn'
                        type='button'
                        onClick={addMovies}
                    >
                        Ещё
                    </button>
                }
                {!isLoading && !isError && isSearchActive && filteredMovies.length === 0 &&
                    <p className='nothing-found-message'> Ничего не найдено!</p>
                }
            </main>
            <Footer/>
        </>

    )
}
