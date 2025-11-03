import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // ---- subtotal calculation (handles "$99.99" strings) ----
  const subtotal = cartItems.reduce((sum, i) => {
    // Safely removes currency signs/commas to get a clean float
    const price = parseFloat(i.newPrice.replace(/[^0-9.]/g, ""));
    // Ensure price is a valid number before multiplying
    if (isNaN(price)) return sum;
    return sum + price * (i.quantity || 1);
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-700">
          Your cart is empty
        </h2>
        <Link
          to="/shoppage"
          className="mt-4 inline-block text-blue-600 hover:underline"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded-md bg-white shadow-sm"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-contain"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-red-500 font-semibold">{item.newPrice}</p>
                <p className="text-gray-500 text-sm">
                  Qty: {item.quantity || 1}
                </p>
              </div>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-right">
        <p className="text-xl font-semibold">
          Subtotal:{" "}
          <span className="text-red-600">${subtotal.toFixed(2)}</span>
        </p>
      </div>

      <div className="mt-4 flex justify-end gap-4">
        <button
          onClick={clearCart}
          className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
        >
          Clear Cart
        </button>
        <Link
          to="/shoppage"
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition flex items-center justify-center"
        >
          Continue Shopping
        </Link>
        <Link
          to="/checkout"
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartPage;