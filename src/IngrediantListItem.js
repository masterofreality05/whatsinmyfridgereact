import "./IngrediantListItem.css"
import removeFridgeIngrediant from "./helpers/removeFridgeItem"
import axios from "axios"
import { useContext} from "react"
import UserContext from "./UserContext"
import { baseURL } from "./helpers/config"

const IngrediantListItem = ({i, u}) => {
    console.log(u)
    const {setFridgeItems} = useContext(UserContext)
    const handleDelete = (i, u) => {
        removeFridgeIngrediant(i, u)
        setFridgeItems(u.ingrediants)
    }
    const handleAdd = async(ingrediants, userID) => {
        await axios.post(
            `${baseURL}adduseringrediant`
            ,  
                {
                    ingrediants,
                    userID
                },    
        )  
        setFridgeItems(u.ingrediants)
    }

    let ingrediantList = [];
    for(let i of u.ingrediants){
        ingrediantList.push(i[0])
    }
    let userHas = ingrediantList.includes(i[0])
    let button;
    if(userHas){
        button = <li className="list-group-item amatic ingrediant-item">{i[0]}<button type="button" className="btn-close btn-margin" aria-label="Close" onClick={() => handleDelete(i[1], u.id)}></button></li>

    } else {
        button = <li className="list-group-item amatic ingrediant-item">{i[0]}<button type="button" className="btn-success btn-margin" aria-label="Close" onClick={() => {handleAdd(i[0], u.id)}}>Add to Fridge</button></li>
    }
    
    return(
        <>  
        {u.id === null? button: <li className="list-group-item amatic ingrediant-item">{i[0]}<button type="button" className="btn-success btn-margin" aria-label="Close" onClick={() => {}}>Login to add</button></li>}

        </>
    )
}


export default IngrediantListItem;