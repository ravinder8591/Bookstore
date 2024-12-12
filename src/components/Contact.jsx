import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [emailId, setEmailId] = useState('');
  const [qu, setQu] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4001/send-email', {
        name,
        rollNo,
        contactNo,
        emailId,
        qu,
      });

      setMessage(response.data.message);
      handleClear();
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('Error sending email.');
    }
  };

  const handleClear = () => {
    setName('');
    setRollNo('');
    setContactNo('');
    setEmailId('');
    setMessage('');
    setQu('');
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
        <label>
          Question:
          <input type="text" value={qu} onChange={(e) => setQu(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleClear}>Clear</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Contact;
