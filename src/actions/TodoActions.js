export const AddTodoAction = (todo) => (dispatch, getState) => {
    const { 
        Todo: { todos },
    } = getState();

    const isTodo = todos.find(t => t.todo === todo);
    if (!isTodo && todo !== '') {
        dispatch({
            type: 'ADD_TODO',
            payload: [...todos, { id: todo, todo }],
        });
    }
};

