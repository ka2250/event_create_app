import React, { useContext, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap読み込み
import AppContext from "./contexts/AppContext";
import reducers from "./reducers";

import Header from "./components/Header";
import Form from "./components/Form";
import EventsList from "./components/EventsList";
import OperatedLogsList from "./components/OperatedLogsList";
import { ThemeContext } from "./contexts/ThemeContext";
import "./style.css";

function App() {
	const initialState = {
		eventReducer: [],
		operationReducer: [],
	};
	const [state, dispatch] = useReducer(reducers, initialState);

	const { theme } = useContext(ThemeContext);

	const style = {
		backgroundColor: theme.background,
		color: theme.color,
	};

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			<div className="App" style={style}>
				<div className="container">
					<div className={theme}>
						<Header />
						<Form />
						<EventsList />
						<OperatedLogsList />
					</div>
				</div>
			</div>
		</AppContext.Provider>
	);
}

export default App;
