import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {id: nanoid(), name:action.payload, done:false}
            state.push(newTodo);
        },
        removeTodo: (state, action) => {
            state = state.filter(todo => todo.id !== action.payload);
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice;
