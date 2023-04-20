import React, { useEffect } from 'react';
import VideoGridItem from './VideoGridItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideos } from '../../features/videos/videosSlice';
import Loading from '../ui/Loading';

function VideoGrid() {
	const dispatch = useDispatch();
	const { videos, isLoading, isError, error } = useSelector((state) => state.videos);
	const { tags, search } = useSelector((state) => state.filter);

	useEffect(() => {
		dispatch(fetchVideos({ tags, search }));
	}, [dispatch, tags, search]);

	// logic for what to render
	let content;
	if (isLoading) {
		content = <Loading />;
	}
	if (!isLoading && isError) {
		content = <div className="col-span-12">{error}</div>;
	}
	if (!isError && !isLoading && videos?.length === 0) {
		content = <div className="col-span-12">No videos found!</div>;
	}
	if (!isError && !isLoading && videos?.length > 0) {
		content = videos.map((video) => <VideoGridItem key={video.id} video={video} />);
	}

	return (
		<section className="pt-12">
			<div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-4 xl:px-0 min-h-[300px]">{content}</div>
		</section>
	);
}

export default VideoGrid;
