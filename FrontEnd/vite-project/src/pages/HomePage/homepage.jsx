import React from "react";
import './homepage.css';
import logo from '../.././static imgs/complete logo.png'
import { Link } from 'react-router-dom'

const Homepage=()=>{
    return(

        <div>
            <img class="logo" src={logo} alt="Logo"/>
            
            <div>
                <span class="brackets">&lt;</span>
                <span class="code">start coding</span>
                <span class="brackets">/&gt;</span>
            </div>
            
            <div class="line"></div>
            
            <div class="footer">
                <div class="line"></div>
                <div class="text">
                    <Link to={'/signup'}>Signup</Link>
                </div>
                <div class="line"></div>
                <div class="text">
                    <Link to={'/login'}>Login</Link>

                </div>
                <div class="line"></div>
            </div>
        </div>
      )

}

export default Homepage