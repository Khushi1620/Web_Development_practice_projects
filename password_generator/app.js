import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PassWord() {
   
   const [password, setPassword] = useState("har-shii");
   const [length, setLength] = useState(5);
   const [numberChanged, setNumberChanged] = useState(false);
   const [characterChanged, setCharacterChanged] = useState(false);

   function passwordGenerater() {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (numberChanged == true) {
        str += "0123456789";
    }
    if (characterChanged == true) {
        str += "!@#$%^&*_+:|?><,./;=-{}()[]";
    }
    let pass = "";
    for (let i = 0; i < length; i++) {
        pass += str[Math.floor(Math.random()*str.length)];
    }
    setPassword(pass);
   }
   useEffect(()=> {
  passwordGenerater();
   },[length, numberChanged, characterChanged]);
    return (
        <>
          <h1>{password}</h1>
          <div className="options">

          <input type="range" min={5} max={30} value={length} onChange={(e)=> setLength(e.target.value)}></input>
          <label>Length:  {length} </label>

          <input type="checkbox" defaultChecked={numberChanged} onChange={()=> setNumberChanged(! numberChanged)}></input>
          <label>Number </label>

          <input type="checkbox" defaultChecked={characterChanged} onChange={()=> setCharacterChanged(! characterChanged)}></input>
          <label>Character</label>

          </div>
        </>
    )
}

const element = ReactDOM.createRoot(document.getElementById('root'));
element.render(<PassWord/>);