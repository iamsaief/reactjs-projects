import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts } from './productsAPI';

const initialState = {
	products: [],
	isLoading: false,
	isError: false,
	error: '',
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
	const products = await getProducts();
	return products;
});

const productsSlice = createSlice({
	name: 'products',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchProducts.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.products = [];
				state.error = action.error?.message;
			});
	},
});

export default productsSlice.reducer;
