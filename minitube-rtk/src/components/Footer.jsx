import React from 'react';

function Footer(props) {
	return (
		<footer className="pt-6">
			<div className="max-w-7xl mx-auto px-4 xl:px-0 py-6 flex justify-between gap-2 border-t text-sm text-slate-400">
				<div>Copyright 2022 Learn with Sumit.</div>
				<div>
					<a href="https://youtube.com/learnwithsumit" target="_blank" rel="noreferrer">
						YouTube Channel
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
