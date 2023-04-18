import React from 'react';

function Player(props) {
	return (
		<iframe
			width="100%"
			className="aspect-video"
			src="https://www.youtube-nocookie.com/embed/6O4s7v28nlw"
			title="Some video title"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
		></iframe>
	);
}

export default Player;
