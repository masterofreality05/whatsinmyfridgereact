
import { useEffect,  useContext, useState } from "react"
import NewRecipeForm from "./forms/CreateNewRecipeForm"
import SavedRecipeItem from "./SavedRecipe"
import AppContext from "./AppContext"
import "./RecipePage.css"
import axios from "axios"
import { baseURL } from "./helpers/config"

const RecipePage = () => {
    let {user} = useContext(AppContext)
    let [recipesInDB, setRecipesInDb] = useState([])
    console.log(recipesInDB)
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

    const alphabetize = (array, letter) => {
        setRecipesInDb(array.filter((recipe) => recipe.label[0] === letter))
    }
   
    useEffect(() => {
        async function getRecipes(){
          let recipes = await axios.get(`${baseURL}recipes`)
          setRecipesInDb(recipes.data)
    }
    getRecipes()} 
    ,[])

    return(
        <>
        {alphabet.map(a =>
            <li className="alphabet-letter"><button onClick={() => {alphabetize(recipesInDB,a)}}>{a}</button></li>)}
          <ul>
          {recipesInDB.map(r => 
          <li className="saved-recipe"><SavedRecipeItem recipeData={r} user={user}/></li>
            )} 
         </ul> 
         {!user === null?<NewRecipeForm/>:<p>You must be logged in to create a new recipe</p> }
        </>
    )
}
export default RecipePage;