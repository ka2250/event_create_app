import React, { useContext } from "react";
import { DELETE_ALL_OPERATION_LOGS } from "../actions";
import Operationlog from "./OperationLog";
import AppContext from "../contexts/AppContext";

const OperatedLogsList = () => {
    const { state, dispatch } = useContext(AppContext);

    const deleteAlloperationlogs = e => {
        e.preventDefault();
        const result = window.confirm('すべてのログを削除しますか？');
        if (result) {
            dispatch({
                type: DELETE_ALL_OPERATION_LOGS,
            })
        }
    };

    return (
        <div className="log-list mt-5">
            <div className="d-flex justify-content-between mb-2">
                <h5>Logs</h5>
                <button
                    type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={deleteAlloperationlogs}
                    disabled={state.length === 0}
                >DELETE LOGS</button>
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
                    {
                        state.operationReducer.map((operationLog, index) => (
                            <Operationlog index={index} operationLog={operationLog} />
                        ))

                    }
                </tbody>
            </table>
        </div>
    );
}

export default OperatedLogsList;