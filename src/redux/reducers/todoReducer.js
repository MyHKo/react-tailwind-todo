import {nanoid} from "nanoid";
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from "../constants.js";

const initialState = {
    todos: []
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                todos: [...state.todos,{
                    id:nanoid(),
                    name: action.payload,
                    done: false
                        }
                    ]
            }
        case REMOVE_TODO:
            return {
                todos: state.todos.filter(task => task.id !== action.payload)
            }
        case TOGGLE_TODO:
            return {
                todos: state.todos.map((todo) => {
                    if (todo.id === action.payload) {
                        return { ...todo, done: !todo.done };
                    } else {
                        return todo;
                    }
                })
            }
        default:
            return state;
    }
}

export default todoReducer
