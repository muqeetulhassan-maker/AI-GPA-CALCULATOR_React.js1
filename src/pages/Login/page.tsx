import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    // You will add your 'findUser' logic here later
    navigate('/dashboard');
  };

  return (
    <div className="page flex-center mt-40">
      <div className="form-container">
        <div className="text-centered">
          <h2>Welcome Back</h2>
          <p>Sign in to access your GPA dashboard</p>
        </div>

        {/* Alert placeholders */}
        <div id="login-alert" className="alert alert-error"></div>
        <div id="login-success" className="alert alert-success"></div>

        <form id="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="you@university.edu" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
            />
          </div>
          <div className="mt-20">
            <button type="submit" className="lg-button w-full flex-center">
              Sign In
            </button>
          </div>
        </form>

        <div className="divider"></div>
        <p className="text-center font-size-0-9rem">
          Don't have an account? 
          <Link to="/signup" className="font-weight-600"> Create one →</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;