import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import './Movies.css'

export default function Movies() {
    return (
        <section className='movies-section'>
            <div className='movies-section__main-block'>
                <Header/>
                <SearchForm/>
                {/*<Preloader/>*/}
                <MoviesCardList/>
            </div>
            <div className='movies-section__footer-block'>
                <Footer/>
            </div>

        </section>
    )
}
