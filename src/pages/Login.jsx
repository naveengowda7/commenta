import React, { useState } from "react";
import "./Login.css";
import loginImage from "./Selection.png"; // adjust path if needed

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // connect to backend here
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Image Section */}
        <div className="login-image">
          <img src={loginImage} alt="Login Illustration" />
        </div>

        {/* Form Section */}
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Email / Username</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn">Submit</button>
          </form>
          <p>
            Forgot password? <a href="/forgot">Click here</a>
          </p>
          <p>
            Don't have an account? <a href="/signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
