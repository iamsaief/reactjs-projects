import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsBag } from 'react-icons/bs';
import { SiShopee } from 'react-icons/si';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../features/sidebar/sidebarSlice';

const Header = () => {
	const [isActive, setIsActive] = useState(false);

	const dispatch = useDispatch();
	const { quantity } = useSelector((state) => state.cart);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			window.scrollY > 55 ? setIsActive(true) : setIsActive(false);
		});
	});

	return (
		<header
			className={`${
				isActive ? 'bg-white/50 backdrop-blur py-3 shadow-md' : 'bg-transparent py-6'
			} fixed w-full z-10 transition-all`}
		>
			<div className="container mx-auto flex items-center justify-between h-full">
				<Link to="/">
					<SiShopee className="text-4xl" />
				</Link>
				<div
					// onClick={() => setIsOpen(!isOpen)}
					onClick={() => dispatch(toggleSidebar())}
					className="cursor-pointer relative flex items-center justify-center w-[30px] h-[30px]"
				>
					<BsBag className="text-xl" />
					<div className="bg-red-500 text-white absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] rounded-full flex items-center justify-center">
						{quantity}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
