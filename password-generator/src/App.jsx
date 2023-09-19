import { useState } from "react";
import usePasswordGenerator from "./hooks/use-pass-generator";
import StrengthIndicator from "./components/StrengthIndicator";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";

function App() {
	const [charLength, setCharLength] = useState(4);
	const [checkboxData, setCheckboxData] = useState([
		{ id: "char-uppercase", label: "Include Uppercase Letters", checked: false },
		{ id: "char-lowercase", label: "Include Lowercase Letters", checked: false },
		{ id: "char-numbers", label: "Include Numbers", checked: false },
		{ id: "char-symbols", label: "Include Symbol", checked: false },
	]);
	const [copied, setCopied] = useState(false);

	const handleCheckBoxChange = (index) => {
		const updatedCheckBoxes = [...checkboxData];
		updatedCheckBoxes[index].checked = !updatedCheckBoxes[index].checked;
		setCheckboxData(updatedCheckBoxes);
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(password);
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 1000);
	};

	const { password, errorMsg, generatePassword } = usePasswordGenerator();

	return (
		<div className="m-4">
			<div className="psg bg-slate-900 text-white/70 p-6 rounded max-w-[600px] mx-auto">
				{/* Password and copy btn */}
				{password && (
					<div className="psg__header flex justify-between items-center mb-6">
						<div className="psg__title text-3xl font-bold text-white/80">{password}</div>
						<Button
							customClass="psg__copy-btn px-3.5 py-2.5 text-sm"
							onClick={handleCopy}
							label={copied ? "copied" : "copy"}
						/>
					</div>
				)}
				{/* Password length and slider */}
				<div className="psg__char-length">
					<div className="flex justify-between items-center text-xl font-medium">
						<span>Character Length</span>
						<span>{charLength}</span>
					</div>
					<input
						className="w-full h-[4px] bg-slate-600 rounded-lg appearance-none accent-cyan-500 cursor-pointer range-sm mt-4 ring-offset-2 focus-visible:ring-2 ring-offset-slate-900 focus-visible:ring-cyan-500 outline-none"
						type="range"
						min={4}
						max={20}
						value={charLength}
						onChange={(e) => setCharLength(e.target.value)}
					/>
				</div>
				{/* Checkboxes */}
				<div className="psg__checkboxes grid grid-cols-2 gap-6 mt-7">
					{checkboxData.map((checkbox, index) => {
						const { id, label, checked } = checkbox;
						return (
							<Checkbox key={id} id={id} checked={checked} label={label} onChange={() => handleCheckBoxChange(index)} />
						);
					})}
				</div>
				{/* Strength */}
				<StrengthIndicator password={password} />
				{/* Error handling */}
				{errorMsg && <div className="psg__error-msg text-sm text-red-500 mt-4">{errorMsg}</div>}
				{/* Generate btn */}
				<Button
					label="Generate Password"
					customClass="psg__generate-btn w-full mt-7 p-5 text-xl font-semibold"
					onClick={() => generatePassword(checkboxData, charLength)}
				/>
			</div>
		</div>
	);
}

export default App;
