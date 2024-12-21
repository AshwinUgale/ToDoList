import React from 'react'

export const Todos = (props) => {
  return (
    <div className="container">
        <h3>Todos List</h3>
        {/* {props.todos} */}
        <TodoItem todo={todo}/>
    </div>
  )
}
