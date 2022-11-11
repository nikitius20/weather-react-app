import React, { useEffect, useState } from "react";

function MainBody(){
    const [weather,setWeather] = useState('')
    const [input,setInput] = useState('kyiv')
    useEffect(()=>{
        fetchTheWeather()
    },[])

    function fetchTheWeather(){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=58ea73b0187d156774e801919b60dde2&units=metric`)
        .then(response => response.json())
        .then(data => {
            setWeather(data.main.temp);
        })
    }

    function handleEnter(event){
        console.log(event)
        if (event.key === 'Enter') {
            console.log('do validate')
            fetchTheWeather()
        } 
    }

    return (
        <div>
            <input type="text" onChange={event=>setInput(event.target.value)} onKeyPress={handleEnter}/>
            <button onClick={fetchTheWeather}>See the weather</button>
            <p>{input}</p>
            <p>{weather}</p>
        </div>
    )
}

export default MainBody;