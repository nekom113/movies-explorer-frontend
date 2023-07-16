import './Login.css'
import RegLoginUserForm from "../RegLoginUserForm/RegLoginUserForm";
import mainApi from "../../utils/MainApi";

export default function Login({navigate, setLoggedIn}) {
    const handleAuthorithation = (authData) => {
        return mainApi.getAuthorizationUser(authData)
            .then(response => {
                localStorage.setItem('jwt', response?.token);
                navigate('/movies')
                setLoggedIn(true)
            })

    }
    return (
        <RegLoginUserForm
            isRegistrationForm={false}
            handleOnSubmit={handleAuthorithation}
            navigate={navigate}

        />
    )
}
