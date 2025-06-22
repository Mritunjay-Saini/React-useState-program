import React, { useEffect, useState } from 'react';

const FormAutoSaver = () => {
  const [form, setForm] = useState({ name: '', email: '' });


  useEffect(() => {
    const saved = localStorage.getItem('formData');
    if (saved) {
      setForm(JSON.parse(saved));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(form));
  }, [form]);

  return (
    <div className="p-4">
      <input type="text" placeholder="Enter your Name" className="bg-slate-200 p-2 mb-2 block" value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}/>

      <input type="email" placeholder="Enter your Email" className="bg-slate-200 p-2 block" value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}/>
    </div>
  );
};

export default FormAutoSaver;
