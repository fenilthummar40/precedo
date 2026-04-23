import {useState} from "react";
import LoginModal from "../Modal/LoginModal.jsx";

function Login() {
    const [login, setLogin] = useState(false);

    return (
        <>
            <button onClick={() => setLogin(true)} className="text-white hover:text-gray-300 md:text-xs lg:text-lg cursor-pointer">Log in</button>
            <LoginModal login={login} setLogin={setLogin}/>
        </>
    );
}

export default Login;