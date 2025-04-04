import React, { useState, useEffect } from 'react';

function Clock() { 
  const [time, setTime] = useState("00:00:00");

  useEffect(() => { 
    const interval = setInterval(() => { 
      const now = new Date(); 
      setTime(now.toLocaleTimeString()); 
    }, 1000);

    return () => clearInterval(interval);
  }, []); 

  return <h1>{time}</h1>; 
}

export default Clock;
