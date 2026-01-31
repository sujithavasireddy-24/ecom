import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.css";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/cart", {
          params: { userId }
        });

        if (res.status === 200) {
          setCartItems(res.data.items);
        }
        setLoading(false);
      } catch (err) {
        console.log("Error fetching cart", err);
        setLoading(false);
      }
    };

    if (userId) fetchCart();
  }, [userId]);

  // ❌ REMOVE ITEM (FRONTEND ONLY)
  const removeItem = (productId) => {
    const updatedCart = cartItems.filter(
      (item) => item.product._id !== productId
    );
    setCartItems(updatedCart);
  };

  // 💰 TOTAL COST
  const totalCost = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">My Cart 🛒</h2>

      {loading ? (
        <p>Loading...</p>
      ) : cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {cartItems.map((item) => (
              <div className="col" key={item._id}>
                <div className="card cart-card p-3 h-100">
                  <h5 className="cart-product-name">
                    {item.product.name}
                  </h5>

                  <p className="cart-text">
                    <b>Price:</b> ₹{item.product.price}
                  </p>

                  <p className="cart-text">
                    <b>Quantity:</b> {item.quantity}
                  </p>

                  <p className="cart-text">
                    <b>Item Total:</b> ₹
                    {item.product.price * item.quantity}
                  </p>

                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.product._id)}
                  >
                    Remove ❌
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            Total Cost: ₹{totalCost}
          </div>
        </>
      )}
    </div>
  );
}
