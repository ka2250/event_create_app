import React from "react";

const EventForm = () => {
    return (
        <>
            <form className="mt-4">
                <label className="mr-2" for="input-event">create event : </label>
                <div class="d-flex justify-content-around">
                    <input type="text" className="form-control" id="input-event" placeholder="input your event..." />
                    <button type="button" class="btn btn-outline-secondary ml-3">Add</button>
                </div>
            </form>
        </>
    );
}

export default EventForm;