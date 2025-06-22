import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState("");

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Current Count: {count}</h1>

      <button
        onClick={() => setCount(count + 1)}
    
      >
        Increase
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ margin: '5px' }}
      >
        Decrease
      </button>

      <button
        onClick={() => setCount(0)}
        style={{ margin: '5px' }}
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
