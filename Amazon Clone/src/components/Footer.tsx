import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-amazon text-white">
      <div className="max-w-screen-xl mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3">Get to Know Us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:underline">Careers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">About Amazon</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Investor Relations</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Amazon Devices</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Make Money with Us</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:underline">Sell products on Amazon</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Sell on Amazon Business</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Sell apps on Amazon</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Become an Affiliate</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Amazon Payment Products</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:underline">Amazon Business Card</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Shop with Points</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Reload Your Balance</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Amazon Currency Converter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-3">Let Us Help You</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-300 hover:underline">Amazon and COVID-19</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Your Account</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Your Orders</Link></li>
              <li><Link href="#" className="text-gray-300 hover:underline">Shipping Rates & Policies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Amazon Clone. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Created by Sunil Sharma
          </p>
        </div>
      </div>
    </footer>
  );
}