import React, {Component, useEffect, useState} from "react";
import "./../styles/App.css";

function App() {
  const [cond,setCond]=useState(false);
  
 const handleClick=()=>
 {
   setCond(true);
   console.log(paragraph);
 }

 if(cond)
 {
  return (
    <div id="main">
     

      {cond ? 
            <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
            :
            <div></div>
      }
            <button 
      id="click"
      onClick={handleClick}>
        Click me
      </button>
      </div>
      );
  }
  else
  {
    return(
      <div id="main">
      <button 
      id="click"
      onClick={handleClick}>
        Click me
      </button>
      </div>
    );
  }    
      
    

}


export default App;
