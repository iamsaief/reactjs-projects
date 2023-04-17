import { motion as m } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

export default function Success() {
	const router = useRouter();
	const [pieces, setPieces] = useState(300);
	const { name, email, country, terms } = router.query;

	const stopConfetti = () => {
		setTimeout(() => {
			setPieces(0);
		}, 3000);
	};

	useEffect(() => {
		stopConfetti();
	}, []);

	return (
		<m.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="container mx-auto p-4 h-screen flex items-center justify-center "
		>
			<div className="p-10 bg-white text-gray-700 rounded-lg sm:w-4/5">
				<h1 className="text-2xl sm:text-3xl text-gray-500">Thanks for submitting the form {name} 🌟</h1>
				<p className="sm:text-lg text-gray-500 mt-3">
					We'll send you a confirmation email to you at <span className="italic">{email}</span>. We will get back to you
					as soon as we can!
				</p>
			</div>
			<Confetti numberOfPieces={pieces} gravity={0.1} />
		</m.main>
	);
}
