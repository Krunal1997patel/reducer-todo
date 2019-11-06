import React from 'react';

const Todo = ({name, completed, id}) => {
    return(
        <div key={id}>
            <h3>{name}</h3>
        </div>
    )
}

export default Todo;