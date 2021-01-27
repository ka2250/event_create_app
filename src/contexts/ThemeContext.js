import { createContext, useState } from "react";

const themes = {
	light: {
		background: "white",
		color: "#4f4f4f",
	},
	dark: {
		background: "#4f4f4f",
		color: "white",
	},
};

const initialState = {
	dark: false,
	theme: themes.light,
	toggle: () => {},
};

const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {
	const [dark, setDark] = useState(false);

	const toggle = () => {
		const isDark = !dark;
		localStorage.setItem("dark", JSON.stringify(isDark));
		setDark(isDark);
	};

	const theme = dark ? themes.light : themes.dark;

	return (
		<ThemeContext.Provider value={{ theme, dark, toggle }}>
			{children}
		</ThemeContext.Provider>
	);
};

export { ThemeContext, ThemeProvider };
