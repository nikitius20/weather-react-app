import React, { useState } from "react";
import InputComponent from "./InputComponent";
import InfoComponent from "./InfoComponent";
import { Context } from "./Context";

function MainBody(){
    const [weather,setWeather] = useState('')
    
    return (
        <div>
            <Context.Provider value={[weather,setWeather]}>
                <InputComponent />
                <InfoComponent />
            </Context.Provider>
        </div>
    )
}

export default MainBody;