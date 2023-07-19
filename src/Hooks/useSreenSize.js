import { useState, useEffect } from "react";

export default function useScreenSize() {
    const [screenSize, setScreenSize] = useState('');

    useEffect(() => {
        let timeout;
        const getWindowWidth =()=> {
            setScreenSize(window.innerWidth);
        }

        const handleResize =()=> {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                getWindowWidth();
            }, 1000);
        };


        window.addEventListener("resize", handleResize);

        getWindowWidth();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return screenSize;
}
