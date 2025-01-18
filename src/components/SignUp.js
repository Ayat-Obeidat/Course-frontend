import React, { useState } from 'react';
import axios from 'axios';
import './SignUp.css'; // استيراد ملف CSS

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Student');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/auth/signup', { email, password, role });
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="Student">Student</option>
        <option value="Instructor">Instructor</option>
      </select>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
