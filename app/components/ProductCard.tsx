import Link from 'next/link';

import Image from 'next/image';
import { useCart } from '../contexts/CartContext';

type ProductCardProps = {
  id: number;
  name: string;
  image: string;
  price: number;
};

const ProductCard: React.FC<ProductCardProps> = ({ id, name, image, price }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity: 1 });
  };

  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <Image
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          width={500}
          height={500}
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/product/${id}`}>
              <span aria-hidden="true" className="absolute inset-0"></span>
              {name}
            </Link>
          </h3>
        </div>
        <p className="text-sm font-medium text-gray-900">${price.toFixed(2)}</p>
      </div>
      <button
        onClick={handleAddToCart}
        className="btn btn-primary w-full mt-2"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
