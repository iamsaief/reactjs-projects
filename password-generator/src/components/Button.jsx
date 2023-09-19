const Button = ({ label, customClass, onClick }) => {
	return (
		<button
			className={`${customClass} shadow-sm bg-cyan-500 text-white rounded uppercase ring-offset-2 focus:ring-2 ring-offset-slate-900 focus:ring-cyan-500 outline-none leading-none`}
			onClick={onClick}
		>
			{label}
		</button>
	);
};

export default Button;
