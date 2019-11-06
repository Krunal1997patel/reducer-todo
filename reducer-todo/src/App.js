import React, { useReducer } from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

//reducer
import { reducer, initialState } from './reducers/todoReducer';

import './App.css';

function App() {


  const [state, dispatch] = useReducer( reducer, initialState );

  return (
    <div className="App">

     <h1>Todo App With Reducer</h1>

     <TodoForm state={state} dispatch={dispatch}/>

     <TodoList state={state} dispatch={dispatch} />

    </div>
  );
}

export default App;
