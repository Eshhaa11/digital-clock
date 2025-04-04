import { useState, useEffect } from "react";
import './Clock.css'

function Clock () {
    const [clock, setClock] = useState("00:00:00")
     return (
        useEffect(() => {
         const interval = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString());
         }, 1000);
         
            
         }, interval);
        })
        <h1>DIGITAL CLOCK</h1>
     )
}