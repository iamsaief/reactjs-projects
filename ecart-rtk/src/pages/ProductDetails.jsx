import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../features/product/productSlice';
import { addToCart } from '../features/cart/cartSlice';

const ProductDetails = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const { product, isLoading, isError, error } = useSelector((state) => state.product);

	useEffect(() => {
		dispatch(fetchProduct(id));
	}, [dispatch, id]);

	const { image, description, title, price } = product || {};

	// decide what to render
	let content = null;
	if (isLoading) {
		content = <div>Loading ..... </div>;
	}

	if (!isLoading && isError) {
		content = <div>{error}</div>;
	}

	if (!isError && !isLoading && !product?.id) {
		content = <div>No product found!</div>;
	}

	if (!isError && !isLoading && product?.id) {
		content = (
			<div className="flex flex-col lg:flex-row items-center">
				<div className="flex flex-1 justify-center items-center mb-8 mx-auto">
					<img className="max-w-[200px] lg:max-w-sm" src={image} alt="" loading="lazy" />
				</div>
				<div className="flex-1 text-center lg:text-left">
					<h1 className="text-[26px] font-medium mb-2 max-w-[450px] lg:mx-0 mx-auto">{title}</h1>
					<div className="text-xl text-red-500 font-medium mb-6">{price}</div>
					<p className="mb-8">{description}</p>
					<button
						onClick={() => dispatch(addToCart({ id, image, title, price }))}
						className="bg-primary py-4 px-8 text-white"
					>
						Add to cart
					</button>
				</div>
			</div>
		);
	}

	return (
		<section className="py-32 flex items-center justify-center">
			<div className="container mx-auto">{content}</div>
		</section>
	);
};

export default ProductDetails;
