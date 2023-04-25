import { Link } from 'react-router-dom';
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeCartItem } from '../features/cart/cartSlice';

const CartItem = ({ cartItem }) => {
	const dispatch = useDispatch();

	const { id, title, image, price, quantity } = cartItem;

	// const { removeFromCart, increaseAmount, decreaseAmount } = useContext(CartContext);

	return (
		<div className="flex gap-x-4 py-2 xl:px-6 w-full font-light text-gray-500">
			<div className="w-full min-h-[150px] flex items-center gap-x-4">
				<Link to={`/products/${id}`}>
					<img className="max-w-[80px]" src={image} alt={title} loading="lazy" />
				</Link>
				<div className="w-full flex flex-col">
					<div className="flex justify-between mb-2">
						<Link
							to={`/products/${id}`}
							className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
						>
							{title}
						</Link>
						<div
							onClick={() => {
								dispatch(removeCartItem(id));
							}}
							title="Remove this item from cart"
							className="text-xl cursor-pointer self-baseline"
						>
							<IoMdClose className="text-gray-400 hover:text-red-500 transition" />
						</div>
					</div>
					<div className="flex gap-x-2 h-[36px] text-sm">
						<div className="flex flex-1 max-w-[100px] h-full items-center border text-primary font-medium px-1">
							<div
								onClick={() => {
									if (quantity === 1) {
										dispatch(removeCartItem(id));
										return;
									}
									dispatch(decreaseQuantity(id));
								}}
								className="h-full flex-1 flex justify-center items-center cursor-pointer"
							>
								<IoMdRemove />
							</div>
							<div className="h-full flex justify-center items-center px-2">{quantity}</div>
							<div
								onClick={() => dispatch(increaseQuantity(id))}
								className="h-full flex-1 flex justify-center items-center cursor-pointer"
							>
								<IoMdAdd />
							</div>
						</div>
						<div className="flex-1 flex justify-around items-center">$ {price}</div>
						<div className="flex-1 flex justify-end items-center text-primary font-medium">
							$ {parseFloat(price * quantity).toFixed(2)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
