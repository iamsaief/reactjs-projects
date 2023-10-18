export const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_PRODUCTS":
			return { ...state, products: action.payload };
		case "ADD_TO_CART":
			return { ...state, cart: [{ ...action.payload }, ...state.cart] };

		case "REMOVE_FROM_CART":
			return { ...state, cart: state.cart.filter((c) => c.id !== action.payload.id) };
		case "CHANGE_QUANTITY":
			return {
				...state,
				cart: state.cart.filter((c) => (c.id === action.payload.id ? (c.quantity = action.payload.qty) : c.quantity)),
			};
		case "CART_SUB_TOTAL":
			return { ...state, subTotal: state.cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0) };
		case "CART_ITEMS_COUNT":
			return { ...state, itemsCount: state.cart.reduce((acc, curr) => acc + curr.quantity, 0) };

		default:
			break;
	}
};
