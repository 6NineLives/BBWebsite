"use client";

import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const products = [
  { id: 1, name: "Black and White Gradient Jacket", image: "https://storage.googleapis.com/a1aa/image/GHBIHU9AJ04RI5RduxR5eeRqXAxE81XqLuOXDQingH0fhBknA.jpg", price: 299.99 },
  { id: 2, name: "Black and White Gradient Shorts", image: "https://storage.googleapis.com/a1aa/image/O6HSDKdsHBrLLVfTKtkIr0skeel0uYx5ponxy6vfDzUEEDIPB.jpg", price: 149.99 },
  { id: 3, name: "Red Jacket", image: "https://storage.googleapis.com/a1aa/image/JGqShpMF0lLaKh8uaCbPfxHGvqd88KewN1s6jbbZMmdAxAyTA.jpg", price: 279.99 },
  { id: 4, name: "Red Pants", image: "https://storage.googleapis.com/a1aa/image/Px5jZrLbViaiORPgBb0egZYrYrM8BU4kMl8qJ4xXD06ewAyTA.jpg", price: 199.99 },
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
