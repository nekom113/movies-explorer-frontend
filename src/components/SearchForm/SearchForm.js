import './SearchForm.css'
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import {useEffect, useState} from "react";


export default function SearchForm({
                                       sectionName,
                                       searchMovies,
                                       handleSwitchShortMov,
                                       isFilterShortMovActive

                                   }) {

    const [searchInput, setSearchInput] = useState('');
    const [inputIsBlocked, setInputIsBlocked] = useState(false)

    const handleSubmitSearchForm = (e) => {
        e.preventDefault()
        if (!!searchInput || sectionName === 'saved-movies') {
            searchMovies(searchInput)
            setInputIsBlocked(false)
            return
        }
        return setInputIsBlocked(true)
    }
    useEffect(() => {
        if (sectionName === 'movies') {
            const inputValueFromLS = localStorage.getItem('searchValue')
            if (inputValueFromLS) {
                setSearchInput(inputValueFromLS);
                setInputIsBlocked(false)
            }
        }
    }, [sectionName]);
    return (
        <section className="section-search">
            <form
                className="section-search__form"
                onSubmit={handleSubmitSearchForm}
                noValidate
            >
                <label className="section-search__container">
                    <input
                        className="section-search__form-input"
                        placeholder="Фильм"
                        required={true}
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value)
                            setInputIsBlocked(false)
                        }}
                    />
                    <button
                        type="submit"
                        className="section-search__form-button"
                    >Поиск
                    </button>
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
                        checked={isFilterShortMovActive}
                    />
                    <label htmlFor="switch" className="section-search__toggle-label"/>
                    <span className="section-search__toggle-text">Короткометражки</span>
                </label>

            </form>
        </section>
    )
}
