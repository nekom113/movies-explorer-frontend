import './Login.css'
import RegLoginUserForm from "../RegLoginUserForm/RegLoginUserForm";

export default function Login() {
    return (
        <RegLoginUserForm isRegistrationForm={false}/>
    )
}
