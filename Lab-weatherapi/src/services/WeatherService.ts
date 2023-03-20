//DON'T REPEAT YOURSELF- EASIER TO REUSE IT
import axios from 'axios';

import { Weather } from "../models/Weather";

//PROMISE IS A CONTRACT TO GET BACK 'INFORMATION'-get IS THE HTTP VERB
export function GetWeatherData(): Promise<Weather> {
        
        return axios.get<Weather>('https://api.weather.gov/gridpoints/DTX/65,33/forecast')
        .then(response => response.data);
}