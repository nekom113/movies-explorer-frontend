import {Link} from "react-router-dom";
import './Header.css'
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";


export default function Header({userSignin}) {
    return (
        <header className='header'>
            <Logo/>
            {userSignin ?
                <Navigation/>
                :
                <div className="header__links ">
                    <Link to="/signup" className="header__signup-button">
                        Регистрация
                    </Link>
                    <Link to="/signin" className="header__signin-button">
                        Войти
                    </Link>
                </div>}
        </header>
    )
}
