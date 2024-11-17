'use client';

import { useCart } from '../contexts/CartContext';
import Navbar from '../components/Navbar';

export default function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
          {cart.length === 0 ? (
            <p className="mt-4">Your cart is empty.</p>
          ) : (
            <div className="mt-8">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between border-b border-gray-200 py-4">
                  <div>
                    <h2 className="text-lg font-medium text-gray-900">{item.name}</h2>
                    <p className="mt-1 text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-sm font-medium text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
              <div className="mt-8">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-medium text-gray-900">Total</p>
                  <p className="text-xl font-semibold text-gray-900">${total.toFixed(2)}</p>
                </div>
                <button className="mt-4 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
