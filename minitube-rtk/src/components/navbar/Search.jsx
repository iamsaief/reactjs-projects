import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searched } from '../../features/filter/filterSlice';
import { useMatch, useNavigate } from 'react-router-dom';

function Search(props) {
	const { search } = useSelector((state) => state.filter);
	const [input, setInput] = useState(search);
	const dispatch = useDispatch();
	const match = useMatch('/');
	const navigate = useNavigate();

	console.log(match);

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(searched(input));

		// if user not in home page, redirect to home page
		if (!match) {
			navigate('/');
		}

		setInput('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				className="outline-none border-none mr-2"
				type="search"
				name="search"
				placeholder="Search"
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
		</form>
	);
}

export default Search;
