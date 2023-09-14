import { useEffect, useState } from "react";
import ProgressBar from "./components/progress-bar/progressBar";

function App() {
	const [value, setValue] = useState(0);
	const [complete, setComplete] = useState(false);

	useEffect(() => {
		setInterval(() => {
			setValue((val) => val + 1);
		}, 50);
	}, []);

	return (
		<div className="px-4 max-w-7xl mx-auto flex flex-col justify-center items-center">
			<div className="text-3xl">Progress Bar</div>
			<br />
			<ProgressBar value={value} onComplete={() => setComplete(true)} />
			<br />
			{!complete ? "Loading ..." : "Completed"}
		</div>
	);
}

export default App;
