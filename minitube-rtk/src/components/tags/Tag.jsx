import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tagsRemoved, tagsSelected } from '../../features/filter/filterSlice';

function Tag({ title }) {
	const dispatch = useDispatch();
	const { tags: selectedTags } = useSelector((state) => state.filter);

	const isSelected = selectedTags.includes(title) ? true : false;

	const handleSelect = () => {
		if (isSelected) {
			dispatch(tagsRemoved(title));
		} else {
			dispatch(tagsSelected(title));
		}
	};

	const styles = isSelected
		? 'bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer'
		: 'bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer';

	return (
		<div className={styles} onClick={handleSelect}>
			{title}
		</div>
	);
}

export default Tag;
