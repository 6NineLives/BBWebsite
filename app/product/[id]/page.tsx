"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCart } from '../../contexts/CartContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const products = [
  { id: 1, name: "Black and White Gradient Jacket", image: "https://storage.googleapis.com/a1aa/image/GHBIHU9AJ04RI5RduxR5eeRqXAxE81XqLuOXDQingH0fhBknA.jpg", price: 299.99, description: "A stylish black and white gradient jacket perfect for any occasion." },
  { id: 2, name: "Black and White Gradient Shorts", image: "https://storage.googleapis.com/a1aa/image/O6HSDKdsHBrLLVfTKtkIr0skeel0uYx5ponxy6vfDzUEEDIPB.jpg", price: 149.99, description: "Comfortable black and white gradient shorts to complete your look." },
  { id: 3, name: "Red Jacket", image: "https://storage.googleapis.com/a1aa/image/JGqShpMF0lLaKh8uaCbPfxHGvqd88KewN1s6jbbZMmdAxAyTA.jpg", price: 279.99, description: "A vibrant red jacket that stands out in any crowd." },
  { id: 4, name: "Red Pants", image: "https://storage.googleapis.com/a1aa/image/Px5jZrLbViaiORPgBb0egZYrYrM8BU4kMl8qJ4xXD06ewAyTA.jpg", price: 199.99, description: "Sleek red pants that pair perfectly with our red jacket." },
];

export default function ProductPage() {
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();
  const params = useParams();

  useEffect(() => {
    const productId = parseInt(params.id as string);
    const foundProduct = products.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setError("Product not found");
    }
  }, [params.id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 });
    }
  };

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Error</h1>
          <p>{error}</p>
          <Link href="/" className="btn btn-primary mt-4">Return to Home</Link>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8">
          <p>Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-96 md:h-full">
            <Image
              src={product.image}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
            <p className="mb-6">{product.description}</p>
            <button
              onClick={handleAddToCart}
              className="btn btn-primary"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
