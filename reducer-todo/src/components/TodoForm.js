import React,{useState} from 'react'

const TodoForm = (props) => {

    const [addTodo, setAddTodo] = useState('')

    const handleChange = e => {
        setAddTodo(e.target.value);
    }

    // console.log(props.state.items.length)

    return(
        <div>
           <input
            type='text'
            name='addIteam'
            value={addTodo}
            onChange={handleChange}
           />
           <button onClick={() => {
                addTodo === '' 
            ?   setAddTodo('')
            :   props.dispatch({type: 'ADD_TODO', payload: addTodo})
                    setAddTodo('')
                
           }}>Add</button>

           <button onClick={() => {
              
               props.dispatch({type: 'REMOVE_CROSS_LIST'})
           }}>Clean Cross </button>
        </div>
    )
}

export default TodoForm;