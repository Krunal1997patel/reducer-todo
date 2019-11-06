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

            case 'TOGGLE':
               return{
                   items: state.items.map(list => {
                       if(list.id === action.payload){
                           return{
                               ...list,
                               completed: !list.completed
                           }
                       }else{
                           return list
                       }
                   })
               }

            case 'REMOVE_CROSS_LIST':
                return{
                    items: state.items.filter(item => !item.completed)
                }

        default:
            return state
    }
}