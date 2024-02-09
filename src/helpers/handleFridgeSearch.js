const handleFridgeSearch = async(u, setSearchedRecipes, recipeAPISearch) => {
    let searching = [];
    for(let i of u.ingrediants){
        searching.push(i[0])
    }
    const recipes = await recipeAPISearch(searching.join(" "))
    setSearchedRecipes(recipes)
}

export default handleFridgeSearch;