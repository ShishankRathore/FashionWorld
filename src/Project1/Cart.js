import React from 'react';
import { NavLink } from 'react-router-dom';

const Cart = () => {
    // Example cart items. In a real application, these would come from state management or props.
    const cartItems = [
        { id: 1, name: 'Product 1', price: 29.99, quantity: 1 },
        { id: 2, name: 'Product 2', price: 19.99, quantity: 2 },
        { id: 3, name: 'Product 3', price: 39.99, quantity: 1 },
    ];

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return ( 
        <div className="container mt-5">
            <h1 className="text-center">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <div className="text-center">
                    <h2>Your cart is empty</h2>
                    <NavLink to="/Products" className="btn btn-primary">Go to Products</NavLink>
                </div>
            ) : (
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>${(item.price * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3 className="text-end">Total: ${totalPrice}</h3>
                    <div className="text-center">
                        <button className="btn btn-success">Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Cart;