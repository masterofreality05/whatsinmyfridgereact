import { useContext } from "react"
import AppContext from "./AppContext"
import {useNavigate } from "react-router-dom";

/**Will updated logged in user state to null and navigate back to the homepage */
const Logout = () => {
    let {setUser} = useContext(AppContext) 
    const navigate = useNavigate();
    setUser(null)
    navigate("/")
}

export default Logout;