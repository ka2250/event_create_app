import React from "react";

const Event = ({ event, index }) => {
    return (
        <tr key={index}>
            <th className="text-center">{index + 1}</th>
            <td>{event.title}</td>
            <td className="text-center">Edit</td>
        </tr>
    );
}

export default Event;