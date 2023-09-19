const StrengthIndicator = ({ password = "" }) => {
	const getPasswordLength = () => {
		const passwordLength = password.length;

		if (passwordLength < 1) {
			return "";
		} else if (passwordLength < 4) {
			return <span className="font-semibold text-red-500">Very Weak</span>;
		} else if (passwordLength < 8) {
			return <span className="font-semibold text-yellow-500">Poor</span>;
		} else if (passwordLength < 12) {
			return <span className="font-semibold text-orange-500">Medium</span>;
		} else if (passwordLength < 16) {
			return <span className="font-semibold text-lime-600">Strong</span>;
		} else {
			return <span className="font-semibold text-green-500">Very Strong</span>;
		}
	};

	const passwordStrength = getPasswordLength();

	if (!passwordStrength) return <></>;

	return (
		<div className="psg__strength flex justify-between items-center mt-6">
			<span>Strength:</span>
			{passwordStrength}
		</div>
	);
};

export default StrengthIndicator;
