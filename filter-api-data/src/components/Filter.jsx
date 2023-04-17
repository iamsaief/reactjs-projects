import { useEffect } from 'react';

const Filter = ({ movies, setFiltered, activeGenre, setActiveGenre }) => {
	useEffect(() => {
		if (activeGenre === 0) {
			setFiltered(movies);
			return;
		}
		const filtered = movies.filter((movie) => movie.genre_ids.includes(activeGenre));
		setFiltered(filtered);
	}, [activeGenre]);

	return (
		<div className="flex gap-x-3">
			<button
				onClick={() => setActiveGenre(0)}
				className={`${
					activeGenre === 0 ? 'bg-teal-400 border-teal-300' : ''
				} inline-flex border rounded-xl px-3 py-1 hover:bg-teal-400 hover:border-teal-300`}
			>
				All
			</button>
			<button
				onClick={() => setActiveGenre(35)}
				className={`${
					activeGenre === 35 ? 'bg-teal-400 border-teal-300' : ''
				} inline-flex border rounded-xl px-3 py-1 hover:bg-teal-400 hover:border-teal-300 `}
			>
				Comedy
			</button>
			<button
				onClick={() => setActiveGenre(28)}
				className={`${
					activeGenre === 28 ? 'bg-teal-400 border-teal-300' : ''
				} inline-flex border rounded-xl px-3 py-1 hover:bg-teal-400 hover:border-teal-300 `}
			>
				Action
			</button>
		</div>
	);
};

export default Filter;
