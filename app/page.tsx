import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

const products = [
  { id: 1, name: "Black and White Gradient Jacket", video: "https://i.imgur.com/9Cw6B1y.mp4", price: 299.99 },
  { id: 2, name: "Black and White Gradient Shorts", video: "https://i.imgur.com/9Cw6B1y.mp4", price: 149.99 },
  { id: 3, name: "Red Jacket", video: "https://i.imgur.com/9Cw6B1y.mp4", price: 279.99 },
  { id: 4, name: "Red Pants", video: "https://i.imgur.com/9Cw6B1y.mp4", price: 199.99 },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="relative h-screen">
        {/* Background video */}
        <video
          src="https://i.imgur.com/ixQzXwk.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50" />
        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-6xl font-bold mb-4">XIAN</h1>
          <h2 className="text-6xl font-bold">LEE</h2>
        </div>
      </div>
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">NEW ARRIVALS</h2>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="relative">
              {product.video ? (
                <video
                  src={product.video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-lg"
                />
              )}
              <div className="mt-2">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
