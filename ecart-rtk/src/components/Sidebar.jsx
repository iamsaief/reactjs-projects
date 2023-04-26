import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowForward } from 'react-icons/io';
import { FiTrash2 } from 'react-icons/fi';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../features/modal/modalSlice';
import { closeSidebar } from '../features/sidebar/sidebarSlice';
import { motion } from 'framer-motion';
import Backdrop from './Backdrop';
import NotFound from './NotFound';

const slideIn = {
	hidden: {
		opacity: 0,
		x: ' -100%',
	},
	visible: {
		opacity: 1,
		x: 0,
	},
	exit: {
		x: '-100%',
	},
};

const Sidebar = () => {
	const { cartItems, quantity, total } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	return (
		<Backdrop onClick={() => dispatch(closeSidebar())}>
			<motion.aside
				variants={slideIn}
				initial="hidden"
				animate="visible"
				exit="exit"
				transition={{ duration: 0.3 }}
				onClick={(e) => e.stopPropagation()}
				className={`sidebar fixed left-0 bg-white w-full h-full top-0 shadow-2xl lg:w-[40vw] sm:w-[50vw] xl:max-w-[30vw] z-30 px-5 lg:px-[35px]`}
			>
				{/* Sidebar Header */}
				<div className="flex items-center justify-between py-3 border-b">
					<div
						onClick={() => dispatch(closeSidebar())}
						className="cursor-pointer w-8 h-8 flex justify-center items-center"
					>
						<IoMdArrowForward className="text-2xl rotate-180" />
					</div>
					<div className="uppercase text-sm font-semibold">Shipping Bag ({quantity})</div>
				</div>

				{/* Cart Items */}
				<div className="flex flex-col overflow-y-auto max-h-[calc(100%-250px)] divide-y-[1px] divide-gray-100">
					{cartItems.map((item) => (
						<CartItem key={item.id} cartItem={item} />
					))}
				</div>

				{/* Cart Total */}
				{quantity > 0 ? (
					<div className="flex flex-col gap-y-3 py-4 border-t">
						<div className="flex w-full justify-between items-center">
							<div className="uppercase font-semibold text-red-500">
								<span className="mr-2">Total: $ {total}</span>
							</div>
							<div
								onClick={() => {
									dispatch(openModal());
								}}
								className="cursor-pointer py-2 bg-red-400 text-white w-8 h-8 flex justify-center items-center text-xl rounded-sm"
								title="Remove all the items from cart"
							>
								<FiTrash2 />
							</div>
						</div>
						<Link
							to="/"
							className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium rounded-sm"
						>
							View Cart
						</Link>
						<Link
							to="/"
							className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium rounded-sm"
						>
							Checkout
						</Link>
					</div>
				) : (
					<NotFound />
				)}
			</motion.aside>
		</Backdrop>
	);
};

export default Sidebar;
