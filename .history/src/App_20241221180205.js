
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";
import React, {useState,useEffect} from 'react';
import { AddTodo } from "./MyComponents/AddTodo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }else{
    initTodo =JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    console.log("Delete",todo)
    setTodos(todos.filter((e)=>{
        return e!==todo;
    }))
    localStorage.setItem("todos",JSON.stringify(todos));
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

  const [todos,setTodos]=useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  
  }, [todos])
  return (
    <>
    <Router>
    <Header title="My ToDO List" searchBar={false}/>
    <Switch>
          <Route path="/" render={()=>{
            return (<>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/></>)
          }}>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          
        </Switch>
    
    <Footer/>
    </Router>
    </>
  );
}

export default App;
