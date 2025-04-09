import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "../constants.js";

export const addTodo = (name) => ({
    type: ADD_TODO,
    payload: name,
})

export const removeTodo = (id) => ({
    type: REMOVE_TODO,
    payload:id,
})

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload:id,
})
