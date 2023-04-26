import React from 'react';
import { motion } from 'framer-motion';

function Backdrop({ children, onClick }) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="backdrop fixed inset-0 bg-black/70 flex justify-center items-center z-20"
			onClick={onClick}
		>
			{children}
		</motion.div>
	);
}

export default Backdrop;
