
import { useEffect, useLayoutEffect, useState } from "react";
import { QuotesArray } from "../models/QuotesArray";
import {GetQuotesData} from "../services/GetQuotesData"

export function QuotesDisplay() {
    const [quotes, setQuotes] = useState<QuotesArray[]>();
    useEffect(() => {
        GetQuotesData().then(data => setQuotes(data));

    }, []);

 
    let displayQuotes = quotes?.map((quote) => 
        <ul>
            <li>{quote.text}</li>
        <li>{quote.author}</li>
        </ul>

    );
    
    return (
        <div>
        {displayQuotes}
         </div>
    
)
        }  




