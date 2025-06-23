import React, { useRef } from 'react'

export const MainFocus = () => {
    const InputRef = useRef(null); 

    const handleFoucs=()=>{
        InputRef.current.focus();
    }
  return (
    <div>
        <input type='text' ref={InputRef}/>
        <button onClick={handleFoucs}>Show Focus</button>
    </div>
  );
}
