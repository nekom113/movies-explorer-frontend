import './Navigation.css'
import {useState} from "react";
import {NavLink} from 'react-router-dom';


export default function Navigation() {
    const [burgerIsOpen, setBurgerToOpen] = useState(false)

    return (
        <div className='navigation'>
            <ul className='navigation__links-list'>
                <li>
                    <NavLink and to='/movies' className='navigation__links-item'>Фильмы</NavLink>
                </li>
                <li>
                    <NavLink and to='/saved-movies' className='navigation__links-item'>Сохранённые фильмы</NavLink>
                </li>
                <li>
                    <NavLink and to='/profile' className='navigation__links-block-profile'>
                        <p className='navigation__links-profile'>Аккаунт</p>
                        <span className='navigation__profile-icon'/>
                    </NavLink>
                </li>
            </ul>
            <div className='navigation__burger' onClick={() => setBurgerToOpen(true)}/>
            <div
                className={`navigation__burger-menu `}
                style={burgerIsOpen ? {display: 'block'} : {display: 'none'}}

            >
                <div className='navigation__close-btn'
                     onClick={() => setBurgerToOpen(false)}
                />
                <ul className='navigation__burger-menu-links'>
                    <li>
                        <NavLink and to='/' className='navigation__burger-menu-links-item'>Главная</NavLink>
                    </li>
                    <li>
                        <NavLink and to='/movies' className='navigation__burger-menu-links-item'>Фильмы</NavLink>
                    </li>
                    <li>
                        <NavLink and to='/saved-movies' className='navigation__burger-menu-links-item'>Сохранённые
                            фильмы</NavLink>
                    </li>
                    <li>
                        <NavLink and to='/profile' className='navigation__burger-menu-links-block-profile'>
                            <p className='navigation__burger-menu-links-profile'>Аккаунт</p>
                            <span className='navigation__profile-icon'/>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )

}
