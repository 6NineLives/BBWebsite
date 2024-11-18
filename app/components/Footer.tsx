import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">xian lee is a premium fashion brand offering stylish and comfortable clothing for all occasions.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:text-gray-300">Home</Link></li>
              <li><Link href="/cart" className="text-sm hover:text-gray-300">Cart</Link></li>
              <li><Link href="#" className="text-sm hover:text-gray-300">New Arrivals</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">Email: info@xianlee.com</p>
            <p className="text-sm">Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm">&copy; 2024 xian lee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
