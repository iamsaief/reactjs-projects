import React from 'react';

const Footer = () => {
	return (
		<footer className="py-5 text-center h-[200px] lg:h-[250px]">
			<div className="container mx-auto">
				<div className="text-white/20 text-base font-light">
					&copy; {new Date().getFullYear()} | made with{' '}
					<span className="text-[.65em] leading-none bg-clip-text text-transparent text-gradient opacity-[.5]">💜</span>{' '}
					by{' '}
					<a
						className="hover:underline underline-offset-2"
						href="https://www.linkedin.com/in/saiefalemon/"
						target="_blank"
					>
						Saief Al Emon
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
