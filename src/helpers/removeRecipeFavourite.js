import axios from "axios";
import { baseURL } from "./config";

/**Takes recipe items and logged in user to create a relation between user and recipe
 * Storing the recipe in the user favourites*/
const removeRecipeFavourite = async(recipe, userID) => {

  
    if(userID.id === undefined){
        let user = await axios.get(`${baseURL}users/${userID.user.username}`)
        userID = user.data.user.id
    } else {
        userID = userID.id
    }
   let deleted = await axios.post(`${baseURL}users/removerrecipe`,
    {
        recipe,
        userID
    })
    return deleted
}

export default removeRecipeFavourite;