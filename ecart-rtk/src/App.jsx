import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Modal from './components/Modal';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal } from './features/cart/cartSlice';
import { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

function App() {
	const dispatch = useDispatch();
	const { isOpen: isOpenSidebar } = useSelector((state) => state.sidebar);
	const { isOpen: isOpenModal } = useSelector((state) => state.modal);
	const { cartItems } = useSelector((state) => state.cart);

	useEffect(() => {
		dispatch(calculateTotal());
	}, [cartItems]);

	return (
		<>
			<div className="overflow-hidden">
				<Router>
					<Header />
					<AnimatePresence>{isOpenSidebar && <Sidebar />}</AnimatePresence>
					<AnimatePresence>{isOpenModal && <Modal />}</AnimatePresence>
					{/* <Sidebar /> */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/products/:id" element={<ProductDetails />} />
					</Routes>
					<Footer />
				</Router>
			</div>
		</>
	);
}

export default App;
