import {
    CREATE_EVENT,
} from "../actions/index";

const eventReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_EVENT:
            const event = { title: action.title }
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1

            return [...state, { id, ...event }]

        default:
            return state
    };
};

export default eventReducer;