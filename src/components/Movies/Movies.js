import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './Movies.css'
import Header from "../Header/Header";

export default function Movies() {
    return (
        <section className='movies-section'>
            <Header userSignin={true}/>
            <SearchForm/>
            <MoviesCardList/>
        </section>
    )
}
