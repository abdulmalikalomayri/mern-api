import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
 
import "./login.css"

export default function LogIn({ setToken }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory();

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePass = (e) => {
    setPass(e.target.value);
  };
  const logIn = async () => {
    try {
      const res = await axios.post("http://localhost:5000/logIn", {
        email,
        pass,
      });
      console.log(res.data);
      setToken(res.data.token);
    } catch (err) {
    }
  };
  return (
    <div className="loginbox">
      <h1> LOGIN </h1>
      <input
        onChange={(e) => {
          changeEmail(e);
        }}
        type="text"
        placeholder="email"
      />
      <br />
      <br />
      
      <input
        onChange={(e) => {
          changePass(e);
        }}
        type="password"
        placeholder="pass"
      />

      <br/>
      <br />
      <button
        onClick={() => {
          logIn();
        }}
      >
        logIn
      </button>

      <br />
      <br />
    </div>
  );
}
