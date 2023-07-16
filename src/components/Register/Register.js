import './Register.css'
import RegLoginUserForm from "../RegLoginUserForm/RegLoginUserForm";
import mainApi from "../../utils/MainApi";
import {TOOL_TIP_MESSAGES} from "../../utils/utils";

export default function Register({ navigate, setLoggedIn, setTooltipSettings}) {
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
                    .catch(() => {
                            setTooltipSettings({isOpen: true, status: false, message: TOOL_TIP_MESSAGES.duplicate_data_error})
                        }
                    )
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
