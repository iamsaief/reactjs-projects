import React from 'react';
import LikeIcon from '../../assets/like.svg';
import UnLikeIcon from '../../assets/unlike.svg';

function LikeUnlike(props) {
	return (
		<div className="flex gap-5 w-48 justify-end">
			<div className="flex gap-1">
				<div className="shrink-0">
					<img className="w-5 block" src={LikeIcon} alt="Like" />
				</div>
				<div className="text-sm leading-[1.7142857] text-slate-600">100K</div>
			</div>
			<div className="flex gap-1 items-center">
				<div className="shrink-0">
					<img className="w-5 block" src={UnLikeIcon} alt="Unlike" />
				</div>
				<div className="text-sm leading-[1.7142857] text-slate-600">100K</div>
			</div>
		</div>
	);
}

export default LikeUnlike;
