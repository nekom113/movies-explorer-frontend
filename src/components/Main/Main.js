import Header from '../Header/Header';
import './Main.css';
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Tech/Tech";
import AboutMe from "./AboutMe/AboutMe";

export default function Main() {
    return (
        <>
            <Header/>
            <Promo/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
        </>
    )
}



