import React, {Component, useEffect, useState} from "react";
import "./../styles/App.css";

function App() {
  const [paragraph,setParagraph]=useState(<p id="para"></p>);
  
 const handleClick=()=>
 {
   setParagraph(<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"</p>);
   console.log(paragraph);
 }


  return (
    <div id="main">
      {paragraph}
      <button 
      id="click"
      onClick={handleClick}>
        Click me
      </button>
      
    </div>
  );
}


export default App;
