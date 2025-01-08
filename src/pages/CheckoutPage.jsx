import React from "react";
import { useCart } from "../context/CartContext";

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center p-4 border rounded shadow"
          >
            <div>
              <h4 className="font-medium">{item.name}</h4>
              <p>
                Price: ₹{item.price} x {item.quantity}
              </p>
              <p>Total: ₹{item.price * item.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <p className="font-bold text-lg mb-2">Total Amount: ₹{totalAmount}</p>
        <div className="flex justify-between items-center">
          <select className="select select-primary">
            <option disabled selected>
              Select Payment Method
            </option>
            <option value="credit_card">Credit Card</option>
            <option value="debit_card">Debit Card</option>
            <option value="upi">UPI</option>
            <option value="cod">Cash on Delivery</option>
          </select>
          <button className="btn btn-primary btn-lg" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
