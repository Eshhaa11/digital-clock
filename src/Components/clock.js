import { useState, useEffect } from "react";
import './Clock.css'

function Clock () {
    const [clock, setClock] = useState("00:00:00")
        useEffect(() => {
         const interval = setInterval(() => {
            const now = new Date();
            setTime(now.toLocaleTimeString());
         }, 1000);

         return () => clearInterval(interval);
      }, []);

        return 
         <h1>DIGITAL CLOCK</h1>
     )
}