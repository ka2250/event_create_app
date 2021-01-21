import {
    ADD_OPERATION_LOG,
    DELETE_ALL_OPERATION_LOGS
} from "../actions";

const operationReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_OPERATION_LOG:
            const opeationLog = {
                description: action.description,
                operatedAt: action.operatedAt
            }

            return [opeationLog, ...state];

        case DELETE_ALL_OPERATION_LOGS:
            return [];

        default:
            return state;
    };
};

export default operationReducer;