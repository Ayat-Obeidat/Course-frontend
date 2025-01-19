import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // لاستيراد useNavigate
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // إنشاء دالة التنقل

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleSignUpClick = () => {
    navigate("/signup"); // الانتقال إلى صفحة التسجيل
  };

  const handleLoginClick = () => {
    navigate("/course-creation"); // الانتقال إلى صفحة التسجيل
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
      <button type="submit" onClick={handleLoginClick}>
        Login
      </button>
      <br />
      <hr />
      <button
        type="button"
        className="signup-button"
        onClick={handleSignUpClick}
      >
        Sign Up
      </button>
    </form>
  );
};

export default Login;
