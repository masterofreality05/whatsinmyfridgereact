import RegisterForm from "./forms/Registerform";
import LoginForm from "./forms/LoginForm";
import { useState } from "react";
import useToggle from "./helpers/useToggle";


const LoginOrRegister = () => {
    const [toggle, setToggle] = useToggle(false)

    return(
        <>
        <div className="login">
        <LoginForm/>
        </div>
        <div className="register">
            <br></br>
            <button onClick={setToggle}>Not yet signed up? Register here</button>
            {toggle &&(<RegisterForm/>)}
        </div>
        </>
    )
}
export default LoginOrRegister;