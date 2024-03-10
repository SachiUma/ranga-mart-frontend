import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.status === 200) {
                // Authentication successful, redirect to dashboard or other page
                console.log("Login successful");
                history.push("/orderDetails");
            } else {
                // Authentication failed, display error message
                console.error("Login failed");
                alert("Invalid username or password. Please try again.");
            }
        } catch (error) {
            console.error("Error occurred while logging in:", error);
            alert("An error occurred while logging in. Please try again later.");
        }
    };

    return (
        <div className="container" >
            <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", borderRadius: "5px" }}>
                <h1 className="display-6 fw-bolder text-center">Login</h1>
                <hr />
            </div>
            <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px" }}>
                <form onSubmit={handleSubmit}>
                <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", borderRadius: "5px" }}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} style={{ width: "100%", padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }} />
                    </div>
                    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", borderRadius: "5px" }}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} style={{ width: "100%", padding: "10px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "5px" }} />
                    </div>
                    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", borderRadius: "5px" }}>

                    <button type="submit" style={{ width: "100%", padding: "10px", fontSize: "16px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>Login</button>
                </div>  
                </form>
                <p style={{ marginTop: "15px", textAlign: "center" }}>Don't have an account? <NavLink to="/register" style={{ color: "#007bff", textDecoration: "none" }}>Register here</NavLink>.</p>

            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
           
        

        </div>
    );
};

export default Login;
