import Brightness4SharpIcon from "@material-ui/icons/Brightness4Sharp";

const Header = () => {
	return (
		<header className="mt-5 d-flex justify-content-between align-items-center">
			<div>
				<h4>Creat Event App</h4>
				<p>using react hooks.</p>
			</div>
			<button className="btn btn btn-light">
				<Brightness4SharpIcon fontSize="small" />
			</button>
		</header>
	);
};

export default Header;
