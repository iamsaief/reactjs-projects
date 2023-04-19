import React, { useEffect } from 'react';
import Player from '../components/description/Player';
import VideoDescription from '../components/description/VideoDescription';
import RelatedVideoList from '../components/list/RelatedVideoList';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchVideo } from '../features/video/videoSlice';
import Loading from '../components/ui/Loading';

function Video() {
	const dispatch = useDispatch();
	const { video, isLoading, isError, error } = useSelector((state) => state.video);
	const { videoId } = useParams();

	useEffect(() => {
		dispatch(fetchVideo(videoId));
	}, [dispatch, videoId]);

	const { link, title, id, tags } = video || {};

	// decide what to render
	let content = null;
	if (isLoading) {
		content = <Loading />;
	}
	if (!isLoading && isError) {
		content = <div className="col-span-12">{error}</div>;
	}
	if (!isError && !isLoading && !video?.id) {
		content = <div className="col-span-12">No video found!</div>;
	}
	if (!isError && !isLoading && video?.id) {
		content = (
			<div className="grid grid-cols-3 gap-2 lg:gap-8">
				<div className="col-span-full w-full space-y-8 lg:col-span-2 pb-5 lg:pb-0">
					{/* <!-- video player --> */}
					<Player link={link} title={title} />

					{/* <!-- video description --> */}
					<VideoDescription video={video} />
				</div>

				{/* <!-- related videos --> */}
				<RelatedVideoList currentVideoId={id} tags={tags} />
			</div>
		);
	}

	return (
		<section className="pt-6 pb-20">
			<div className="mx-auto max-w-7xl px-4 xl:px-0 pb-20 min-h-[400px]">{content}</div>
		</section>
	);
}

export default Video;
