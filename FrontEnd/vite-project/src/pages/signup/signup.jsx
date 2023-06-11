import React from "react";
import './signup.css';
import logo from '../.././static imgs/complete logo.png'
import { Link } from "react-router-dom";
import { useState } from "react";


let ravi=5

const Signup=()=>{

    let [current,next]=useState(40)
    let [username,n_username]=useState('')
    let [password,n_password]=useState('')
    let [response1,response2]=useState('')


    async function submit_form() {
      try {
        var x = await fetch('http://localhost:3000/signup/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ 'name': username, 'pass': password })
        });
    
        var y = await x.text();
        console.log(y);

        response2(y);
        n_username('')
        n_password('')


      } catch (error) {
        console.error(error);
      }
    }

    return (


        <div>
                    <Link to={"/"}>
        <img class="logo" src={logo} alt="Logo"/>

        </Link>


          <h2>Signup</h2>
          <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" value={username} required onChange={(e)=>{n_username(e.target.value)}}/>
    
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" value={password} required onChange={(e)=>{n_password(e.target.value)}}/>

            <button onClick={submit_form}> Submit </button>
            <div>
              {response1==='Signup successful\n pls login'?(
                <p>
                  Signin sucessfull.please <a href="/login">Login</a>
                  </p>

              ):(
                <p>{response1}</p>
              )}

            </div>
    
          </div>
        </div>
      );
    }

export default Signup