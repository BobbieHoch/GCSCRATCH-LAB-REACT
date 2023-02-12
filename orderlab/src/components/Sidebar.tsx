import { useContext } from "react";
import OrderContext from "../context/OrderContext";
export function Sidebar() {
    //DESTRUCTURING WITH order pulled out USECONTEXT HOOK- CREATES duplicate in each component
    const { order } = useContext(OrderContext);


    return (
        
        <div className="Sidebar">
              <p className="total">Total: ${ order.reduce((prev, item) => prev + item.price, 0)}</p>
        <ol>
            {order.map((item) =><li key={item.id}>{item.name}  ${item.price}</li>)}
        </ol>
          
         </div>

    )
    
}