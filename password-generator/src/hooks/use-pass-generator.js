import { useState } from "react";

const usePasswordGenerator = () => {
	const [password, setPassword] = useState("");
	const [errorMsg, setErrorMsg] = useState("");

	const generatePassword = (checkboxData, charLength) => {
		let charset = "",
			generatedPassword = "";

		const selectedOptions = checkboxData.filter((checkbox) => checkbox.checked);

		if (selectedOptions.length === 0) {
			setErrorMsg("Select at least one option!");
			setPassword("");
			return;
		}

		selectedOptions.forEach((option) => {
			switch (option.id) {
				case "char-uppercase":
					charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
					break;
				case "char-lowercase":
					charset += "abcdefghijklmnopqrstuvwxyz";
					break;
				case "char-numbers":
					charset += "0123456789";
					break;
				case "char-symbols":
					charset += `!@#$%^&*()_±=[]{};':",.<>/?`;
					break;
				default:
					break;
			}
		});

		for (let i = 0; i < charLength; i++) {
			const randomIndex = Math.floor(Math.random() * charset.length);
			generatedPassword += charset[randomIndex];
		}

		setPassword(generatedPassword);
		setErrorMsg("");
	};

	return { password, errorMsg, generatePassword };
};

export default usePasswordGenerator;
