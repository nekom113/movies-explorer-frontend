import './SearchForm.css'
import moviesApi from "../../utils/MoviesApi";

export default function SearchForm({setMoviesList}) {

    const handleSerchAction = (e) => {
        e.preventDefault()
        moviesApi.getMovies().then(data => {
            setMoviesList(data)
        })
    }
    return (
        <section className="section-search">
            <form className="section-search__form">
                <label className="section-search__container">
                    <input
                        className="section-search__form-input"
                        placeholder="Фильм"
                        required={true}
                    />
                    <input
                        type="submit"
                        className="section-search__form-button"
                        value="Поиск"
                        onClick={handleSerchAction}
                    />
                </label>
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
