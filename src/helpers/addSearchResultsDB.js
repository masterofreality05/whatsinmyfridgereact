    import axios from "axios"
    import { baseURL } from "./config"

    const addSearchedToDB = async(recipeData) => {
       await axios.post(`${baseURL}recipes/add`, recipeData
        )
    }
    
    export default addSearchedToDB;