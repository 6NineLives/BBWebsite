"use client";

import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: "Black and White Gradient Jacket", video: "https://i.imgur.com/9Cw6B1y.mp4", price: 299.99, description: "A stylish black and white gradient jacket perfect for any occasion." },
  { id: 2, name: "Black and White Gradient Shorts", video: "https://i.imgur.com/9Cw6B1y.mp4", price: 149.99, description: "Comfortable black and white gradient shorts to complete your look." },
  { id: 3, name: "Red Jacket", video: "https://i.imgur.com/9Cw6B1y.mp4", price: 279.99, description: "A vibrant red jacket that stands out in any crowd." },
  { id: 4, name: "Red Pants", video: "https://i.imgur.com/9Cw6B1y.mp4", price: 199.99, description: "Sleek red pants that pair perfectly with our red jacket." },
];


export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Search Results for &quot;{query}&quot;</h1>
        {filteredProducts.length === 0 ? (
          <p>No products found matching your search.</p>
        ) : (
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} id={product.id} name={product.name} image={product.image} price={product.price} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
