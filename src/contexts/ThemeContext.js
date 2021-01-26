import { createContext, useEffect, useState } from "react";

const themes = {
	light: {
		background: "white",
		color: "#2A2A2A",
	},
	dark: {
		background: "#2A2A2A",
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

	useEffect(() => {
		const isDark = localStorage.getItem("dark") === true;
		setDark(isDark);
	}, [dark]);

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
