import React, { useState } from 'react';

const Greeting = () => {
  const [inputText, setInputText] = useState("");

  return (
    <div style={{ padding: '20px' }}>
      <label>Enter a number:</label>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ marginLeft: '10px', padding: '5px' }}
      />
      <p>Hello, {inputText}</p>
    </div>
  );
};

export default Greeting;
