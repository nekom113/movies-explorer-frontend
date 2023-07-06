import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './Movies.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Movies() {
    return (
        <section className='movies-section'>
            <Header userSignin={true}/>
            <SearchForm/>
            <MoviesCardList/>
            <Footer/>
        </section>
    )
}
