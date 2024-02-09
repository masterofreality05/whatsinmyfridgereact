import axios from "axios";
import { baseURL } from "./config";

/**Takes logged in user data and uses it to retrieve extra user data stored in the db */
async function getUser(user, setUserData){
        const config = { headers: { Authorization: `Bearer ${user.token}`}};
        let res = await axios.get(`${baseURL}users/${user.username}`, config)
        setUserData(res.data.user)
        return res.data
}

export default getUser;