import { useEffect, useState } from "react";
import { Weather } from "../models/Weather";
import { GetWeatherData } from "../services/WeatherService";


export function WeatherForecast() {
    const [weather, setWeather] = useState<Weather>();
    //useEffect hook-BLANK ARRAY TO RUN ONCE BLANK ARRAY AS SECOND ARGUMENT
    //LIFECYCLE MOUNTS (STEP1) NOW HOOKS--
    useEffect(() => {
        //calls the api runs once when page first loads
        GetWeatherData().then(data => setWeather(data));
    }, []);
//dependency /choose how often it will render. [weather]
    useEffect(() => {
        console.log(weather);
        //example to debugging
    }, [weather]);

    
    //? nullable  display Periods displayed later in return
    let periods = weather?.properties.periods;
    let displayPeriods = periods?.map((period) =>
        <ul>
            {/* <li img src= period.icon}</li> */}
            <li>{period.name}</li>
            <li>{period.icon}</li>
            <li>{period.detailedForecast}</li>
            <li>{period.temperature}{period.temperatureUnit}</li>
        </ul>
        
    );
///
    return (
        <div className = "WeatherForecast">
            { weather !== undefined && <>{displayPeriods}</>}

        </div>
    )
}