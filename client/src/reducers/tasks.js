import { GET_TASKS, CREATE_TASK, DELETE_TASK, LOADING, SENDING_DATA } from "../actions/consts";

const initialState = {
    loading: false,
    sending: false,
    tasks: {}
};

const tasks = (state = initialState, action) => {
    switch (action.type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: action.payload,
                loading: false
            }
            
        case CREATE_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
                sending: false
            }

        case DELETE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(t => t._id !== action.payload),
                sending: false
            }

        case LOADING:
            return {
                ...state,
                loading: true
            }

        case SENDING_DATA:
            return {
                ...state,
                sending: true
            }

        default:
            return state;
    }
}

export default tasks;