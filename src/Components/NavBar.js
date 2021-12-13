import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
//////////////
export default function NavBar({ token, setToken }) {
  return (
    <div>
      {token ? (
        <ul>
         
          
         
          <li>
            <Link
              onClick={() => {
                setToken("");
              }}
              to="/logIn"
            >
              log out
            </Link>
            {/* <button onClick={()=>{setToken("") 
          history.push("/logIn") }}>log out</button> */}
          </li>
        </ul>
      ) : (
        <ul>
        <li>
        <Link to="/SignUp">SinUp</Link>
      </li>
          <li>
            <Link to="/logIn">logIn</Link>
          </li>
         

          <li>
            <Link to="/movies">movies</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
