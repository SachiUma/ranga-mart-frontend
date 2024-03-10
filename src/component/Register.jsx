import React, { useState } from "react";
import axios from 'axios';

const Register = () => {
  // State for form fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
        // Send registration data to backend server
        await axios.post("http://localhost:3001/api/register", {
            username,
            email,
            password
        });
        // Registration successful
        alert("Registration successful!");
    } catch (error) {
        console.error("Error registering user:", error);
        alert("Error registering user. Please try again later.");
    }
};

  return (
    <div className="container">
      <div className="row">
      <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", borderRadius: "5px" }}>
          <h1 className="display-6 fw-bolder text-center">Register</h1>
          <hr />
        </div>
      </div>
      <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>

      <form onSubmit={handleSubmit}>
            <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", borderRadius: "5px" }}>
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", borderRadius: "5px" }}>
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", borderRadius: "5px" }}>
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", borderRadius: "5px" }}>
        <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
      
      </div>
      <br />
            <br />
            <br />
            <br />
            <br />
            <br />
         
    </div>
    
  );
};

export default Register;