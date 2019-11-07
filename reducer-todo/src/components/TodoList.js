import React from 'react';
import Todo from './Todo';


const TodoList = (props) => {

    return(
        <div>
            {
                props.state.items.map(list => (
                    <Todo
                        name={list.name}
                        completed={list.completed}
                        id={list.id}
                        dispatch={props.dispatch}
                    />
                ))
            }

            <button onClick={()=> props.dispatch({type: 'CLEAN_LIST'})}>Clean List</button>
        </div>
    )
}

export default TodoList;