import {useNavigate} from "react-router-dom";
import './Header.css'
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";


export default function Header({loggedIn}) {
    const navigate = useNavigate();

    return (
        <header className='header'>
            <Logo/>
            {loggedIn ?
                <Navigation/>
                :
                <nav className="header__links ">
                    <button type="button"
                            onClick={() => navigate("/signup")}
                            className="header__signup-button"
                    >
                        Регистрация
                    </button>
                    <button type="button"
                            onClick={() => navigate("/signin")}
                            className="header__signin-button"
                    >
                        Войти
                    </button>
                </nav>}
        </header>
    )
}
