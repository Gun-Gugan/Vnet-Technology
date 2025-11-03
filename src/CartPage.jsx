import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

const CartPage = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) =>
      sum + parseFloat(item.newPrice.replace("$", "")) * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/trending" className="text-blue-600 hover:underline">
          Continue Shopping →
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-8">Shopping Cart</h2>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm border"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-20 object-contain rounded"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600">{item.newPrice} each</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="w-8 text-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <p className="font-semibold w-20 text-right">
              ${(parseFloat(item.newPrice.replace("$", "")) * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-between items-center border-t pt-6">
        <div>
          <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        </div>
        <div className="space-x-3">
          <button
            onClick={clearCart}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Clear Cart
          </button>
          <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;