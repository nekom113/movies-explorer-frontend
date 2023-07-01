import Main from '../Main/Main';
import './App.css';
import { Routes, Route } from 'react-router-dom';

export default function App(){
  return(
    <div className='app'>
      <div className='app__blocks'>
      <Routes>
        <Route path='/' element={<Main/>} />
      </Routes>
      </div>
    </div>
  )
}
