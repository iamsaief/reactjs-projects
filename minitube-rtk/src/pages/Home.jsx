import React from 'react';
import Tags from '../components/tags/Tags';
import VideoGrid from '../components/grid/VideoGrid';
import Pagination from '../components/ui/Pagination';

function Home(props) {
	return (
		<>
			<Tags />
			<VideoGrid />
			<Pagination />
		</>
	);
}

export default Home;
