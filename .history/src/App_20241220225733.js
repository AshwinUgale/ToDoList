
import './App.css';
import Header from './MyComponents/Header';
import {Footer} from "./MyComponents/Footer";
import {Todos} from "./MyComponents/Todos";

function App() {
  return (
    <>
    <Header title="My ToDO List" SearchBar={True}/>
    <Todos/>
    <Footer/>
    </>
  );
}

export default App;
