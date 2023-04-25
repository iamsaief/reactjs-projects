import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import productReducer from '../features/product/productSlice';
import sidebarReducer from '../features/sidebar/sidebarSlice';
import cartReducer from '../features/cart/cartSlice';

export const store = configureStore({
	reducer: {
		products: productsReducer,
		product: productReducer,
		sidebar: sidebarReducer,
		cart: cartReducer,
	},
});
