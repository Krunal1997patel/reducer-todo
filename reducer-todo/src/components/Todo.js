import React from 'react';

const Todo = (props) => {


    return(
        <div 
        onClick={() => props.dispatch({type: 'TOGGLE', payload: props.id})} 
        key={props.id} 
        className={`list${props.completed ? '-cross': ''}`}
        >
            <h3>{props.name}</h3>
        </div>
    )
}

export default Todo;