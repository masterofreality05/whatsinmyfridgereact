
import { useEffect,  useContext, useState } from "react"
import NewRecipeForm from "./forms/CreateNewRecipeForm"
import SavedRecipeItem from "./SavedRecipe"
import AppContext from "./AppContext"
import "./RecipePage.css"
import axios from "axios"
import { baseURL } from "./helpers/config"
import { alphabet,  alphabetize } from "./helpers/Alphabet"

const RecipePage = () => {
    let {user} = useContext(AppContext)
    let [recipesInDB, setRecipesInDb] = useState([])
    let [recipesInDBCopy, setrecipesInDBCopy] = useState([])

    useEffect(() => {
        async function getRecipes(){
          let recipes = await axios.get(`${baseURL}recipes`)
          setRecipesInDb(recipes.data)
          setrecipesInDBCopy(recipes.data)
    }
    getRecipes()} 
    ,[])

    return(
        <>
        {alphabet.map(a =>
            <li className="alphabet-letter"><button onClick={() => {setRecipesInDb(alphabetize(recipesInDBCopy,a))}}>{a}</button></li>)}
          <ul>
          {recipesInDB.map(r => 
          <li className="saved-recipe"><SavedRecipeItem recipeData={r} user={user}/></li>
            )} 
         </ul> 
         {!user === null?<NewRecipeForm/>:<p>You must be logged in to view saved recipes</p> }
        </>
    )
}
export default RecipePage;