import React from 'react'
import {TodoItem } from "../MyComponents/TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
        <h3 className='Text-centre'>Todos List</h3>
        {/* {props.todos} */}
        <TodoItem todo={props.todo[0]}/>
    </div>
  )
}
