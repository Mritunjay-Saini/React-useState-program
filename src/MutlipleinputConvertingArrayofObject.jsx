import React, { useState } from 'react';

const MultipleInputsConvertingInArrayOfObjects = () => {
  const [name, setName] = useState('');
  const [fathername, setFathername] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [mobilenumber, setMobilenumber] = useState(0);
  const [formDataArray, setFormDataArray] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      name,
      fathername,
      age,
      country,
      mobilenumber,
    };

    setFormDataArray([...formDataArray, newEntry]);

    // Clear the inputs
    setName('');
    setFathername('');
    setAge(0);
    setCountry('');
    setMobilenumber(0);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User Information Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={fathername}
          onChange={(e) => setFathername(e.target.value)}
          placeholder="Father's Name"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          placeholder="Age"
        />
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
        />
        <input
          type="number"
          value={mobilenumber}
          onChange={(e) => setMobilenumber(Number(e.target.value))}
          placeholder="Mobile Number"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

     
      </div>
  );
};

export default MultipleInputsConvertingInArrayOfObjects;
