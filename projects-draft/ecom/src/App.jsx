import { useEffect, useReducer } from "react";
import { cartReducer } from "./reducers/cartReducer";
import Products from "./components/Products";
import Cart from "./components/Cart";
import { CartState } from "./context/Context";

function App() {
	/* const [state, dispatch] = useReducer(cartReducer, {
		products: [],
		cart: [],
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
	}, []); */

	// const { state, dispatch } = CartState();

	return (
		<div style={{ padding: "10px", fontFamily: "system-ui, sans-serif" }}>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "75fr 25fr",
					gap: "10px",
				}}
			>
				<Products />
				<Cart />
			</div>
		</div>
	);
}

export default App;
