import './HeaderFooterLayout.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function HeaderFooterLayout({props, children}){
    return(
        <div className=''>
            <Header{...props}/>
            {children}
            <Footer/>
        </div>
    )
}
