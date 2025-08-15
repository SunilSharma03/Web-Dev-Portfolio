'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    // This is a mock registration - in a real app, you would send data to a backend
    console.log('Registration successful');
    router.push('/login');
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
        <h1 className="text-3xl font-medium mb-4">Create Account</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Your name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:ring-amazon-yellow focus:border-amazon-yellow"
            />
          </div>
          
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
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 6 characters"
              className="w-full p-2 border border-gray-300 rounded focus:ring-amazon-yellow focus:border-amazon-yellow"
            />
            <p className="text-xs text-gray-500 mt-1">Passwords must be at least 6 characters.</p>
          </div>
          
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
              Re-enter password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:ring-amazon-yellow focus:border-amazon-yellow"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-amazon-yellow hover:bg-yellow-500 text-amazon-light font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create your Amazon account
          </button>
        </form>
        
        <div className="mt-4 text-xs text-gray-600">
          By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.
        </div>
      </div>
      
      <div className="mt-4 text-sm flex items-center">
        <span className="text-gray-600">Already have an account?</span>
        <Link href="/login" className="ml-2 text-blue-600 hover:text-amazon-orange hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
}