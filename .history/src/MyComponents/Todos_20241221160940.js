import React from 'react'
import {TodoItem } from "../MyComponents/TodoItem";

export const Todos = (props) => {
  return (
    <div className="container">
        <h3 className="text-center my-3">Todos List</h3>
        {props.todo.map((todo)=>{
          return <TodoItem todo={todo} onDelete={onDelete}/>
        })}
     
    </div>
  )
}
