import { useContext, useEffect, useState } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';
import { SiShopee } from 'react-icons/si';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Header = () => {
	const [isActive, setIsActive] = useState(false);
	const { isOpen, setIsOpen } = useContext(SidebarContext);
	const { itemAmount } = useContext(CartContext);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 55 ? setIsActive(true) : setIsActive(false);
		});
	});

	return (
		<header
			className={`${
				isActive ? 'bg-white/50 backdrop-blur py-3 shadow-md' : 'bg-white py-6'
			} fixed w-full z-10 transition-all`}
		>
			<div className="container mx-auto flex items-center justify-between h-full">
				<Link to="/">
					<SiShopee className="text-4xl" />
				</Link>
				<div
					onClick={() => setIsOpen(!isOpen)}
					className="cursor-pointer relative flex items-center justify-center w-[30px] h-[30px]"
				>
					<BsBag className="text-xl" />
					{itemAmount > 0 && (
						<div className="bg-red-500 text-white absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full flex items-center justify-center">
							{itemAmount}
						</div>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
