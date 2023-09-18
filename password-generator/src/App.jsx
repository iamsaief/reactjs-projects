import { useState } from "react";

function App() {
	const [checkboxData, setCheckboxData] = useState([
		{ id: "char-uppercase", label: "Include Uppercase Letters", checked: true },
		{ id: "char-lowercase", label: "Include Lowercase Letters", checked: false },
		{ id: "char-numbers", label: "Include Numbers", checked: false },
		{ id: "char-symbols", label: "Include Symbol", checked: false },
	]);
	return (
		<>
			<div className="psg bg-slate-900 text-white/70 p-6 m-4 rounded">
				{/* Password Text and copy btn */}
				<div className="psg__header flex justify-between items-center">
					<div className="psg__title text-3xl font-bold text-white/80">23fhGRjhfe^&63</div>
					<button className="psg__copy-btn px-3.5 py-2.5 shadow-sm bg-cyan-500 text-white text-sm rounded uppercase ring-offset-2 focus:ring-2 ring-offset-slate-900 focus:ring-cyan-500 outline-none leading-none">
						copy
					</button>
				</div>
				{/* Password length and slider */}
				<div className="psg__char-length mt-6">
					<div className="flex justify-between items-center text-xl font-medium">
						<span>Character Length</span>
						<span>5</span>
					</div>
					<input
						className="w-full h-[4px] bg-slate-600 rounded-lg appearance-none accent-cyan-500 cursor-pointer range-sm mt-4"
						type="range"
					/>
				</div>
				{/* Checkboxes */}
				<div className="psg__checkboxes grid grid-cols-2 gap-6 mt-7">
					{checkboxData.map((checkbox) => {
						return (
							<div key={checkbox.id} className="flex gap-2 align-top leading-none">
								<input
									type="checkbox"
									id={checkbox.id}
									checked={checkbox.checked}
									className="rounded border-white/70 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-slate-900 bg-transparent cursor-pointer"
								/>
								<label htmlFor={checkbox.id} className="cursor-pointer">
									{checkbox.label}
								</label>
							</div>
						);
					})}
				</div>
				{/* Strength */}
				<div className="psg__strength flex justify-between items-center mt-6">
					<span>Strength:</span>
					<span className="font-semibold">Medium</span>
				</div>
				{/* Generate btn */}
				<button className="psg__generate-btn w-full mt-4 p-4 shadow-sm bg-cyan-500 text-white text-xl rounded uppercase ring-offset-2 focus:ring-2 ring-offset-slate-900 focus:ring-cyan-500 outline-none font-semibold">
					Generate Password
				</button>
			</div>
		</>
	);
}

export default App;
