import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';

const Home = () => {
	const { products, isLoading, isError, error } = useContext(ProductContext);

	const filteredProducts = products.filter(
		(product) => product.category === "men's clothing" || product.category === "women's clothing"
	);

	let content = null;
	if (isLoading) {
		content = <div>Loading ...</div>;
	}
	if (!isLoading && isError) {
		content = <div>{error}</div>;
	}
	if (!isError && !isLoading && products?.length === 0) {
		content = <div>No products found!</div>;
	}
	if (!isError && !isLoading && products?.length > 0) {
		content = (
			<div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 max-w-sm sm:max-w-none mx-auto md:mx-0">
				{filteredProducts.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</div>
		);
	}

	return (
		<>
			<Hero />
			<section className="container mx-auto pt-[85px] pb-20">{content}</section>
		</>
	);
};

export default Home;
