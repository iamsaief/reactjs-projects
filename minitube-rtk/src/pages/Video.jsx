import React from 'react';
import Player from '../components/description/Player';
import VideoDescription from '../components/description/VideoDescription';
import RelatedVideoList from '../components/list/RelatedVideoList';

function Video(props) {
	return (
		<section className="pt-6 pb-20">
			<div className="mx-auto max-w-7xl px-4 xl:px-0 pb-20 min-h-[400px]">
				<div className="grid grid-cols-3 gap-2 lg:gap-8">
					<div className="col-span-full w-full space-y-8 lg:col-span-2">
						{/* <!-- video player --> */}
						<Player />

						{/* <!-- video description --> */}
						<VideoDescription />
					</div>

					{/* <!-- related videos --> */}
					<RelatedVideoList />
				</div>
			</div>
		</section>
	);
}

export default Video;
