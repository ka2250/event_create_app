import React, { useContext } from "react";
import { ADD_OPERATION_LOG, DELETE_EVENT } from "../actions";
import AppContext from "../contexts/AppContext";
import { currentTime } from "../util";

const Event = ({ event, index }) => {
	const { dispatch } = useContext(AppContext);
	const id = event.id;

	const delleteEvent = (e) => {
		e.preventDefault();
		const result = window.confirm("イベントを本当に削除しますか？");
		if (result) {
			dispatch({
				type: DELETE_EVENT,
				id,
			});
			dispatch({
				type: ADD_OPERATION_LOG,
				description: `IDが ' ${id} ' のイベントを削除しました`,
				operatedAt: currentTime(),
			});
		}
	};

	return (
		<tr key={index}>
			<th className="text-center">{index + 1}</th>
			<td>{event.title}</td>
			<td className="text-center">
				<button
					type="button"
					class="btn btn-outline-danger btn-sm"
					onClick={delleteEvent}
				>
					DELETE
				</button>
			</td>
		</tr>
	);
};

export default Event;
