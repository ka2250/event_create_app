import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap読み込み
import AppContext from "./contexts/AppContext";
import reducers from "./reducers";

import Header from "./components/Header";
import Form from "./components/Form";
import EventsList from "./components/EventsList";
import OperatedLogsList from "./components/OperatedLogsList";

function App() {
	const initialState = {
		eventReducer: [],
		operationReducer: [],
	};
	const [state, dispatch] = useReducer(reducers, initialState);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			<div className="App">
				<div className="container">
					<Header />
					<Form />
					<EventsList />
					<OperatedLogsList />
				</div>
			</div>
		</AppContext.Provider>
	);
}

export default App;
