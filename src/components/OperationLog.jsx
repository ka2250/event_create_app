import React from "react";

const Operationlog = ({ operationLog, index }) => {
	return (
		<tr>
			<th className="text-center">{index + 1}</th>
			<td>{operationLog.description}</td>
			<td className="text-center">{operationLog.operatedAt}</td>
		</tr>
	);
};

export default Operationlog;
