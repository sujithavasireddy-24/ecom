import React, { useEffect, useState } from "react";
import axios from "axios";

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
          setLoading(false);
        }
      } catch (err) {
        console.log("Error fetching cart", err);
        setLoading(false);
      }
    };

    if (userId) fetchCart();
  }, [userId]);

  // 🔹 Calculate total cart price
  const totalCost = cartItems.reduce((total, item) => {
    return total + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="container mt-4">
      <h2 className="mb-3">My Cart</h2>

      {loading ? (
        <p>Loading...</p>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {cartItems.map((item) => (
              <div className="col" key={item._id}>
                <div className="card h-100 p-3 shadow-sm">
                  <h5 className="mb-2">{item.product.name}</h5>
                  <p><b>Price:</b> ₹{item.product.price}</p>
                  <p><b>Quantity:</b> {item.quantity}</p>
                  <p>
                    <b>Item Total:</b>{" "}
                    ₹{item.product.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* 🔹 Total Cost */}
          <div className="mt-4 text-end">
            <h4>Total Cost: ₹{totalCost}</h4>
          </div>
        </>
      )}
    </div>
  );
}
