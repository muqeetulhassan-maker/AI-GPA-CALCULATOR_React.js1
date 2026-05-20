import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    university: '',
    program: '',
    password: '',
    confirm: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirm) {
      alert("Passwords do not match!");
      return;
    }
    console.log("User Registered:", formData);
    navigate('/dashboard');
  };

  return (
    <div className="page flex-center mt-36">
      <div className="form-container" style={{ maxWidth: '520px' }}>
        <div className="text-centered">
          <h2>Create Account</h2>
          <p>Start tracking your academic performance today</p>
        </div>

        <div id="reg-alert" className="alert alert-error"></div>
        <div id="reg-success" className="alert alert-success"></div>

        <form id="signup-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullname">Full Name</label>
            <input 
              type="text" id="fullname" placeholder="Jane Smith" required 
              value={formData.fullname} onChange={handleChange} 
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" id="email" placeholder="you@university.edu" required 
              value={formData.email} onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="university">University / Institution</label>
            <input 
              type="text" id="university" placeholder="MIT, Harvard, ..." 
              value={formData.university} onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="program">Program / Major</label>
            <input 
              type="text" id="program" placeholder="Computer Science" 
              value={formData.program} onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input 
              type="password" id="password" placeholder="Min 6 characters" required 
              value={formData.password} onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="confirm">Confirm Password</label>
            <input 
              type="password" id="confirm" placeholder="Repeat password" required 
              value={formData.confirm} onChange={handleChange}
            />
          </div>
          <div className="mt-20">
            <button type="submit" className="lg-button w-full flex-center">
              Create Account
            </button>
          </div>
        </form>

        <div className="divider"></div>
        <p className="text-center font-size-0-9rem">
          Already have an account?
          <Link to="/login" className="font-weight-600"> Sign in →</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;