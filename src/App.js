import React, { useState } from "react";
import SignUp from "./Components/SignUp";
import { Route } from "react-router-dom";
import NavBar from "./Components/NavBar";

//////
export default function App() {

  return (
    <div>
     < NavBar/>
      
      <Route exact path="/SignUp" component={SignUp} />
      

    </div>
  );
}
