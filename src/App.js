import React, { useState } from "react";
import movies from "./Components/movies";
import LogIn from "./Components/logIn";
import SinUp from "./Components/sinUp";
import NavBar from "./Components/NavBar";
import { Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  const [token, setToken] = useState("");

  return (
    <div>
      <NavBar token={token} setToken={setToken} />
     
      <Route
        exact
        path="/LogIn"
        render={() => {
          return <LogIn setToken={setToken} />;
        }}
      />
      <Route exact path="/SignUp" component={SinUp} />
      <Route
        exact
        path="/movies"
        render={() => {
          return <movies token={token} />;
        }}
      />

    </div>
  );
}
