import OrderContext from "../context/OrderContext"
import { useContext } from "react";

export function Header() {
    const { order } = useContext(OrderContext);


    return (<div className="Header">
        
        <h1>Sunny Side Up</h1>
        <p>Order Count: {order.length}</p>
        


    </div>)
    
}