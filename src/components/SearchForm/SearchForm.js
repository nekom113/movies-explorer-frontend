import './SearchForm.css'
import moviesApi from "../../utils/MoviesApi";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {useState} from "react";
import {searchMoviesByKeyWord} from "../../utils/utils";



export default function SearchForm({setMoviesList, setSearchMoviesList, searchMoviesList}) {
    const inputValue = searchMoviesList.searchRequest ? searchMoviesList.searchRequest:''
    const [inputSearch, setInputSearch] = useState(inputValue)
    const [inputIsBlocked, setInputIsBlocked] = useState(false)


    const handleSubmitSearchForm = (event,) => {
        event.preventDefault()
        if (inputSearch.length) {
            moviesApi.getMovies().then(data => {
                setMoviesList(data)
                const searchMovies = searchMoviesByKeyWord(data, inputSearch)
                setSearchMoviesList(searchMovies)
                localStorage.setItem('moviesList', JSON.stringify(data));
                localStorage.setItem('moviesListSearched', JSON.stringify(
                    {
                        searchRequest: inputSearch,
                        searchResult: searchMovies,
                    }));

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
                    />
                    <label htmlFor="switch" className="section-search__toggle-label"/>
                    <span className="section-search__toggle-text">Короткометражки</span>
                </label>

            </form>
        </section>
    )
}
