// src/pages/CheckoutPage.jsx
import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast"; // optional – install if you want nice toasts

const CheckoutPage = () => {
    const { cartItems, clearCart } = useCart();
    const navigate = useNavigate();

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
        pincode: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Pricing
    const subtotal = cartItems.reduce((sum, item) => {
        const price = parseFloat(item.newPrice.replace(/[^0-9.]/g, "")) || 0;
        return sum + price * (item.quantity || 1);
    }, 0);

    const shipping = subtotal > 0 ? 10 : 0; // $10 flat
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;

    const handlePlaceOrder = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.name || !formData.email || !formData.address) {
            toast.error("Please fill in all required fields.");
            return;
        }

        // Pincode validation: must be exactly 6 digits
        if (formData.pincode && !/^\d{6}$/.test(formData.pincode)) {
            toast.error("Pincode must be exactly 6 digits.");
            if (!/[0-9]/.test(e.key)) e.preventDefault();
            return;
        }

        // Simulate order placement
        toast.success("Order placed successfully! Redirecting...");

        // Clear cart & redirect
        setTimeout(() => {
            clearCart();
            navigate("/order-success", {
                state: {
                    shipping: { ...formData },      // all address fields
                    items: cartItems,               // order items
                },
            });
        }, 1500);
    };

    if (cartItems.length === 0) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Your cart is empty
                </h2>
                <Link
                    to="/shoppage"
                    className="text-blue-600 hover:underline font-medium"
                >
                    Continue Shopping
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto py-12 px-4">
            <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {/* ========== LEFT: Order Summary ========== */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                    <div className="space-y-4 mb-6">
                        {cartItems.map((item) => (
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
                            <span>${shipping.toFixed(2)}</span>
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

                {/* ========== RIGHT: Checkout Form ========== */}
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

                    <form onSubmit={handlePlaceOrder} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">
                                Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1">Pincode</label>
                                <input
                                    type="number"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    onKeyDown={(e) => {
                                        const allowed = ['Backspace', 'Delete', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight'];
                                        if (!/[0-9]/.test(e.key) && !allowed.includes(e.key)) {
                                            e.preventDefault();
                                        }
                                    }}
                                    className="w-full px-3 py-2 border rounded-md"
                                    placeholder="6 digits"
                                />
                            </div>
                        </div>

                        <div className="pt-4 flex gap-3">
                            <Link
                                to="/cart"
                                className="flex-1 text-center bg-gray-600 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
                            >
                                Back to Cart
                            </Link>

                            <button
                                type="submit"
                                className="flex-1 bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition font-medium"
                            >
                                Place Order
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;