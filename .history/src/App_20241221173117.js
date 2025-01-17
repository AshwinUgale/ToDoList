
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import React, {useState} from 'react';
import { AddTodo } from "./MyComponents/AddTodo";

function App() {
  const onDelete = (todo)=>{
    console.log("Delete",todo)
    setTodos(todos.filter((e)=>{
        return e!==todo;
    }))
  }

  const addTodo = (title,desc)=>{
    let sno;
    if(todos.length===0){
      sno=0;
    }else{
      sno=todos[todos.length-1].sno+1;
    }
    
    const myTodo ={
      sno:sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
  }

  const [todos,setTodos]=useState([
    {
      sno: 1,
      title: "Gym",
      desc: "Push Pull Leg"
    },
    {
      sno: 2,
      title: "Leetcode",
      desc: "Leetcode from neetcode"
    },
    {
      sno: 3,
      title: "Webdev",
      desc: "practice and develop "
    },
  ])
  return (
    <>
    <Header title="My ToDO List" searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
