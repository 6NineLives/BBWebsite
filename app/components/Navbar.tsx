"use client";

import Link from 'next/link';
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const { cart } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">xian lee</Link>
          </div>
          <div className="flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2">
                🔍
              </button>
            </form>
          </div>
          <div className="flex items-center">
            <Link href="/cart" className="text-gray-800 hover:text-gray-600">
              Cart ({cartItemsCount})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
