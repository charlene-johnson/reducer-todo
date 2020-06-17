export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 1
        },
        {
            item: 'Finish Todo Project',
            completed: false,
            id: 2
        },
        {
            item: 'Cook Dinner',
            completed: false,
            id: 3
        }
    ] 
};

export const toDoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return{state}
        case 'TOGGLE_TODO':
            return{state}
        case 'COMPLETE_TODO':
            return{state}
    }
}