    import axios from "axios"
    import { baseURL } from "./config"

    /**Takes the recipe object returned from Edamam API search and stores in the database via our
     * Recipes/add POST route. 
     */
    const addSearchedToDB = async(recipeData) => {
       await axios.post(`${baseURL}recipes/add`, recipeData
        )
    }
    
    export default addSearchedToDB;