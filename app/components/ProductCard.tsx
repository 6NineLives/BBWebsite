'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '../contexts/CartContext';
import { useState } from 'react';

interface ProductCardProps {
  id: number;
  name: string;
  image: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, name, image, price }) => {
  const { addToCart } = useCart();
  const [isClient, setIsClient] = useState(false);

  useState(() => {
    setIsClient(true);
  }, []);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ id, name, price, quantity: 1 });
  };

  return (
    <div className="group">
      <Link href={`/product/${id}`}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
          <Image
            src={image}
            alt={name}
            width={300}
            height={300}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">{name}</h3>
          </div>
          <p className="text-sm font-medium text-gray-900">${price.toFixed(2)}</p>
        </div>
      </Link>
      {isClient && (
        <button
          onClick={handleAddToCart}
          className="mt-2 w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
