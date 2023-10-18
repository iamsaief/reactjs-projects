import { createContext, useContext, useEffect, useReducer } from "react";
import { cartReducer } from "./Reducers";

const CartContext = createContext();

const Context = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, {
		products: [],
		cart: [],
		subTotal: 0,
		itemsCount: 0,
	});

	// console.log(state);

	const fetchProducts = async () => {
		try {
			const response = await fetch("https://dummyjson.com/products");
			const data = await response.json();

			dispatch({
				type: "ADD_PRODUCTS",
				payload: data.products.slice(0, 20),
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	useEffect(() => {
		dispatch({
			type: "CART_SUB_TOTAL",
			payload: state.cart,
		});

		dispatch({
			type: "CART_ITEMS_COUNT",
			payload: state.cart,
		});
	}, [state.cart]);

	return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

export default Context;

export const CartState = () => {
	return useContext(CartContext);
};
