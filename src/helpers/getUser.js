import axios from "axios";
import { baseURL } from "./config";

async function getUser(user, setUserData){
        const config = { headers: { Authorization: `Bearer ${user.token}`}};
        let res = await axios.get(`${baseURL}${user.username}`, config)
        setUserData(res.data.user)
        return res.data
}

export default getUser;