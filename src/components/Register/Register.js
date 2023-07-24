import './Register.css'
import RegLoginUserForm from "../RegLoginUserForm/RegLoginUserForm";
import mainApi from "../../utils/MainApi";
import {TOOL_TIP_MESSAGES} from "../../utils/utils";
import {useNavigate} from "react-router-dom";

export default function Register({setLoggedIn, setTooltipSettings}) {
    const navigate = useNavigate()

    function handleRegistarationUser(userData) {
        mainApi.getRegistrationUser(userData)
            .then(() => {
                return mainApi.getAuthorizationUser(userData)
                    .then((responseData) => {
                        localStorage.setItem('jwt', responseData?.token);
                        setLoggedIn(true)
                        navigate('/movies')

                    })
                    .catch((errorObj) => {
                            setTooltipSettings({
                                isOpen: true,
                                status: false,
                                message: errorObj?.message || TOOL_TIP_MESSAGES.auth_error
                            })
                        }
                    )

            })
            .catch((errorObj) => {
                    setTooltipSettings({
                        isOpen: true,
                        status: false,
                        message: errorObj?.message || TOOL_TIP_MESSAGES.duplicate_data_error
                    })
                }
            )
    }

    return (
        <RegLoginUserForm
            isRegistrationForm={true}
            handleOnSubmit={handleRegistarationUser}
        />
    )
}
