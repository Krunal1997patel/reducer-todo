export const initialState = {
    items: [
        {
            name: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}

export const reducer = (state, action) => {
    switch(action.type){

        case 'ADD_TODO':

            const newItem ={
                name: action.payload,
                id: Date.now(),
                completed: false
            }

            return{
                ...state,
                items: [ newItem, ...state.items]
            }

        default:
            return state
    }
}