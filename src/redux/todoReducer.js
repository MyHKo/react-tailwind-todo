import {nanoid} from "nanoid";

const initialState = {
    todos: []
}

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [...state.todos,{
                    id:nanoid(),
                    name: action.payload,
                    done: false
                        }
                    ]
            }
        case 'REMOVE_TODO':
            return {
                todos: state.todos.filter(task => task.id !== action.payload)
            }
        default:
            return state;
    }
}

export default todoReducer
