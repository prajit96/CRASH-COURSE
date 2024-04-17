
import React, { useState, useRef } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');

  const emailRef = useRef(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = emailRef.current.value;
    console.log('Name:', name);
    console.log('Email:', userEmail);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />

      <label>
        Email:
        <input type="text" ref={emailRef} />
      </label>
      <br />

      {name.length < 3 && <span style={{ color: 'red' }}>Name must be at least 3 characters long</span>}
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
