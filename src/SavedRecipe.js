
import "./RecipeListItem.css"
import addRecipeFavourite from "./helpers/AddRecipeFavourite";
import removeRecipeFavourite from "./helpers/removeRecipeFavourite";

const SavedRecipeItem = ({recipeData, user, fav}) => {  
    let button;

    if(fav === true){
        button =  <button className="remove" onClick={() => {removeRecipeFavourite(recipeData.id, user)}}>Remove from favorites</button>
    } else {
        <button className="remove" onClick={() => {addRecipeFavourite(recipeData.id, user)}}>Add to favourites</button>
    }
   
   
    return(
        <>
        <li>
        <div className="recipe-list-item">
        <h1>{recipeData.label}</h1>
        <img src={recipeData.image_url}></img>
        <br></br>
        <a href={recipeData.link}>visit this recipe</a>
        <br></br>
        {user?button:<button>Login to bookmark</button>}
        </div>
        </li>
        </>
    )
}

export default SavedRecipeItem;