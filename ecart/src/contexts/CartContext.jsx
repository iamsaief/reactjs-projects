import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const [itemAmount, setItemAmount] = useState(0);
	const [cartTotal, setCartTotal] = useState(0);

	useEffect(() => {
		const total = cart.reduce((acc, curr) => acc + curr.price * curr.amount, 0);
		setCartTotal(total);
	});

	useEffect(() => {
		if (cart) {
			const amount = cart.reduce((prev, curr) => prev + curr.amount, 0);
			setItemAmount(amount);
		}
	}, [cart]);

	// Add to cart
	const addToCart = (product, id) => {
		const newItem = { ...product, amount: 1 };

		const cartItem = cart.find((item) => item.id === id);
		// Check if the item is already added to cart
		if (cartItem) {
			const newCart = [...cart].map((item) => {
				if (item.id === id) {
					return { ...item, amount: cartItem.amount + 1 };
				} else {
					return item;
				}
			});
			setCart(newCart);
		} else {
			setCart([...cart, newItem]);
		}

		console.log(cart);
	};

	// Remove from cart
	const removeFromCart = (id) => {
		const newCart = cart.filter((item) => item.id !== id);
		setCart(newCart);
	};

	// Increase amount
	const increaseAmount = (id) => {
		const cartItem = cart.find((item) => item.id === id);
		addToCart(cartItem, id);
	};

	// Decrease amount
	const decreaseAmount = (id) => {
		const cartItem = cart.find((item) => item.id === id);
		if (cartItem) {
			const newCart = cart.map((item) => {
				if (item.id === id) {
					return { ...item, amount: cartItem.amount - 1 };
				} else {
					return item;
				}
			});
			setCart(newCart);
		}
		if (cartItem.amount < 2) {
			removeFromCart(id);
		}
	};

	// Clear cart
	const clearCart = () => {
		setCart([]);
	};

	return (
		<CartContext.Provider
			value={{ cart, addToCart, removeFromCart, increaseAmount, decreaseAmount, clearCart, itemAmount, cartTotal }}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
