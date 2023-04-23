import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [error, setError] = useState('');

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				setIsLoading(true);
				const response = await fetch('https://fakestoreapi.com/products');
				const data = await response.json();
				setProducts(data);
				setIsLoading(false);
			} catch (error) {
				setIsError(true);
				setIsLoading(false);
				setError(error.message);
			}
		};

		fetchProducts();
	}, []);

	return <ProductContext.Provider value={{ products, isLoading, isError, error }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
