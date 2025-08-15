import { Product } from './types';

// Additional mock products to supplement the FakeStore API
export const mockProducts: Product[] = [
  {
    id: 101,
    title: 'Smart Home Hub',
    price: 129.99,
    description: 'Control all your smart home devices from one central hub. Compatible with Alexa, Google Home, and Apple HomeKit.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2dae1d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: { rate: 4.7, count: 312 }
  },
  {
    id: 102,
    title: 'Wireless Noise Cancelling Headphones',
    price: 199.99,
    description: 'Premium wireless headphones with active noise cancellation, 30-hour battery life, and comfortable over-ear design.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: { rate: 4.8, count: 523 }
  },
  {
    id: 103,
    title: 'Ergonomic Office Chair',
    price: 249.99,
    description: 'Adjustable office chair with lumbar support, breathable mesh back, and 360-degree swivel for maximum comfort during long work hours.',
    category: 'furniture',
    image: 'https://images.unsplash.com/photo-1505797149-35ebcb015248?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: { rate: 4.5, count: 189 }
  },
  {
    id: 104,
    title: 'Smart Fitness Watch',
    price: 149.99,
    description: 'Track your workouts, heart rate, sleep, and more with this waterproof smart fitness watch. Includes GPS and smartphone notifications.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: { rate: 4.6, count: 421 }
  },
  {
    id: 105,
    title: 'Portable Bluetooth Speaker',
    price: 79.99,
    description: 'Waterproof portable speaker with 24-hour battery life, deep bass, and 360-degree sound. Perfect for outdoor adventures.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: { rate: 4.4, count: 356 }
  },
  {
    id: 106,
    title: 'Stainless Steel Cookware Set',
    price: 199.99,
    description: '10-piece cookware set including pots, pans, and lids. Made from premium stainless steel with heat-resistant handles.',
    category: 'home',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: { rate: 4.7, count: 278 }
  },
  {
    id: 107,
    title: 'Organic Cotton Bedding Set',
    price: 129.99,
    description: 'Luxurious 100% organic cotton bedding set including duvet cover, fitted sheet, and pillowcases. Hypoallergenic and eco-friendly.',
    category: 'home',
    image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: { rate: 4.9, count: 203 }
  },
  {
    id: 108,
    title: 'Professional DSLR Camera',
    price: 899.99,
    description: 'High-performance DSLR camera with 24.2MP sensor, 4K video recording, and interchangeable lens system. Includes carrying case.',
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: { rate: 4.8, count: 167 }
  },
  {
    id: 109,
    title: 'Bamboo Cutting Board Set',
    price: 39.99,
    description: 'Set of 3 eco-friendly bamboo cutting boards in different sizes. Durable, knife-friendly, and naturally antibacterial.',
    category: 'home',
    image: 'https://images.unsplash.com/photo-1594385208974-2e75f8d7bb0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: { rate: 4.6, count: 312 }
  },
  {
    id: 110,
    title: 'Leather Messenger Bag',
    price: 159.99,
    description: 'Handcrafted genuine leather messenger bag with multiple compartments, adjustable strap, and vintage-inspired design.',
    category: 'fashion',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: { rate: 4.7, count: 189 }
  }
];