import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
	quantity: 0,
	total: 0,
	isLoading: false,
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const { cartItems } = state;
			const { payload } = action;

			const itemInCart = cartItems.find((item) => item.id === payload.id);

			if (itemInCart) {
				itemInCart.quantity++;
			} else {
				cartItems.push({ ...payload, quantity: 1 });
			}
		},
		removeCartItem: (state, action) => {
			const itemId = action.payload;
			state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
		},
		removeCart: (state) => {
			state.cartItems = [];
		},
		increaseQuantity: (state, action) => {
			const itemId = action.payload;
			const cartItem = state.cartItems.find((item) => item.id === itemId);
			cartItem.quantity++;
		},
		decreaseQuantity: (state, action) => {
			const itemId = action.payload;
			const cartItem = state.cartItems.find((item) => item.id === itemId);
			cartItem.quantity--;
		},
		calculateTotal: (state) => {
			let totalQuantity = 0;
			let totalPrice = 0;
			state.cartItems.forEach((item) => {
				totalQuantity += item.quantity;
				totalPrice += item.price * item.quantity;
			});
			state.quantity = totalQuantity;
			state.total = +totalPrice.toFixed(2);
		},
	},
});

export const { addToCart, removeCartItem, removeCart, calculateTotal, increaseQuantity, decreaseQuantity } =
	cartSlice.actions;
export default cartSlice.reducer;
