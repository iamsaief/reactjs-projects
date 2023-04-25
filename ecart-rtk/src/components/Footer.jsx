import React from 'react';

const Footer = () => {
	return (
		<footer className="bg-primary py-12">
			<div className="container mx-auto">
				<p className="text-white/20 text-center text-sm font-light">
					&copy; {new Date().getFullYear()} | made with{' '}
					<span className="text-[.7em] leading-none bg-clip-text text-transparent bg-white/20"> 💜 </span>
					by{' '}
					<a
						className="hover:underline underline-offset-2"
						href="https://www.linkedin.com/in/saiefalemon/"
						target="_blank"
					>
						Saief Al Emon
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
