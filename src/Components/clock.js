import React, { useState, useEffect } from "react";
import './Clock.css'

function Clock() {
  const [time, setTime] = useState("00:00:00");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <h1> DIGITAL CLOCK</h1>; 
    <h2>{time}</h2>
    </div>


  )  
}

export default Clock;