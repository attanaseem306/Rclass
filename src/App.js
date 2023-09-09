import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
function App() {

// const greet=()=>{
// console.log("hii");
// }


const [greet,setgreet]=useState()

  useEffect(()=>{
    console.log("hello");
    setgreet("empty")
       },[greet])




  return (
    <div className="App">
       <button onClick={greet}>Greet</button>
 
    </div>
  );
}

export default App;

