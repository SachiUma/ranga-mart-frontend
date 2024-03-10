import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Cart = () => {

    const history = useHistory(); // Initialize useHistory hook

    // Retrieve cart items from Redux store
    const cartItems = useSelector(state => state.handleCart);

    // Function to handle button clicks for adding or removing items from the cart
    const handleButton = (product) => {
        // Implement your logic here
        console.log("Button clicked for product:", product);
    };

    // Function to handle order confirmation
    const handleOrderConfirmation = () => {
        // Implement your order confirmation logic here
        console.log("Order confirmed!");
        // For example, you can dispatch an action to clear the cart after confirming the order
        // Navigate to payment details page
        history.push("/payment");
    };


    return (
        <div className="container py-5">
            <h2 className="text-center mb-5">Shopping Cart</h2>
            {cartItems.map(product => (
                <div key={product.id} className="row mb-3">
                    <div className="col-md-4">
                        <img src={product.image} alt={product.title} height="200px" width="180px" />
                    </div>
                    <div className="col-md-8">
                        <h3>{product.title}</h3>
                        <p>
                            {product.qty} X ${product.price} = ${product.qty * product.price}
                        </p>

                        {/* Assuming you have defined handleButton function */}
                        <button className="btn btn-outline-dark me-2" onClick={() => handleButton(product)}>
                            <i className="fa fa-minus"></i>
                        </button>

                        <button className="btn btn-outline-dark me-4" onClick={() => handleButton(product)}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>

                    {/* Button to confirm the order */}
                </div>



            ))}

            <div className="text-center">
                <button className="btn btn-dark" onClick={handleOrderConfirmation}>Confirm Order</button>
            </div>
        </div>
    );
}

export default Cart;