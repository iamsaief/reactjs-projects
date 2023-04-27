import React from 'react';
import notFoundImg from '../assets/404.svg';

function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center h-[calc(100%-100px)] mt-7-">
			<h4 className="text-center mb-10 capitalize font-semibold text-xl ">Your bag is currently empty</h4>
			<img src={notFoundImg} className="max-w-full max-h-[240px]" alt="Not Found illustration image" />
		</div>
	);
}

export default NotFound;
