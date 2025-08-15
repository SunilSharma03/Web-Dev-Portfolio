'use client';

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '@/lib/types';
import { getProducts } from '@/lib/api';

export default function ProductFeed() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    }

    fetchProducts();
  }, []);
  
  // Calculate pagination using useMemo to avoid calculations during render
  const { currentProducts, totalPages } = React.useMemo(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return {
      currentProducts: products.slice(indexOfFirstProduct, indexOfLastProduct),
      totalPages: Math.ceil(products.length / productsPerPage)
    };
  }, [products, currentPage, productsPerPage]);

  if (loading) {
    return (
      <div className="grid place-items-center h-64 bg-gray-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amazon-orange mx-auto"></div>
          <p className="mt-2 text-amazon-light">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 pb-10">
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto gap-4 p-4">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-10">
            <p>No products found</p>
          </div>
        )}
      </div>
      
      {/* Pagination Controls */}
      {products.length > 0 && (
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-amazon-yellow hover:bg-yellow-500'}`}
          >
            Previous
          </button>
          
          <span className="text-sm">
            Page {currentPage} of {totalPages}
          </span>
          
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-amazon-yellow hover:bg-yellow-500'}`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}