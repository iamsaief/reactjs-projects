import React from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from './CartItem';
import { SidebarContext } from '../contexts/SidebarContext';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Sidebar = () => {
	const { isOpen, handleClose } = useContext(SidebarContext);
	const { cart, clearCart, cartTotal, itemAmount } = useContext(CartContext);

	return (
		<aside
			className={`${
				isOpen ? 'right-0' : '-right-full'
			} sidebar fixed bg-white w-full h-full top-0 shadow-2xl lg:w-[40vw] sm:w-[50vw] xl:max-w-[30vw] z-20 px-5 lg:px-[35px] transition-all duration-300`}
		>
			<div className="flex items-center justify-between py-3 border-b">
				<div className="uppercase text-sm font-semibold">Shipping Bag ({itemAmount})</div>
				<div onClick={handleClose} className="cursor-pointer w-8 h-8 flex justify-center items-center">
					<IoMdArrowForward className="text-2xl" />
				</div>
			</div>
			<div className="flex flex-col overflow-y-auto max-h-[calc(100%-155px)]">
				{cart.map((item) => (
					<CartItem key={item.id} cartItem={item} />
				))}
			</div>
			<div className="flex flex-col gap-y-3 py-4 mt-4">
				<div className="flex w-full justify-between items-center">
					<div className="uppercase font-semibold text-red-500">
						<span className="mr-2">Total: $ {+parseFloat(cartTotal).toFixed(2)}</span>
					</div>
					<div
						onClick={clearCart}
						className="cursor-pointer py-2 bg-red-400 text-white w-8 h-8 flex justify-center items-center text-xl rounded-sm"
						title="remove all the items from cart"
					>
						<FiTrash2 />
					</div>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
