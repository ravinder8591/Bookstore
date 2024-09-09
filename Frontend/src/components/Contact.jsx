import React, { useState } from 'react';

import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [emailId, setEmailId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, rollNo, contactNo, emailId });
  };

  const handleClear = () => {
    setName('');
    setRollNo('');
    setContactNo('');
    setEmailId('');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Student Form</h2>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Roll No.:
          <input
            type="number"
            maxLength={10}
            value={rollNo}
            onChange={(e) => setRollNo(e.target.value)}
            pattern="[0-9]{10}"
          />
        </label>
        <br />
        <label>
          Contact No.:
          <input
            type="tel"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            maxLength={10}
            pattern="[0-9]{10}"
          />
        </label>
        <br />
        <label>
          Email ID:
          <input type="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
    </div>
  );
}

export default Contact;