import React, { useContext } from "react";

import Brightness4SharpIcon from "@material-ui/icons/Brightness4Sharp";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import { ThemeContext } from "../contexts/ThemeContext";

const Header = () => {
	const { toggle, dark } = useContext(ThemeContext);
	return (
		<header className="pt-5 d-flex justify-content-between align-items-center">
			<div>
				<h4>Creat Event App</h4>
				<p>using react hooks.</p>
			</div>
			<button className="btn btn btn-light" onClick={toggle}>
				{!dark ? (
					<Brightness2Icon fontSize="small" />
				) : (
					<Brightness4SharpIcon fontSize="small" />
				)}
			</button>
		</header>
	);
};

export default Header;
