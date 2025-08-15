'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Login() {
  // Default credentials for demo purposes
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('password123');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // This is a mock login - in a real app, you would validate with a backend
    if (email && password) {
      // For demo purposes, accept any non-empty credentials
      // In a real app, you would validate against a database
      console.log('Login successful');
      router.push('/');
    } else {
      setError('Please enter both email and password');
    }
  };

  return (
    <div className="flex flex-col items-center bg-white p-10">
      <Link href="/">
        <Image
          src="/images/amazon-logo.svg"
          width={150}
          height={40}
          alt="Amazon Logo"
          className="cursor-pointer mb-8"
        />
      </Link>

      <div className="w-full max-w-sm p-6 border border-gray-300 rounded-md">
        <h1 className="text-3xl font-medium mb-4">Sign-In</h1>
        
        <div className="bg-blue-50 border border-blue-200 text-blue-800 px-4 py-3 rounded mb-4">
          <p className="text-sm">Demo Credentials:</p>
          <p className="text-sm"><strong>Email:</strong> user@example.com</p>
          <p className="text-sm"><strong>Password:</strong> password123</p>
        </div>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:ring-amazon-yellow focus:border-amazon-yellow"
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:ring-amazon-yellow focus:border-amazon-yellow"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-amazon-yellow hover:bg-yellow-500 text-amazon-light font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign In
          </button>
        </form>
        
        <div className="mt-4 text-xs text-gray-600">
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </div>
      </div>
      
      <div className="mt-4 text-sm">
        <span className="text-gray-600">New to Amazon?</span>
      </div>
      
      <Link href="/register" className="mt-2 w-full max-w-sm">
        <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-normal py-2 px-4 rounded border border-gray-300">
          Create your Amazon account
        </button>
      </Link>
    </div>
  );
}