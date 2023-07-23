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
import InfoTooltip from "../InfoTooltip/InfoTooltip";

export default function App() {
    const navigate = useNavigate()
    const [currentUser, setCurrentUser] = useState({})


    const [savedMoviesList, setSavedMoviesList] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false)
    const value = useMemo(() => ({currentUser, setCurrentUser}), [currentUser])
    const [tooltipSettings, setTooltipSettings] = useState({
        state: false,
        isOpen: false,
        message: ''
    })

    const handelClosePopup = () => {
        setTooltipSettings({...tooltipSettings, isOpen: false})
    }
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
                .then(() => {
                    setLoggedIn(true);
                })
                .then(() => navigate("/", {replace: true}))
        }
    }, [loggedIn])

    useEffect(() => {
        setIsLoading(true);
        const token = getJWTByLocalStorage()
        mainApi.getSavedMovies(token)
            .then(movies => {
                setSavedMoviesList(movies)
                setIsLoading(false)
            })
            .catch(err => {
                console.error({err})
                setTooltipSettings({
                    state: false,
                    isOpen: true,
                    message: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
                })
            })
    }, [])

    const handleDeleteSavedMove = (movieId, setToggle) => {
        const token = getJWTByLocalStorage()

        mainApi.deleteMovie(movieId, token)
            .then(response => {
                setSavedMoviesList(prev => prev.filter(movie => movie._id !== response._id))
                setToggle(false)
            })
            .catch(err => {
                console.error({err})
                setTooltipSettings({
                    state: false,
                    isOpen: true,
                    message: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
                })
            })
    }


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
                                    setLoggedIn={setLoggedIn}
                                    currentUser={currentUser}
                                    savedMoviesList={savedMoviesList}
                                    setSavedMoviesList={setSavedMoviesList}
                                    setTooltipSettings={setTooltipSettings}
                                    handleDeleteSavedMove={handleDeleteSavedMove}
                                    isLoading={isLoading}
                                    setIsLoading={setIsLoading}
                                />
                            </ProtectedRoute>
                        }
                        />
                        <Route path='/saved-movies' element={
                            <ProtectedRoute isLogged={loggedIn}>

                                <SavedMovies
                                    loggedIn={loggedIn}
                                    savedMoviesList={savedMoviesList}
                                    setSavedMoviesList={setSavedMoviesList}
                                    handleDeleteSavedMove={handleDeleteSavedMove}
                                    setTooltipSettings={setTooltipSettings}
                                    isLoading={isLoading}
                                    setIsLoading={setIsLoading}
                                />
                            </ProtectedRoute>

                        }
                        />
                        <Route path='/profile' element={
                            <ProfileUpdateForm
                                loggedIn={loggedIn}
                                setLoggedIn={setLoggedIn}
                                setCurrentUser={setCurrentUser}
                                setTooltipSettings={setTooltipSettings}
                            />

                        }
                        />
                        <Route path='/signin' element={
                            <Login
                                setTooltipSettings={setTooltipSettings}
                                navigate={navigate}
                                setLoggedIn={setLoggedIn}
                            />

                        }/>
                        <Route path='/signup' element={
                            <Register
                                navigate={navigate}
                                setLoggedIn={setLoggedIn}
                                setTooltipSettings={setTooltipSettings}
                            />
                        }/>
                        <Route path='*' element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
            <InfoTooltip
                isOpenConfig={tooltipSettings}
                onClose={handelClosePopup}
                toolTipText={tooltipSettings.message}
            />
        </CurrentUserContext.Provider>

    )
}
