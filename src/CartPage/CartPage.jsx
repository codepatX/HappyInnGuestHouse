import React from 'react';
import './CartPage.css';

function CartPage({ cartItems }) {
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map(item => (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>${item.price.toFixed(2)}</td>
                                <td>{item.quantity}</td>
                                <td>${(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div className="cart-summary">
                <h2>Total: ${calculateTotal()}</h2>
                <button className="checkout-button">Proceed to Checkout</button>
            </div>
        </div>
    );
}

export default CartPage;
