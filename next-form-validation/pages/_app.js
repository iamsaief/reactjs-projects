import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps, router }) {
	return (
		<AnimatePresence mode="wait" initial={false}>
			<Component key={router.pathname} {...pageProps} />
		</AnimatePresence>
	);
}
