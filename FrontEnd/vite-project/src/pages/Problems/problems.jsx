import React, { useState,useEffect } from "react";
import logo from '../.././static imgs/complete logo.png'
import { Link } from "react-router-dom";




const Problems = () => {
    const [resp,n_resp]=useState([])
    useEffect(()=>{
        get_prob()


    },[])

    async function get_prob(){
        const response = await fetch('http://localhost:3000/problems/');
        const data = await response.json();
        n_resp(data)
        console.log(data)
        console.log(resp)

      }
    return(
        
    //     <div>
    //     <h1>Problems</h1>
    //     <ul>
    //       {resp.map((problem) => (
    //         <li key={problem.problemId}>
    //           <h2>{problem.title}</h2>
    //           <p>{problem.description}</p>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>/
    <div>
      <Link to={"/"}>
        <img className="logo" src={logo} alt="Logo"/>

        </Link>


        <table>
            <tr>
                <th>id</th>
                <th>Title</th>
                <th>difficulty</th>
            </tr>
            {resp.map(x=>Check(x))}

        </table>
    </div>)
}

function Check(props){
    const problemId=props.problemId
    const title=props.title
    const difficulty=props.difficulty

    return(
        <tr>
            <td>{problemId}</td>
            <td>{difficulty}</td>
            <td>{title}</td>
        </tr>


    )
}

export default Problems



