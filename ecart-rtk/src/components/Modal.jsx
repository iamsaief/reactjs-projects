import React from 'react';
import Backdrop from './Backdrop';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modal/modalSlice';
import { removeCart } from '../features/cart/cartSlice';

const dropIn = {
	hidden: {
		y: '-5vh',
		opacity: 0,
	},
	visible: {
		y: '0',
		opacity: 1,
		transition: {
			duration: 0.1,
			type: 'spring',
			damping: 25,
			stiffness: 200,
		},
	},
	exit: {
		y: '5vh',
		opacity: 0,
	},
};

const Modal = () => {
	const dispatch = useDispatch();

	return (
		<Backdrop onClick={() => dispatch(closeModal())}>
			<motion.div
				variants={dropIn}
				initial="hidden"
				animate="visible"
				exit="exit"
				onClick={(e) => e.stopPropagation()}
				className="modal w-[clamp(30%,400px,90%)] h-[min(30%,200px)] mx-auto p-12 rounded-xl bg-white flex justify-center items-center"
			>
				<div>
					<h4 className="text-center">Are you sure to remove all items from your shopping cart?</h4>
					<div className="flex gap-x-2 px-5 justify-between items-center mt-5">
						<button
							type="button"
							className="confirm-btn bg-gray-200 flex justify-center items-center px-3 py-2 text-primary font-medium rounded-sm"
							onClick={() => {
								dispatch(removeCart());
								dispatch(closeModal());
							}}
						>
							Confirm
						</button>
						<button
							type="button"
							className="cancel-btn bg-primary inline-flex px-3 py-2 justify-center items-center text-white font-medium rounded-sm"
							onClick={() => dispatch(closeModal())}
						>
							Cancel
						</button>
					</div>
				</div>
			</motion.div>
		</Backdrop>
	);
};

export default Modal;
