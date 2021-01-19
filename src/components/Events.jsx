import React from "react";

const Events = () => {

    return (
        <div className="event-list mt-5">
            <div className="d-flex justify-content-between mb-2">
                <h5>Events</h5>
                <button type="button" className="btn btn-danger btn-sm">DELETE EVENTS</button>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="text-center">1</th>

                        <th>aaaaaaaa</th>
                        <th className="text-center">Edit</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th className="text-center">1</th>
                        <td>aaaaaaaaaaaaaaaaaa</td>
                        <td className="text-center">
                            edit
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Events;