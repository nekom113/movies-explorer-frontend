import './Register.css'
import RegLoginUserForm from "../RegLoginUserForm/RegLoginUserForm";
import mainApi from "../../utils/MainApi";

export default function Register({ navigate, setLoggedIn}) {
    function handleRegistarationUser(userData) {
        mainApi.getRegistrationUser(userData)
            .then(() => {
                return mainApi.getAuthorizationUser(userData)
                    .then((responseData) => {
                        console.log({userData, responseData})
                                localStorage.setItem('jwt', responseData?.token);
                                setLoggedIn(true)
                        navigate('/movies')

                    })
            })
    }

    return (
        <RegLoginUserForm
            isRegistrationForm={true}
            handleOnSubmit={handleRegistarationUser}
            navigate={navigate}
        />
    )
}
