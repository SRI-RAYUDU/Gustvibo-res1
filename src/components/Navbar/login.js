import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from './firebaseconfi';
import { collection, addDoc } from 'firebase/firestore';
import './login.css';
import ThankYou from './thankyou';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
// debugger;
const handleSubmit = async (e) => {
    e.preventDefault();
    
      navigate('/thank-you');
    
} 
  return (
    <div className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <h2>Book a Table</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
