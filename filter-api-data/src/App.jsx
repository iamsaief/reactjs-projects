import { useEffect, useState } from 'react';
import Movie from './components/Movie';
import Filter from './components/Filter';
import { motion, AnimatePresence } from 'framer-motion';

const apiKey = import.meta.env.VITE_API_KEY;

function App() {
	const [movies, setMovies] = useState([]);
	const [filtered, setFiltered] = useState([]);
	const [activeGenre, setActiveGenre] = useState(0);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`);

		const movies = await data.json();
		setMovies(movies.results);
		setFiltered(movies.results);
	};

	return (
		<div className="max-w-7xl mx-auto sm:px-16 px-6 sm:py-16 py-10">
			<Filter movies={movies} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />

			<motion.div
				layout
				className="movies-list grid gap-x-4 gap-y-8 grid-cols-[repeat(auto-fit,minmax(150px,1fr))] mt-6"
			>
				<AnimatePresence>
					{filtered.map((movie) => {
						return <Movie movie={movie} key={movie.id} />;
					})}
				</AnimatePresence>
			</motion.div>
		</div>
	);
}

export default App;
