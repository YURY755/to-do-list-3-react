import React, { useState } from 'react';

import Title from './Title';
import ToDoList from './ToDoList';

import todos from './mock-todos.json';

import './index.css';

function App() {

  const [ toDoList, setToDo ] = useState(todos);

  const toggle = (id) => {
    
    let item = toDoList.map(todo => {
      return todo.id == id ? {...todo, done: !todo.done} : {...todo};
    });
    
    setToDo(item);
    console.log(toDoList);
  }

  return (
    <div className="App">
      <Title />
      <ToDoList toDoList={toDoList} toggle={toggle} />
    </div>
  );
}

export default App;
