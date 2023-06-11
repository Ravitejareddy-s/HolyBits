import React, { useState } from "react";
import './login.css';
import logo from '../.././static imgs/complete logo.png'
import { Link } from "react-router-dom";

const Login = () => {

  let [username,i_username]=useState('')
  let [pass,i_pass]=useState('')
  let [returns,n_returns]=useState('')

  async function submit(){
    let temp=await fetch('http://localhost:3000/login/',{headers: {
      'Content-Type': 'application/json'
    },method:'POST',body:JSON.stringify({'name':username,'pass':pass})})
    let response = await temp.text(); // Parse the response as JSON
    if(response.split(' ')[0]==='Bearer'){
      n_returns('token stored in the browser')
      localStorage.setItem('Token',response)


    }else{

      n_returns(response)

    }

  }

    



    return (


      <div>
      <Link to={"/"}>
        <img className="logo" src={logo} alt="Logo"/>

        </Link>
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" onChange={(e)=>i_username(e.target.value)} placeholder="Enter your username" required />
  
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" onChange={(e)=>i_pass(e.target.value)} placeholder="Enter your password" required />

  
          <input type="submit" value="Login" onClick={submit}/>

          <a>{returns}</a>

          <p>You can <a href="/signup">Signup</a> here</p>
        </div>
      </div>

    );
  }
  

export default Login