const Checkbox = ({ id, label, onChange, checked }) => {
	return (
		<div key={id} className="flex gap-2 align-top leading-none">
			<input
				type="checkbox"
				id={id}
				checked={checked}
				className="rounded border-white/70 text-cyan-500 focus:ring-cyan-500 focus:ring-offset-slate-900 bg-transparent cursor-pointer"
				onChange={onChange}
			/>
			<label htmlFor={id} className="cursor-pointer">
				{label}
			</label>
		</div>
	);
};

export default Checkbox;
