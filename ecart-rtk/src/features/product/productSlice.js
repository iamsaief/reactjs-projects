import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProduct } from './productAPI';

const initialState = {
	product: [],
	isLoading: false,
	isError: false,
	error: '',
};

export const fetchProduct = createAsyncThunk('product/fetchProduct', async (id) => {
	const product = await getProduct(id);
	return product;
});

const productSlice = createSlice({
	name: 'product',
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchProduct.pending, (state) => {
				state.isError = false;
				state.isLoading = true;
			})
			.addCase(fetchProduct.fulfilled, (state, action) => {
				state.isLoading = false;
				state.product = action.payload;
			})
			.addCase(fetchProduct.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.error = action.error?.message;
				state.product = [];
			});
	},
});

export default productSlice.reducer;
