import React, { useRef, useState } from 'react'
import { useEffect } from 'react';


const StorePreviousCount = () => {
    const[count,setcount]=useState(0);
    const prevCount=useRef();
    useEffect(()=>{
        prevCount.current=count;
    },[count])
  return (
    <div>StorePreviousCount
        <h2>Current Value : {count} </h2>
        <h2>Previous Count Value :{prevCount.current}</h2>
        <button onClick={()=>setcount(c=>c+1)}>Increment Value</button>
    </div>
  )
}
export default StorePreviousCount
