import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import { CartContext } from '../contexts/CartContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
	const { products } = useContext(ProductContext);
	const { addToCart } = useContext(CartContext);
	const { id } = useParams();

	const product = products.find((item) => item.id === +id);

	console.log(id, product);

	if (!product) {
		return <section className="h-screen flex justify-center items-center">Loading ...</section>;
	}

	const { image, description, title, price } = product;

	return (
		<section className="py-32 flex items-center justify-center">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row items-center">
					<div className="flex flex-1 justify-center items-center mb-8 mx-auto">
						<img className="max-w-[200px] lg:max-w-sm" src={image} alt="" loading="lazy" />
					</div>
					<div className="flex-1 text-center lg:text-left">
						<h1 className="text-[26px] font-medium mb-2 max-w-[450px] lg:mx-0 mx-auto">{title}</h1>
						<div className="text-xl text-red-500 font-medium mb-6">{price}</div>
						<p className="mb-8">{description}</p>
						<button onClick={() => addToCart(product, product.id)} className="bg-primary py-4 px-8 text-white">
							Add to cart
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetails;
