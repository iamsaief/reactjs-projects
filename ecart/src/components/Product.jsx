import React from 'react';
import { useContext } from 'react';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const Product = ({ product }) => {
	const { id, image, category, title, price } = product;

	const { addToCart } = useContext(CartContext);

	return (
		<div>
			<div className="h-[300px] mb-4 border border-[#e4e4e4] relative overflow-hidden group transition ">
				<div className="w-full h-full flex justify-center items-center">
					<div className="w-[200px] mx-auto flex justify-center items-center">
						<img src={image} alt={title} className="max-h-[160px] group-hover:scale-110 transition duration-300" />
					</div>
					{/* buttons */}
					<div className="absolute top-0 right-0 p-2 bg-red-700- flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-12 group-hover:translate-x-0">
						<button
							onClick={() => addToCart(product, id)}
							className="w-12 h-12 text-white bg-red-500 flex justify-center items-center"
						>
							<BsPlus className="text-3xl" />
						</button>
						<Link
							to={`product/${id}`}
							className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
						>
							<BsEyeFill />
						</Link>
					</div>
				</div>
			</div>
			{/* category, title, price */}
			<div>
				<div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
				<Link to={`product/${id}`} className="font-semibold mb-1">
					<h2>{title}</h2>
				</Link>
				<div className="font-semibold text-gray-800">$ {price}</div>
			</div>
		</div>
	);
};

export default Product;
