import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function Body () {
    const [profile, setProfile] = useState([]);
    const [numberOfProfile,setNumberOfProfile] = useState("");

    async function fetchInfo(count) {
       const response = await fetch(`https://api.github.com/users?per_page=${count}`);
       const data = await response.json();
       setProfile(data);
    }
    useEffect(()=> {fetchInfo(10)},[]);

    return(
        <div className="search">
            <input className="inputNum" type="text" placeholder="search here" value={numberOfProfile} onChange={(e)=>setNumberOfProfile(e.target.value)}></input>
            <button onClick={()=> fetchInfo(Number(numberOfProfile))}>Search Profile</button>
       <div className="profileDiv">
       {
        profile.map((value)=> {
            return(
             <div key={value.id} className="cards">
              <img src={value.avatar_url}></img>
              <h2>{value.login}</h2>
              <a href={value.html_url} target="_blank">Profile</a>
             </div>
            ) 
        })
       }
       </div>
       </div>
    )
}
export default Body; 