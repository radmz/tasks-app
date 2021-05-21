import * as api from '../api';
import { GET_TASKS, CREATE_TASK, DELETE_TASK, LOADING, SENDING_DATA } from "./consts";

export const get = () => async (dispatch) => {
    dispatch({type: LOADING })
    try {
        const { data } = await api.getTasks();
        dispatch({ type: GET_TASKS, payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const create = (values, setErrors, closeModal) => async (dispatch) => {
    dispatch({type: SENDING_DATA })
    try {
        const { data } = await api.createTask(values);
        dispatch({ type: CREATE_TASK, payload: data })
        closeModal();
    } catch (error) {
        console.log(error);
        if(error.response.status === 400) return showErrors(error.response.data, setErrors)
    }
}

export const remove = (id) => async (dispatch) => {
    try {
        await api.deleteTask(id)
        dispatch({ type: DELETE_TASK, payload: id })
    } catch (error) {
        console.log(error);
    }
}

const showErrors = (data, setError) => {
    Object.keys(data).forEach(function eachKey(key){
        return setError(key, { type: 'error', message: data[key] })
    })
}
