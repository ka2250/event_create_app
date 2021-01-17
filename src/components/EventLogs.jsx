import React from "react";

const EventLogs = () => {
    return (
        <div className="log-list mt-5">
            <div className="d-flex justify-content-between mb-2">
                <h5>Logs</h5>
                <button type="button" class="btn btn-secondary btn-sm">DELETE LOGS</button>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="text-center">ID</th>
                        <th>Delete Event</th>
                        <th className="text-center">Operated</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th className="text-center">1</th>
                        <td>aaaaaaaaaaaaaaaaaa</td>
                        <td className="text-center">2021/1/17</td>
                    </tr>
                    <tr>
                        <th className="text-center">2</th>
                        <td>aaaaaaaaaaaaaaaaaa</td>
                        <td className="text-center">2021/1/17</td>
                    </tr><tr>
                        <th className="text-center">3</th>
                        <td>aaaaaaaaaaaaaaaaaa</td>
                        <td className="text-center">2021/1/17</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default EventLogs;