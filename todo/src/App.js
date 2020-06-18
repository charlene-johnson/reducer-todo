import React, {useReducer} from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'
import {todoReducer, initialState} from './reducers/reducer'


function App() {

  const[state, dispatch] = useReducer(todoReducer, initialState)
 console.log(state)

  const toggleTask = todoId => {
    console.log(todoId);
    dispatch({type: 'TOGGLE_COMPLETED', payload: todoId})
  };

  const addTask = (e, task) => {
    e.preventDefault();
    console.log(task)
    const newTask = {
      item: task,
      id: Date.now(),
      completed: false
    };
    dispatch({type: 'ADD_TODO', payload: newTask})
  };

  const clearCompleted = e => {
    e.preventDefault();
    dispatch({type: 'CLEAR_COMPLETED'})
  };

  
    return (
      <div className="App">
        <h2>To Do List</h2>
        <TodoForm 
          addTask={addTask} 
          clearCompleted={clearCompleted} />
        <TodoList
          toggleTask={toggleTask}
          tasks={state}
        />
      </div>
    );
}

export default App;
