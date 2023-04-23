import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import ProductProvider from './contexts/ProductContext';
import SidebarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CartProvider>
			<SidebarProvider>
				<ProductProvider>
					<App />
				</ProductProvider>
			</SidebarProvider>
		</CartProvider>
	</React.StrictMode>
);
