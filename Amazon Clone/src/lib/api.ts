import axios from 'axios';
import { Product } from './types';
import { mockProducts } from './mockProducts';

const API_URL = 'https://fakestoreapi.com';

export async function getProducts(): Promise<Product[]> {
  try {
    const response = await axios.get(`${API_URL}/products`);
    // Combine API products with mock products
    return [...response.data, ...mockProducts];
  } catch (error) {
    console.error('Error fetching products:', error);
    // Return mock products as fallback
    return mockProducts;
  }
}

export async function getProduct(id: number): Promise<Product | null> {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const response = await axios.get(`${API_URL}/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    return [];
  }
}

export async function getCategories(): Promise<string[]> {
  try {
    const response = await axios.get(`${API_URL}/products/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}