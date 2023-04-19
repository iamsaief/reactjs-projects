import React from 'react';
import Tag from './Tag';

function Tags(props) {
	return (
		<section>
			<div className="max-w-7xl mx-auto px-4 xl:px-0 py-6 flex gap-2 border-b overflow-y-auto">
				<Tag />
				<Tag />
			</div>
		</section>
	);
}

export default Tags;
