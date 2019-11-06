import React from 'react';
import Todo from './Todo';


const TodoList = (props) => {
    
    console.log(props.state.items)

    return(
        <div>
            {
                props.state.items.map(list => (
                    <Todo
                        name={list.name}
                        completed={list.completed}
                        id={list.id}
                    />
                ))
            }
        </div>
    )
}

export default TodoList;