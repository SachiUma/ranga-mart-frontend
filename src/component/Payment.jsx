import React, { useState } from "react";
import { useSelector } from "react-redux";
import OrderDetails from "./OrderDetails";
import { useHistory } from "react-router-dom";
import axios from 'axios';


const Payment = () => {
    const cartItems = useSelector(state => state.handleCart);

    const history = useHistory();

    const handlePaymentConfirmation = async () => {
        // Prepare order details
        const orderDetails = {
          name,
          address,
          contactNo,
          email, // Include email in the order details
          cartItems,
          totalPrice,
          paymentMethod,
        };
        try {
          // Store order details
          await axios.post("http://localhost:3001/api/orders", orderDetails);
          // Show alert on successful order placement
          alert("Order placed successfully!");
          // Redirect to home page or any other page
          history.push("/");
        } catch (error) {
          console.error("Error placing order:", error);
          alert("Error placing order. Please try again later.");
        }
      };
        // Function to calculate total price of the cart
        const calculateTotalPrice = () => {
            return cartItems.reduce((total, item) => total + item.qty * item.price, 0);
        };

    // State for personal information
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [contactNo, setContactNo] = useState("");
    const [email, setEmail] = useState("");

    // State for payment method
    const [paymentMethod, setPaymentMethod] = useState("");
    const [onlinePaymentMethod, setOnlinePaymentMethod] = useState("");

    // Function to handle payment method selection
    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };

    // Function to handle online payment method selection
    const handleOnlinePaymentMethodChange = (event) => {
        setOnlinePaymentMethod(event.target.value);
    };

    // Calculate total price of the cart
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Process the payment or save the order
        console.log("Name:", name);
        console.log("Address:", address);
        console.log("Contact No:", contactNo);
        console.log("Description:", cartItems);

        console.log("Payment Method:", paymentMethod);
        if (paymentMethod === "online_payment") {
            console.log("Online Payment Method:", onlinePaymentMethod);
        }
        console.log("Total Price:", totalPrice);
        // Additional logic here for payment processing or order saving
    };

    return (
        <div className="container my-5 py-5">
            <h1 className="display-6 fw-bolder text-center">Payment Details</h1>
            <hr />
            <h2>Order Summary:</h2>
            <div className="mb-4">
                {cartItems.map((product) => (
                    <div key={product.id} className="row mb-3">
                        <div className="col-md-4">
                            <img src={product.image} alt={product.title} height="200px" width="180px" />
                        </div>
                        <div className="col-md-8">
                            <h3>{product.title}</h3>
                            <p>
                                {product.qty} X ${product.price} = ${product.qty * product.price}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <h2>Total Payment: ${totalPrice.toFixed(2)}</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <h2>Personal Information:</h2>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                        Address:
                    </label>
                    <input
                        type="text"
                        id="address"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="contactNo" className="form-label">
                        Contact No:
                    </label>
                    <input
                        type="text"
                        id="contactNo"
                        className="form-control"
                        value={contactNo}
                        onChange={(e) => setContactNo(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email Address:
                    </label>
                    <input
                        type="text"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <h2>Payment Method:</h2>
                <div className="mb-3">
                    <select
                        className="form-select"
                        value={paymentMethod}
                        onChange={handlePaymentMethodChange}
                        required
                    >
                        <option value="">Select Payment Method</option>
                        <option value="cash_on_delivery">Cash on Delivery</option>
                        <option value="online_payment">Online Payment</option>
                    </select>
                </div>
                {paymentMethod === "online_payment" && (
                    <div className="mb-3">
                        <select
                            className="form-select"
                            value={onlinePaymentMethod}
                            onChange={handleOnlinePaymentMethodChange}
                            required
                        >
                            <option value="">Select Online Payment Method</option>
                            <option value="mastercard">MasterCard</option>
                            <option value="visacard">Visa Card</option>
                        </select>
                    </div>
                )}
                <div className="text-center mt-4">
                    <button className="btn btn-dark" onClick={handlePaymentConfirmation}>
                        Confirm Payment Details
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Payment;
