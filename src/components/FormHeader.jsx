import React, { useState } from "react";


const FormHeader = () => {
    const [title, setTitle] = useState('');

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
                        type="button"
                        className="btn btn-outline-secondary ml-3"
                    >Add</button>
                </div>
            </form>
        </>
    );
}

export default FormHeader;