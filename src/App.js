import React, { useState } from "react";
import  "./App.css";
import FunctComponent from "./Components/FunctComponent";
import ClassesComponent from "./Components/ClassesComponent";


const App = () =>{
  const [show, setshow] = useState(false);
  const handleclick =()=>{
   setshow(!show)
  }
  const [show2, setshow2] = useState(false);
  const handleclick2 = ()=>{
    setshow2(!show2)
  }


    return (
      <div className="container">
        <h1 className='title'>Styling using Functional and Class Component</h1>
        <div className="btns">
        <button onClick={handleclick} className="btn">To See Functional Component</button>
        <button onClick={handleclick2} className="btn">To See Class Component</button>
        </div>
        <div className="boxes">
        {show ? <FunctComponent/> : ""}
        {show2 ? <ClassesComponent/> : ""}
        </div>

       
      </div>
    )
}

export default App;
