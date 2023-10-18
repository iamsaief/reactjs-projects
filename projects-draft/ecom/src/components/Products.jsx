import { CartState } from "../context/Context";

const Products = () => {
	const {
		state: { products, cart },
		dispatch,
	} = CartState();

	return (
		<div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "10px" }}>
			{products.map((product) => (
				<div key={product.id} style={{ border: "1px solid gray" }}>
					<img
						src={product.thumbnail}
						alt={product.title}
						loading="lazy"
						style={{ maxWidth: "100%", aspectRatio: "3/2", objectFit: "cover" }}
					/>
					<div style={{ padding: "10px" }}>
						<h3 style={{ margin: 0 }}>{product.title}</h3>
						<div>${product.price}</div>
						<br />
						<div style={{ textAlign: "center", display: "grid", gap: "5px" }}>
							{cart.some((p) => p.id === product.id) ? (
								<button
									style={{
										background: "orange",
										color: "white",
										border: "none",
										borderRadius: "3px",
										padding: "4px 8px",
										fontSize: ".7rem",
										display: "inline-block",
									}}
									onClick={() =>
										dispatch({
											type: "REMOVE_FROM_CART",
											payload: { ...product },
										})
									}
								>
									Remove from Cart
								</button>
							) : (
								<button
									style={{
										background: "green",
										color: "white",
										border: "none",
										borderRadius: "3px",
										padding: "4px 8px",
										fontSize: ".7rem",
										display: "inline-block",
									}}
									onClick={() =>
										dispatch({
											type: "ADD_TO_CART",
											payload: { ...product, quantity: 1 },
										})
									}
								>
									Add to Cart
								</button>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Products;
