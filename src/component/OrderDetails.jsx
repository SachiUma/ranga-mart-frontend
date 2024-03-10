// OrderDetails.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderDetails = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders data from backend when component mounts
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:3001/api/orders');
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const handleSendOrder = async (orderId) => {
        try {
            await axios.put(`http://localhost:3001/api/orders/${orderId}`, { status: 'Delivered' });
            // Update orders state after changing the status
            fetchOrders();
            alert('Order has been marked as Delivered.');
        } catch (error) {
            console.error('Error sending order:', error);
            alert('Error sending order. Please try again later.');
        }
    };

    return (
        <div>
            <h1 className="display-6 fw-bolder text-center">Order Details</h1>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Contact No</th>
                        <th>Description</th>
                        <th>Total Payment</th>
                        <th>Payment Method</th>
                        <th>Status</th>
                        <th>Actions</th> {/* Add column for actions */}
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                                                <tr key={order.id} style={{ backgroundColor: order.status === 'Delivered' ? '#c8e6c9' : order.status === 'Pending' ? '#ffcdd2' : 'inherit' }}>

                            <td>{order.id}</td>
                            <td>{order.name}</td>
                            <td>{order.address}</td>
                            <td>{order.contact_no}</td>
                            <td>{order.description}</td>
                            <td>{order.total_payment}</td>
                            <td>{order.payment_method}</td>
                            <td>{order.status}</td>
                            <td>
                                {/* {order.status === 'Pending' && ( */}
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleSendOrder(order.id)}
                                >
                                    Send Order
                                </button>
                                {/* )} */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderDetails;
