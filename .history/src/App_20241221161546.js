
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";

function App() {
  const onDelete = (todo)=>{
    console.log("Delete",todo)
  }

  let todo = [
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
      sno: 1,
      title: "Webdev",
      desc: "practice and develop "
    },
  ]
  return (
    <>
    <Header title="My ToDO List" searchBar={false}/>
    <Todos todo={todo} onDelete={onDelete}/>
    <Footer/>
    </>
  );
}

export default App;
