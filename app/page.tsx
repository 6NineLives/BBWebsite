import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import Image from 'next/image';

const products = [
  { id: 1, name: "Black and White Gradient Jacket", image: "https://storage.googleapis.com/a1aa/image/GHBIHU9AJ04RI5RduxR5eeRqXAxE81XqLuOXDQingH0fhBknA.jpg", price: 299.99 },
  { id: 2, name: "Black and White Gradient Shorts", image: "https://storage.googleapis.com/a1aa/image/O6HSDKdsHBrLLVfTKtkIr0skeel0uYx5ponxy6vfDzUEEDIPB.jpg", price: 149.99 },
  { id: 3, name: "Red Jacket", image: "https://storage.googleapis.com/a1aa/image/JGqShpMF0lLaKh8uaCbPfxHGvqd88KewN1s6jbbZMmdAxAyTA.jpg", price: 279.99 },
  { id: 4, name: "Red Pants", image: "https://storage.googleapis.com/a1aa/image/Px5jZrLbViaiORPgBb0egZYrYrM8BU4kMl8qJ4xXD06ewAyTA.jpg", price: 199.99 },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative h-screen">
        <div className="absolute inset-0 bg-[url('https://placehold.co/1920x1080')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold mb-4">CASA</h1>
          <h2 className="text-6xl font-bold">BLANCA</h2>
        </div>
      </div>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.id} id={product.id} name={product.name} image={product.image} price={product.price} />
          ))}
        </div>
      </section>
    </main>
  );
}