import React from "react";
import { Link } from "react-router-dom";

// import "./nav.css";
//////////////
export default function NavBar({ token, setToken }) {
  // const history=useHistory()
  return (
    <div>
      {token ? (
        <ul>
         
          
           
          <li>
            
            {/* <button onClick={()=>{setToken("") 
          history.push("/logIn") }}>log out</button> */}
          </li>
        </ul>
      ) : (
        <ul>
        <li>
        <Link to="/logIn">logIn</Link>
      </li>
          <li>
            <Link to="/SinUp">SinUp</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
