import axios from "axios"

const recipeAPISearch = async (ingrediants) => {
  var params = new URLSearchParams();
  console.log("inside our recipe api search, ingrediants are", ingrediants)
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