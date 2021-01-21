import React, { useState, useContext } from "react";
import AppContext from "../contexts/AppContext";
import { currentTime } from "../util";
import { ADD_OPERATION_LOG } from "../actions";

const Form = () => {

    const { dispatch } = useContext(AppContext);
    const [title, setTitle] = useState('');

    const unClear = title === "";

    const addEvent = e => {
        e.preventDefault();
        dispatch({
            type: "CREATE_EVENT",
            title
        })
        dispatch({
            type: ADD_OPERATION_LOG,
            description: `イベントを作成しました`,
            operatedAt: currentTime()
        })
        setTitle('');
    }

    return (
        <>

            <form className="mt-4">
                <div className="d-flex justify-content-around">
                    <input
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
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
        </>
    );
}

export default Form;