import React, { useState, useEffect } from 'react';

const AutoRefreshClock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    console.log(interval);

    return () => clearInterval(interval); 
  });

  return (
    <div>
      <h1>{time}</h1>
    </div>
  );
};

export default AutoRefreshClock;
