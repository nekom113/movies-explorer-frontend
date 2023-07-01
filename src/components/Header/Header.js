import { Link } from "react-router-dom";
import './Header.css'
import Logo from "../Logo/Logo";


export default function Header() {
    return (
        <header className='header'>
            <Logo/>
            <div className="header__links">
              <Link to="/signup" className="header__signup">
                Регистрация
              </Link>
              <Link to="/signin" className="header__signin-button">
                Войти
              </Link>
          </div>
        </header>
    )
}
