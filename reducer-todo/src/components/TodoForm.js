import React,{useState} from 'react'

const TodoForm = (props) => {

    const [addTodo, setAddTodo] = useState('')

    const handleChange = e => {
        setAddTodo(e.target.value);
    }

    return(
        <div>
           <input
            type='text'
            name='addIteam'
            value={addTodo}
            onChange={handleChange}
           />
           <button onClick={() => {
              props.dispatch({type: 'ADD_TODO', payload: addTodo})
              setAddTodo('')
           }}>Add</button>
        </div>
    )
}

export default TodoForm;