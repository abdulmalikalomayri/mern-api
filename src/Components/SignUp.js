import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";

//
export default function SinUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePass = (e) => {
    setPass(e.target.value);
  };
  const addUser = async () => {
    const res = await axios.post("http://localhost:5000/signUp", {
      name,
      email,
      pass,
    });
    
  };
  return (
    <div>
      <input
        onChange={(e) => {
          changeName(e);
        }}
        type="text"
        placeholder="name"
      /> 
      <br/>
      <br/>

      <input
        onChange={(e) => {
          changeEmail(e);
        }}
        type="text"
        placeholder="email"
      />
            <br/>
            <br/>


      <input
        onChange={(e) => {
          changePass(e);
        }}
        type="pass"
        placeholder="pass"
      /> 
            <br/>


      <button
        onClick={() => {
          addUser();
        }}
      >
        sinUp
      </button>
    </div>
  );
}
