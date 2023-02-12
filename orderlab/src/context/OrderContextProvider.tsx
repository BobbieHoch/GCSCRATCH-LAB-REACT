import { ReactNode, useState } from "react";
import { Item } from "../models/Item";
import OrderContext from "./OrderContext";

interface IOrderContaxtProviderProps{
    children:ReactNode
}
//STATE FUNCTIONS DATA TO SHARE CHILDREN OPENS DOOR TO ALL IN APP.TSX

const OrderContextProvider = ({children}: IOrderContaxtProviderProps) => {
    const [order, setOrder] = useState<Item[]>([]);

    const addItem = (item: Item) => {
        setOrder([...order, item]);

    }
    const removeItem = (id: string) => {
        setOrder(order.filter((x) => x.id !== id));
    }

    return (<OrderContext.Provider value={{
        order: order,
        addItem: addItem,
        removeItem: removeItem
    }}>{children}</OrderContext.Provider>);
    
    

}
export default OrderContextProvider