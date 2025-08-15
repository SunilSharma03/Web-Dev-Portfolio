'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from '@/lib/store';

export default function Header() {
  const { items } = useCartStore();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="flex items-center bg-amazon p-1 flex-grow py-2">
      <div className="flex items-center flex-grow sm:flex-grow-0 mt-2 mx-6">
        <Link href="/">
          <Image
            src="/images/amazon-logo.svg"
            width={150}
            height={40}
            alt="Amazon Logo"
            className="cursor-pointer object-contain"
          />
        </Link>
      </div>

      <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-amazon-yellow hover:bg-yellow-500">
        <input
          className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 text-black"
          type="text"
          placeholder="Search Amazon"
        />
        <div className="h-12 p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-4 w-4 text-amazon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>

      <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
        <Link href="/login" className="link">
          <p>Hello, Sign in</p>
          <p className="font-extrabold md:text-sm">Account & Lists</p>
        </Link>

        <div className="link">
          <p>Returns</p>
          <p className="font-extrabold md:text-sm">& Orders</p>
        </div>

        <Link href="/checkout" className="relative link flex items-center">
          <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-amazon-yellow text-center rounded-full text-black font-bold">
            {itemCount}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-10 w-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
        </Link>
      </div>
    </header>
  );
}