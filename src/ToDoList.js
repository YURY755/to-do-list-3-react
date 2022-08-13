import React from "react";
import ToDo from './ToDo';

// import todos from './mock-todos.json';

const ToDoList = ({ toDoList, toggle }) => {
  return (
    <div>
      {toDoList.map(todo => {
        return (
          <ToDo todo={todo} toggle={toggle}/>
        )
      })}
    </div>
  )
}

export default ToDoList;