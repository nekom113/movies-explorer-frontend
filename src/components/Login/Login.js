import './Login.css'
import RegLoginUserForm from "../RegLoginUserForm/RegLoginUserForm";
import mainApi from "../../utils/MainApi";
import {TOOL_TIP_MESSAGES} from "../../utils/utils";
import {useNavigate} from "react-router-dom";

export default function Login({setLoggedIn, setTooltipSettings}) {
    const navigate = useNavigate()

    const handleAuthorithation = (authData) => {
        return mainApi.getAuthorizationUser(authData)
            .then(response => {
                localStorage.setItem('jwt', response?.token);
                navigate('/movies')
                setLoggedIn(true)
            })
            .catch((errorObj) => {
                    setTooltipSettings({
                        isOpen: true,
                        status: false,
                        message: errorObj?.message || TOOL_TIP_MESSAGES.auth_error
                    })
                }
            )

    }
    return (
        <RegLoginUserForm
            isRegistrationForm={false}
            handleOnSubmit={handleAuthorithation}

        />
    )
}
