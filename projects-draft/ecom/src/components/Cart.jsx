import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";

const Cart = () => {
	const {
		state: { cart },
		dispatch,
	} = CartState();

	const cartTotal = {
		subTotal: cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0),
		itemsCount: cart.reduce((acc, curr) => acc + curr.quantity, 0),
	};

	const changeQuantity = ({ id, qty }) => {
		dispatch({
			type: "CHANGE_QUANTITY",
			payload: { id, qty },
		});
	};

	return (
		<div>
			<div style={{ position: "sticky", top: "10px" }}>
				<div style={{ textAlign: "center" }}>
					<h2 style={{ margin: "0" }}>Cart</h2>
				</div>
				<br />
				<div style={{ maxHeight: "80vh", overflowY: "auto" }}>
					<div
						style={{
							display: "grid",
							gap: "5px",
							width: "100%",
						}}
					>
						{cart.length > 0 ? (
							cart.map((product) => (
								<div
									key={product.id}
									style={{
										display: "grid",
										gridTemplateColumns: "50px 2fr auto",
										gap: "10px",
										border: "1px solid gray",
										padding: "5px",
									}}
								>
									<img
										src={product.thumbnail}
										alt={product.title}
										loading="lazy"
										style={{ width: "50px", maxWidth: "100%", aspectRatio: "1", objectFit: "cover" }}
									/>
									<div>
										<h5 style={{ margin: 0 }}>{product.title}</h5>
										<div>${product.price}</div>
									</div>
									<div
										style={{
											display: "flex",
											gap: "10px",
											alignItems: "center",
										}}
									>
										<button onClick={() => changeQuantity(product.id, product.quantity++)}>+</button>
										<span>{product.quantity}</span>
										<button onClick={() => changeQuantity(product.id, product.quantity--)}>-</button>
									</div>
								</div>
							))
						) : (
							<div style={{ textAlign: "center" }}>Cart is empty</div>
						)}
					</div>
				</div>
				<br />
				<div style={{ textAlign: "center" }}>
					Number of items: <b style={{ color: "tomato" }}>{cartTotal.itemsCount}</b>
				</div>
				<div style={{ textAlign: "center" }}>
					Total: <b style={{ color: "tomato" }}>${cartTotal.subTotal}</b>
				</div>
			</div>
		</div>
	);
};

export default Cart;
