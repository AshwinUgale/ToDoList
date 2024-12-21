
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";

function App() {
  return (
    <>
    <Header SearchBar={false}/>
    <Todos/>
    <Footer/>
    </>
  );
}

export default App;
