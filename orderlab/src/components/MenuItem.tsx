import { Item } from "../models/Item"
import { useContext } from "react";
import OrderContext from "../context/OrderContext";

interface IMenuItemProps {
        item: Item

}
export function MenuItem(props:IMenuItemProps) {
  //destructure
     let { item } = props;


     //used to 
    
    const { addItem, removeItem } = useContext(OrderContext);

    function displayBoolean(value: boolean) {
        return value ? "Yes" : "No"
    }
    return (
        <div className="MenuItem">
        <h3>{item.name}</h3>
        <ul>
           
                 <li>Description: {item.description}</li>
                 <li>Calories: {item.calories}</li>
                <li>Vegetarian?: {displayBoolean(item.vegetarian)}</li>
                <li>Price: {item.price}</li>
        </ul>
        <button onClick={() => addItem(item)}>Add</button>
        <button onClick={() => removeItem(item.id)}>Remove</button>



        </div>
    )
 
}