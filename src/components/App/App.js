import Main from '../Main/Main';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import ProfileUpdateForm from "../ProfileUpdateForm/ProfileUpdateForm";
import Login from "../Login/Login";
import Register from "../Register/Register";

export default function App() {
    return (
        <div className='app'>
            <div className='app__blocks'>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/movies' element={<Movies/>}/>
                    <Route path='/saved-movies' element={<SavedMovies/>}/>
                    <Route path='/profile' element={<ProfileUpdateForm/>}/>
                    <Route path='/signin' element={<Login/>}/>
                    <Route path='/signup' element={<Register/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Routes>
            </div>
        </div>
    )
}
