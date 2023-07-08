import './SearchForm.css'

export default function SearchForm() {
    return (
        <section className="section-search">
            <form className="section-search__form">
                <label className="section-search__container">
                    <input
                        className="section-search__form-input"
                        placeholder="Фильм"
                    />
                    <input
                        type="submit"
                        className="section-search__form-button"
                        value="Поиск"
                        onClick={() => alert('Вы нажали кнопку "Поиск"')}
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
