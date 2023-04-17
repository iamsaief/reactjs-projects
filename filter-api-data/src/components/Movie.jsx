import { motion } from 'framer-motion';

const Movie = ({ movie }) => {
	const { title, poster_path, release_date } = movie;

	const date = new Date(release_date);
	const options = { year: 'numeric', month: 'short', day: 'numeric' };
	const formattedDate = date.toLocaleDateString('en-US', options);

	return (
		<motion.div
			layout
			animate={{ opacity: 1 }}
			initial={{ opacity: 0 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.3 }}
		>
			<img className="rounded-2xl" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
			<h3 className="text-lg font-bold mt-2">{title}</h3>
			<p className="text-xs">{formattedDate}</p>
		</motion.div>
	);
};

export default Movie;
