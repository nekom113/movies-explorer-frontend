import './SearchForm.css'
import moviesApi from "../../utils/MoviesApi";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {useEffect, useState} from "react";
import {searchMoviesByKeyWord} from "../../utils/utils";


export default function SearchForm({
                                       setMoviesList, setSearchMoviesList, searchMoviesList, moviesList
}) {
    // const inputValue = searchMoviesList.searchRequest ? searchMoviesList.searchRequest : ''
    const [inputSearch, setInputSearch] = useState(searchMoviesList.searchRequest ? searchMoviesList.searchRequest : '')
    const [inputIsBlocked, setInputIsBlocked] = useState(false)
    const [shortMovToggleIsActive, setShortMovToggle] = useState(false)

    useEffect(() => {
        setSearchMoviesList(searchMoviesByKeyWord(moviesList, inputSearch))
    }, [moviesList, inputSearch])
    const updateLockalStorageSerchedData = (input, moviesList, shortBtnActive) => {
        localStorage.setItem('moviesListSearched', JSON.stringify(
            {
                searchRequest: input,
                searchResult: moviesList,
                shortMoviesListShow: shortBtnActive,
            }));
    }

    const handleSwitchShortMov = () => {
        setShortMovToggle(!shortMovToggleIsActive)
        updateLockalStorageSerchedData(inputSearch, searchMoviesList, shortMovToggleIsActive)
    }

    const handleSubmitSearchForm = (event) => {
        event.preventDefault()
        if (inputSearch.length) {
            moviesApi.getMovies().then(data => {
                setMoviesList(data)
                const searchMovies = searchMoviesByKeyWord(data, inputSearch)
                setSearchMoviesList(searchMovies)
                localStorage.setItem('moviesList', JSON.stringify(data));
                updateLockalStorageSerchedData(inputSearch, searchMovies, shortMovToggleIsActive)

            })
            setInputIsBlocked(false)
            return
        }
        setMoviesList([])
        return setInputIsBlocked(true)
    }


    return (
        <section className="section-search">
            <form className="section-search__form">
                <label className="section-search__container">
                    <input
                        className="section-search__form-input"
                        placeholder="Фильм"
                        required={true}
                        value={inputSearch}
                        onChange={(e) => {
                            setInputSearch(e.target.value)
                            setInputIsBlocked(false)
                        }}
                    />
                    <input
                        type="submit"
                        className="section-search__form-button"
                        value="Поиск"
                        onClick={handleSubmitSearchForm}
                    />
                </label>
                <ErrorMessage
                    errorIsActive={inputIsBlocked}
                    errorMessage={'Введите запрос в поле поиска'}
                />
                <label className="section-search__toggle">
                    <input
                        className="section-search__toggle-input"
                        type="checkbox"
                        id="switch"
                        name="switch"
                        onChange={handleSwitchShortMov}
                        checked={shortMovToggleIsActive}
                    />
                    <label htmlFor="switch" className="section-search__toggle-label"/>
                    <span className="section-search__toggle-text">Короткометражки</span>
                </label>

            </form>
        </section>
    )
}
