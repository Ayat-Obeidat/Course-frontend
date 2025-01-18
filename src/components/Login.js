import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // استيراد ملف CSS

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('http://localhost:5000/auth/login', { email, password });
    localStorage.setItem('token', data.token);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h1>Login</h1>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
