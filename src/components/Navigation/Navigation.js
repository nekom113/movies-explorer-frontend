import './Navigation.css'
import {useState} from "react";
import {NavLink} from 'react-router-dom';


export default function Navigation() {
    const [burgerIsOpen, setBurgerToOpen] = useState(false)

    return (
        <nav className='navigation'>
            <div className='navigation__links-list'>
                <NavLink to='/movies' className='navigation__links-item'>
                    Фильмы
                </NavLink>
                <NavLink to='/saved-movies' className='navigation__links-item'>
                    Сохранённые фильмы
                </NavLink>
                <NavLink to='/profile' className='navigation__links-block-profile'>
                    <p className='navigation__links-profile'>
                        Аккаунт
                    </p>
                    <span className='navigation__profile-icon'/>
                </NavLink>
            </div>
            <button
                type='button'
                className='navigation__burger' onClick={() => {
                setBurgerToOpen(true);
            }}/>
            <div
                className={`navigation__burger-menu `}
                style={burgerIsOpen ? {display: 'block'} : {display: 'none'}}

            >
                <button
                    type='button'
                    className='navigation__close-btn'
                    onClick={() => setBurgerToOpen(false)}
                />
                <aside className='navigation__burger-menu-links'>
                    <NavLink to='/' className='navigation__burger-menu-links-item'>
                        Главная
                    </NavLink>
                    <NavLink to='/movies' className='navigation__burger-menu-links-item'>
                        Фильмы
                    </NavLink>
                    <NavLink to='/saved-movies' className='navigation__burger-menu-links-item'>
                        Сохранённые
                        фильмы
                    </NavLink>
                    <NavLink to='/profile' className='navigation__burger-menu-links-block-profile'>
                        <p className='navigation__burger-menu-links-profile'>
                            Аккаунт
                        </p>
                        <span className='navigation__profile-icon'/>
                    </NavLink>
                </aside>
            </div>
        </nav>
    )

}
