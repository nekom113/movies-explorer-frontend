import {Link} from "react-router-dom";
import './Header.css'
import Logo from "../Logo/Logo";
import {useState} from "react";


export default function Header() {
    const [burgerIsOpen, setBurgerToOpen] = useState(false)
    return (
        <header className='header'>
            <Logo/>
            <div className="header__links ">
                <Link to="/signup" className="header__signup">
                    Регистрация
                </Link>
                <Link to="/signin" className="header__signin-button">
                    Войти
                </Link>
            </div>
            <div className='header__burger' onClick={()=>setBurgerToOpen(true)}/>
            <div
                className={`header__burger-menu `}
                style={burgerIsOpen ? {display: 'block'} : {display: 'none'}}
                onClick={() => setBurgerToOpen(false)}
            >

            </div>
        </header>
    )
}
