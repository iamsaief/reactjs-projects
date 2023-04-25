import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpen: false,
};

const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		openSidebar: (state, action) => {
			state.isOpen = true;
		},
		closeSidebar: (state, action) => {
			state.isOpen = false;
		},
		toggleSidebar: (state, action) => {
			state.isOpen = !state.isOpen;
		},
	},
});

export const { openSidebar, closeSidebar, toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;
