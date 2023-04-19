import React from 'react';
import { Link } from 'react-router-dom';

function VideoGridItem({ video = {} }) {
	const { id, thumbnail, title, description, author, avatar, date, duration, views, link } = video;
	return (
		<div className="col-span-12 sm:col-span-6 md:col-span-3 group">
			<div className="w-full flex flex-col">
				<div className="relative overflow-hidden">
					<Link to={`videos/${id}`}>
						<img src={thumbnail} className="w-full h-auto group-hover:scale-[1.03] duration-300" alt={title} />
					</Link>

					<p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">{duration}</p>
				</div>

				<div className="flex flex-row mt-2 gap-2">
					<Link to={`videos/${id}`} className="shrink-0">
						<img src={avatar} className="rounded-full h-6 w-6" alt={author} />
					</Link>

					<div className="flex flex-col">
						<Link to={`videos/${id}`}>
							<p className="text-slate-900 text-sm font-semibold">{title}</p>
						</Link>
						<Link to={`videos/${id}`} className="text-gray-400 text-xs mt-2 hover:text-gray-600">
							{author}
						</Link>
						<p className="text-gray-400 text-xs mt-1">
							{views} views . {date}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VideoGridItem;
