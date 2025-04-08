import {nanoid} from "nanoid";

const initialState = {
    todos: []
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TOD':
            return {todos: [state, {
                    id:nanoid(),
                    name: action.payload,
                    done: false
            }]}
        case 'REMOVE_TODO':
            return state.todos.filter(task => task.id !== action.payload)
        default:
            return state;
    }
}
