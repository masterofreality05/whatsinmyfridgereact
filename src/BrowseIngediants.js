import { useEffect, useState, useContext } from "react";
import IngrediantListItem from "./IngrediantListItem";
import axios from "axios";
import AppContext from "./AppContext";
import UserContext from "./UserContext";
import { baseURL } from "./helpers/config";
import { alphabet, alphabetizeIngrediant } from "./helpers/Alphabet";



const BrowseIngrediants = () => {
    const [allIngrediants, setAllIngrediants] = useState([])
    let {user} = useContext(AppContext)
    let [fridgeItems, setFridgeItems] = useState()
    const [userData, setUserData] = useState(null)

    console.log(allIngrediants)

    useEffect(() => {
        async function getAllIngrediants()  {
            let results = await axios.get(`${baseURL}ingrediants/`)
            let IngrediantList = []
            for(let row of results.data){
                IngrediantList.push([ row.item_name, row.id])
            }
            if(user !== null) {
                getUser(user, setUserData)}
            setAllIngrediants(IngrediantList)
        } 
            async function getUser(){
                if(user !== null){
                    const config = { headers: { Authorization: `Bearer ${user.token}`}};
                    let res = await axios.get(`${baseURL}users/${user.username}`, config)
                    setUserData(res.data.user)
                } else {
                    setUserData({ingrediants: []})
                }
            }  
        getUser()
        getAllIngrediants()
    },[fridgeItems]
    )

    return(
        <>
            {alphabet.map(a =>
            <li className="alphabet-letter"><button onClick={() => {setAllIngrediants(alphabetizeIngrediant(allIngrediants,a))}}>{a}</button></li>)}
          <ul className="list-group">
        <UserContext.Provider value={{userData, setFridgeItems}}>
        {allIngrediants.map(i => 
        <IngrediantListItem i={i} u={userData !== null? userData:{ingrediants:[]}}/>
        )}
         </UserContext.Provider>
        </ul>
        </>
    )
        }

export default BrowseIngrediants;