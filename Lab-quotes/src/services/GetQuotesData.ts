import axios from 'axios';
import { QuotesArray } from '../models/QuotesArray';

export function GetQuotesData(): Promise<QuotesArray[]> {
    return axios.get<QuotesArray[]>('https://grandcircusco.github.io/demo-apis/quotes.json')
        .then((response) => response.data)
    // .catch((error)=> console.log(error)
}