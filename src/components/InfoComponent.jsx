import React,{useContext}from "react";
import { Context } from "./Context";

function InfoComponent(){    
    const [weather,setWeather] = useContext(Context);
    return(
        <div>
            {weather? weather.temp : 'Something wrong'}
        </div>
    )
}

export default InfoComponent