import NewFridgeItemForm from "./forms/NewFridgeItemForm";
import "./ProfileDetail.css"
import recipeAPISearch from "./helpers/searchRecipesAPI";
import { useState, useContext } from "react";
import RecipeList from "./RecipeList";
import IngrediantListItem from "./IngrediantListItem";
import UserContext from "./UserContext";
import handleFridgeSearch from "./helpers/handleFridgeSearch";
import SavedRecipeItem from "./SavedRecipe";

const ProfileDetail = ({u}) => {
    const {userData, setFridgeItems} = useContext(UserContext)
    const [searchedRecipes, setSearchedRecipes] = useState(null)
    const [ingrediants, setIngrediants] = useState(u.ingrediants)
    console.log("here our saved recipes", u.recipes)

    return(
        <>
        <p>{u.username}</p>
        <p>{u.firstName} {u.lastName}</p>
        <p>{u.email}</p>
        <img className="profile-img" src={u.profile_img}></img>
        <h1 className="amatic-header">Add items to your fridge</h1>
        <button onClick={() => handleFridgeSearch(u, setSearchedRecipes, recipeAPISearch)}>Search recipes for your ingrediants</button>
        {searchedRecipes !== null?<RecipeList searchedRecipes={searchedRecipes}/>:<p>No search yet</p>} 
        <NewFridgeItemForm u={u} setFridgeItems={setFridgeItems}/> 
        <ul className="list-group">
            {u.ingrediants.map(i =>
            <IngrediantListItem i={i} u={u} setIngrediants={setIngrediants}/>)}
        </ul> 
        <h1 className="amatic-header">Favourites</h1>
        <ul className="list-group">
            {u.recipes.length < 1? <p>No favourites saved yet</p>:null}
            {u.recipes.map(r =>
            <SavedRecipeItem recipeData={r} user={u} fav={true}/>) 
}
   
        </ul>
        </>
    )
}

export default ProfileDetail;