import { Item } from "../models/Item"


interface IMenuItemProps {
        item: Item

}
export function MenuItem(props:IMenuItemProps) {
  //destructure
     let { item } = props;

    function displayBoolean(value: boolean) {
        return value ? "Yes" : "No"
    }
    return
    (<div className="MenuItem">
        <h3>{item.name}</h3>
        <ul>
            <li>Price: {item.price}</li>
            <li><Description: {item.Description}</li>
            <li>Calories: {item.Calories}</li>
            <li>Vegetarian?:{displayBoolean(item.vegetarian)} </li>
        </ul>


    </div>)
}