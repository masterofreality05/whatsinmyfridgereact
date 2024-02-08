import axios from "axios"
import { baseURL } from "./config";

const removeFridgeIngrediant = async (ingrediantID, userID) => {
    let removedIngrediant = await axios.post(`${baseURL}users/removeingrediant`, {
        ingrediantID,
        userID
    });
    return removedIngrediant
}

export default removeFridgeIngrediant;