import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import Event from "./Event";
import { currentTime } from "../util";
import { ADD_OPERATION_LOG } from "../actions";

const EventsList = () => {
	const { state, dispatch } = useContext(AppContext);

	const deleteAllEvent = (e) => {
		e.preventDefault();
		const result = window.confirm("すべてのイベントを削除しますか？");
		if (result) {
			dispatch({
				type: "DELETE_ALL_EVENT",
			});
			dispatch({
				type: ADD_OPERATION_LOG,
				description: "すべてのイベントを削除しました。",
				operatedAt: currentTime(),
			});
		}
	};

	return (
		<>
			<div className="event-list mt-5">
				<div className="d-flex justify-content-between mb-2">
					<h5>Events</h5>
					<button
						type="button"
						className="btn btn-danger btn-sm"
						onClick={deleteAllEvent}
						disabled={state.eventReducer.length === 0}
					>
						DELETE EVENTS
					</button>
				</div>
			</div>

			<table className="table table-hover">
				<thead>
					<tr>
						<th className="text-center">ID</th>
						<th>Description</th>
						<th className="text-center">Edit</th>
					</tr>
				</thead>
				<tbody>
					{state.eventReducer.map((event, index) => (
						<Event key={index} index={index} event={event} />
					))}
				</tbody>
			</table>
		</>
	);
};

export default EventsList;
