import React from "react";
// import todo from './mock-todos.json';

const ToDo = ({todo, toggle}) => {

  const handleClick = (e) => {
    e.preventDefault()
    toggle(e.currentTarget.id)
  }

  return (
    <div className={ todo.done ? "complete" : ""} onClick={handleClick} id={todo.id}>
      {todo.todo}
    </div>
  )
}

export default ToDo;