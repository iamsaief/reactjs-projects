import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotal } from './features/cart/cartSlice';
import { useEffect } from 'react';

function App() {
	const dispatch = useDispatch();
	const { isOpen } = useSelector((state) => state.sidebar);
	const { cartItems } = useSelector((state) => state.cart);

	useEffect(() => {
		dispatch(calculateTotal());
	}, [cartItems]);

	return (
		<>
			<div className="overflow-hidden">
				<Router>
					<Header />
					{isOpen && <Sidebar />}
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
