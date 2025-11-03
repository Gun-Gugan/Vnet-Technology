import { useLocation, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const OrderSuccessPage = () => {
  const { state } = useLocation();       
  const { cartItems } = useCart();

  const shipping = state?.shipping || {};
  const orderItems = state?.items || cartItems;

  const subtotal = orderItems.reduce((sum, item) => {
    const price = parseFloat(item.newPrice.replace(/[^0-9.]/g, "")) || 0;
    return sum + price * (item.quantity || 1);
  }, 0);
  const shippingFee = subtotal > 0 ? 10 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + shippingFee + tax;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 mt-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-green-600 mb-2">
          Thank You!
        </h1>
        <p className="text-lg text-gray-700 mt-3">
          Your order has been placed successfully. Thank You for shopping with us.
        </p>
      </div>

      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
        <div className="text-sm space-y-1">
          <p>
            <strong>{shipping.name}</strong>
          </p>
          <p>{shipping.email}</p>
          <p>{shipping.address}</p>
          <p>
            {shipping.city}
            {shipping.pincode && `, ${shipping.pincode}`}
          </p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

        <div className="space-y-4 mb-6">
          {orderItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center text-sm"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 object-contain rounded"
                />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-gray-500">Qty: {item.quantity || 1}</p>
                </div>
              </div>
              <p className="font-semibold">{item.newPrice}</p>
            </div>
          ))}
        </div>

        <div className="border-t pt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span>${shippingFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>Total</span>
            <span className="text-green-600">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link
          to="/shoppage"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition font-medium"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccessPage;