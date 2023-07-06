import Main from '../Main/Main';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Movies from "../Movies/Movies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";

export default function App() {
    return (
        <div className='app'>
            <div className='app__blocks'>
                <Header/>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/movies' element={<Movies/>}/>
                    <Route path='/saved-movies' element={<SavedMovies/>}/>
                    {/*<Route path='/signin' element={<Login/>}/>*/}
                </Routes>
            </div>
            <div className='app__footer-block'>
                <Footer/>
            </div>
        </div>
    )
}
