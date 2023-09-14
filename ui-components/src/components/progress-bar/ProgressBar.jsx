import { useEffect, useState } from "react";
import "./style.scss";

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
	const [percentage, setPercentage] = useState(value);

	useEffect(() => {
		setPercentage(Math.min(100, Math.max(value, 0)));

		if (value >= 100) {
			onComplete();
		}
	}, [value]);

	return (
		<div className="progress-bar">
			<span className="pb-text" style={{ color: `${percentage >= 50 ? "white" : "initial"}` }}>
				{percentage.toFixed()}%
			</span>
			<div
				// style={{ width: `${percentage}%` }}
				style={{ scale: `${percentage / 100} 1`, transformOrigin: "left" }}
				className="pb-progress"
				aria-valuemin={0}
				aria-valuemax={100}
				aria-valuenow={percentage}
				role="progressbar"
			/>
		</div>
	);
};

export default ProgressBar;
