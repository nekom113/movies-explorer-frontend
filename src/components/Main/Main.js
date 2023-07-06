import './Main.css';
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Tech/Tech";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Header from "../Header/Header";

export default function Main() {
    return (
        <>
            <Header userSignin={false}/>
            <Promo/>
            <AboutProject/>
            <Techs/>
            <AboutMe/>
            <Portfolio/>
        </>
    )
}



