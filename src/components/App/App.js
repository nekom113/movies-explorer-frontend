import Main from '../Main/Main';
import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFound from "../NotFound/NotFound";
import ProfileUpdateForm from "../ProfileUpdateForm/ProfileUpdateForm";
import Login from "../Login/Login";
import Register from "../Register/Register";
import {useEffect, useMemo, useState} from "react";
import {CurrentUserContext} from "../../context/CurrentUserContext";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import mainApi from "../../utils/MainApi";
import {getJWTByLocalStorage} from "../../utils/utils";

export default function App() {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState({})
    const [loggedIn, setLoggedIn] = useState(false)
    const value = useMemo(() => ({currentUser, setCurrentUser}), [currentUser])

    useEffect(() => {
        const token = getJWTByLocalStorage()
        if (token) {
            mainApi.getProfileData(token)
                .then(profileData => setCurrentUser(profileData))

        }
    }, [loggedIn])
    useEffect(() => {
        const token = localStorage.getItem('jwt')
        if (token) {
            mainApi.checkDataUser(token)
                .then((data) => {
                    setLoggedIn(true);
                })
                .then(() => navigate("/", {replace: true}))
        }
    }, [loggedIn])

    return (
        <CurrentUserContext.Provider
            value={value}>
            <div className='app'>
                <div className='app__blocks'>
                    <Routes>
                        <Route path='/' element={
                            <Main
                                loggedIn={loggedIn}
                            />
                        }
                        />
                        <Route path='/movies' element={
                            <ProtectedRoute isLogged={loggedIn}>
                                <Movies
                                    loggedIn={loggedIn}
                                />
                            </ProtectedRoute>
                        }
                        />
                        <Route path='/saved-movies' element={
                            <ProtectedRoute isLogged={loggedIn}>

                                <SavedMovies
                                    loggedIn={loggedIn}
                                />
                            </ProtectedRoute>

                        }
                        />
                        <Route path='/profile' element={
                            <ProfileUpdateForm
                                loggedIn={loggedIn}
                                setLoggedIn={setLoggedIn}
                                setCurrentUser={setCurrentUser}
                            />

                        }
                        />
                        <Route path='/signin' element={
                            <Login
                                navigate={navigate}
                                setLoggedIn={setLoggedIn}
                            />

                        }/>
                        <Route path='/signup' element={
                            <Register
                                navigate={navigate}
                                setLoggedIn={setLoggedIn}
                            />
                        }/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </CurrentUserContext.Provider>

    )
}
