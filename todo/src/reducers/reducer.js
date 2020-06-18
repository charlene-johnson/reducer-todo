import moment from 'moment';

export const initialState = [
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
    ];


export const todoReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'TOGGLE_COMPLETED':
            let timeCompleted = moment().format("MMMM Do YYYY, h:mm:ss a");
            return [...state.map(item =>{
                if(item.id === action.payload) {
                    return {
                        ...item, 
                        completed: !item.completed,
                        timeCompleted: item.completed === false && timeCompleted,
                    }
                };
                return item;
            })]
        case 'CLEAR_COMPLETED':
            return [...state.filter(item => !item.completed)]
            default:
                return state
    }
}