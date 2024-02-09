import axios from "axios";
import { baseURL } from "./config";

const addRecipeFavourite = async(recipe, userID) => {
    if(recipe.label){
        let recipeInDB = await axios.get(`${baseURL}recipes/${recipe.label}`)
        recipe = recipeInDB.data.id  
    } else {
        recipe = recipe.id
    }
    if(userID.id === undefined){
        let user = await axios.get(`${baseURL}users/${userID.user.username}`)
        userID = user.data.user.id
    } else {
        userID = userID.id
    }

    await axios.post(`${baseURL}users/adduserrecipe`,
    {
        recipe,
        userID
    })
}

export default addRecipeFavourite;