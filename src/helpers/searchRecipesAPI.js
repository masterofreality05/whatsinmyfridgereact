import axios from "axios"

/**Used to request our Edamam external API
 * Will search by ingrediant individual or multiple
 * If Ingrediants is an array will add as a query param to our get request
 * If ingrediants is a string, will render an array using split
 */
const recipeAPISearch = async (ingrediants) => {
  var params = new URLSearchParams();
  params.append("type", "public")
  params.append("app_id", "2e6e8f4a")
  params.append("app_key", "83f73c85ba0e67cee7621afc8e18c060")
   
    let searchURL = 'https://api.edamam.com/api/recipes/v2'
    if(Array.isArray(ingrediants)){
       params.append("q", ingrediants)
    } else  {
        params.append("q", ingrediants.split(" "))
    }
            let recipes = await axios(searchURL, {
                method: 'GET',
                mode: 'cors',
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json',
                },
                params,
                withCredentials: true,
                credentials: 'same-origin',
              })
              if(recipes.data.hits.length < 1){
                return []
              }
              return recipes.data.hits
              }
              
export default recipeAPISearch;