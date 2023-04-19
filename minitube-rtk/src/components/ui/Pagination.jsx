import React from 'react';

function Pagination(props) {
	return (
		<section className="pt-12">
			<div className="max-w-7xl mx-auto px-4 xl:px-0 py-6 flex gap-2 justify-end">
				<div className="bg-blue-600 text-white px-4 py-1 rounded-full">1</div>
				<div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">2</div>
				<div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">3</div>
				<div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">4</div>
			</div>
		</section>
	);
}

export default Pagination;
