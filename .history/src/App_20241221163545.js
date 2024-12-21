
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import React, {useState} from 'react';

function App() {
  const onDelete = (todo)=>{
    console.log("Delete",todo)
    setTodo(todo.filter((e)=>{
        return e!==todo;
    }))
  }

  const [todo,setTodo]=useState([
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
    <Todos todo={todo} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
