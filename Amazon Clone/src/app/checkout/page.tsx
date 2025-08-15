'use client';

import { useCartStore } from '@/lib/store';
import Header from '@/components/Header';
import Image from 'next/image';
import { useState } from 'react';

export default function Checkout() {
  const { items, removeFromCart, updateQuantity, clearCart, getTotal } = useCartStore();
  const [processing, setProcessing] = useState(false);

  const handleCheckout = () => {
    setProcessing(true);
    // Simulate checkout process
    setTimeout(() => {
      clearCart();
      setProcessing(false);
      alert('Order placed successfully!');
    }, 2000);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* Left */}
        <div className="flex-grow m-5 shadow-sm">
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0 ? 'Your Amazon Basket is empty' : 'Shopping Basket'}
            </h1>

            {items.map((item) => (
              <div key={item.id} className="grid grid-cols-5">
                <Image
                  src={item.image}
                  height={200}
                  width={200}
                  alt={item.title}
                  className="object-contain"
                />

                <div className="col-span-3 mx-5">
                  <p>{item.title}</p>
                  <div className="flex">
                    {Array(Math.round(item.rating.rate))
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5 text-yellow-500"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ))}
                  </div>
                  <p className="text-xs my-2 line-clamp-3">{item.description}</p>
                  <div className="flex items-center space-x-2">
                    <p className="font-bold">${item.price}</p>
                    <span>×</span>
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      className="p-2 bg-gray-50 text-sm"
                    >
                      {[...Array(10).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col space-y-2 my-auto justify-self-end">
                  <button
                    className="button mt-auto"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove from Basket
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        {items.length > 0 && (
          <div className="flex flex-col bg-white p-10 shadow-md">
            <h2 className="whitespace-nowrap">Subtotal ({items.reduce((total, item) => total + item.quantity, 0)} items):
              <span className="font-bold"> ${getTotal().toFixed(2)}</span>
            </h2>

            <button
              onClick={handleCheckout}
              disabled={processing}
              className={`button mt-2 ${processing ? 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed' : ''}`}
            >
              {processing ? 'Processing...' : 'Proceed to Checkout'}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}