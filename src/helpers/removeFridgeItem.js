import axios from "axios"
import { baseURL } from "./config";

/**Used to remove user-ingrediant relation */
const removeFridgeIngrediant = async (ingrediantID, userID) => {
    let removedIngrediant = await axios.post(`${baseURL}users/removeingrediant`, {
        ingrediantID,
        userID
    });
    return removedIngrediant
}

export default removeFridgeIngrediant;