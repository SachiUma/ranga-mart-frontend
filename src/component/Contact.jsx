
import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            // Make a POST request to your backend API endpoint
            await axios.post('/api/contact', formData);

            // Show success message to the user
            alert('Message sent successfully!');

            // Reset form fields after successful submission
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Failed to send message. Please try again later.');
        }
    };
    
    
    return (
        <section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Contact Us</h1>
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-info">
                            <p>Feel free to reach out to us anytime! At Ranga Mart, we are dedicated to providing excellent service and support to our valued customers.</p>
                            <p>Whether you have a question about our products, need assistance with an order, or simply want to say hello, we're here to help.</p>
                            <ul className="contact-list">
                                <li>
                                    <span>50B, Grace Pieris Mawathe, Panadura, Sri Lanka</span>
                                </li>
                                <li>
                                    <span>info@example.com</span>
                                </li>
                                <li>
                                    <span>+94 456 7890</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
                            </div>
                            <hr/>
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
                            </div>
                            <hr/>

                            <div className="form-group">
                                <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} rows="5" placeholder="Your Message"></textarea>
                            </div>
                            <br/>

                            <button type="submit" className="btn btn-dark">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;