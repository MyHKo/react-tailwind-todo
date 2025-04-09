export const addTodo = (name) => ({
    type: 'ADD_TODO',
    payload: name,
})

export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    payload:id,
})
