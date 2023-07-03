import Main from '../Main/Main';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Movies from "../Movies/Movies";

export default function App(){
  return(
    <div className='app'>
      <div className='app__blocks'>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/movies' element={<Movies/>} />
      </Routes>
      </div>
    </div>
  )
}
