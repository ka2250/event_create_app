import React, { useState, useReducer } from "react";

import reducer from "../reducers";

const FormAndList = () => {
    const [state, dispatch] = useReducer(reducer, []);
    const [title, setTitle] = useState('');

    const unClear = title === "";

    const addEvent = e => {
        e.preventDefault();
        dispatch({
            type: "CREATE_EVENT",
            title
        })
        setTitle('');
    }

    const deleteAllEvent = e => {
        e.preventDefault();
        dispatch({
            type: "DELETE_ALL_EVENT",
        })
    }

    return (
        <>
            <header className="mt-5 d-flex justify-content-between align-items-center">
                <div>
                    <h4>Creat Event App</h4>
                    <p>using react hooks.</p>
                </div>

                <button className="btn btn-info btn-sm">Login</button>
            </header>

            <form className="mt-4">
                <label className="mr-2" htmlFor="input-event">create event : </label>
                <div className="d-flex justify-content-around">
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                        id="input-event"
                        placeholder="input your event..."
                    />
                    <button
                        disabled={unClear}
                        type="button"
                        className="btn btn-outline-secondary ml-3"
                        onClick={addEvent}
                    >Add</button>
                </div>
            </form>


            <div className="event-list mt-5">
                <div className="d-flex justify-content-between mb-2">
                    <h5>Events</h5>
                    <button
                        type="button"
                        className="btn btn-danger btn-sm"
                        onClick={deleteAllEvent}
                        disabled={state.length === 0}
                    >DELETE EVENTS</button>
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
                        {
                            state.map((event, index) => {
                                return (
                                    <tr key={index}>
                                        <th className="text-center">{index + 1}</th>
                                        <td>{event.title}</td>
                                        <td className="text-center"> Edit</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default FormAndList;