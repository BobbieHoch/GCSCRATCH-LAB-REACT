import { createContext } from "react"; 
import { OrderContextModel } from "./OrderContextModel";


//CREATES MASTER CONTEXT
const defaultValue: OrderContextModel = {
    order: [],
    addItem: () => { },
    removeItem: () => {}
}
// Create Context
const OrderContext = createContext(defaultValue);

export default OrderContext;