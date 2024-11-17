'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { useCart } from '../../contexts/CartContext';

// This would typically come from an API or database
const products = [
  { id: 1, name: "Black and White Gradient Jacket", image: "https://storage.googleapis.com/a1aa/image/GHBIHU9AJ04RI5RduxR5eeRqXAxE81XqLuOXDQingH0fhBknA.jpg", price: 299.99, description: "Stylish black and white gradient jacket with Casablanca logo." },
  { id: 2, name: "Black and White Gradient Shorts", image: "https://storage.googleapis.com/a1aa/image/O6HSDKdsHBrLLVfTKtkIr0skeel0uYx5ponxy6vfDzUEEDIPB.jpg", price: 149.99, description: "Comfortable black and white gradient shorts with Casablanca logo." },
  { id: 3, name: "Red Jacket", image: "https://storage.googleapis.com/a1aa/image/JGqShpMF0lLaKh8uaCbPfxHGvqd88KewN1s6jbbZMmdAxAyTA.jpg", price: 279.99, description: "Vibrant red jacket with white zipper and Casablanca logo." },
  { id: 4, name: "Red Pants", image: "https://storage.googleapis.com/a1aa/image/Px5jZrLbViaiORPgBb0egZYrYrM8BU4kMl8qJ4xXD06ewAyTA.jpg", price: 199.99, description: "Stylish red pants with white stripes and Casablanca logo." },
];

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const productId = parseInt(id as string);
    const foundProduct = products.find(p => p.id === productId);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 pt-16">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <img src={product.image} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-lg" />
            </div>
            <div className="md:w-1/2 md:pl-8 mt-4 md:mt-0">
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <p className="mt-4 text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
              <button
                onClick={handleAddToCart}
                className="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
