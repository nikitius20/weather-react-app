import React, { useState, useContext, useEffect }  from "react";
import { Context } from "./Context";

function InputComponent(){
    
    const [input,setInput] = useState('Kyiv')
    const [weather,setWeather] = useContext(Context);

    useEffect(()=>{
        fetchTheWeather()
    },[])

    function fetchTheWeather(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=58ea73b0187d156774e801919b60dde2&units=metric`)
        .then(response => {
            if(!response.ok){
                throw new Error("error")
            }
            return response.json()
        })
        .then(data => {
            setWeather(data.main);
        }).catch(e=>{
            setWeather(null);
        })
    }

    function handleEnter(event){
        if (event.key === 'Enter') {
            console.log('do validate')
            fetchTheWeather()
        } 
    }
    return(
        <div>
            <input type="text" onChange={event=>setInput(event.target.value)} onKeyPress={handleEnter}/>
            <button onClick={fetchTheWeather}>See the weather</button>
        </div>
    )
}

export default InputComponent