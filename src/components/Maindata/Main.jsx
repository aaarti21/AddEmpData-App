import React, { useState } from "react";
import "./Mainstyle.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Main = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history=useNavigate();
//   const header={"Access-Control-Allow-Origin":"*"};
   const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("clicked")
     axios.post(
        'https://672f1196229a881691f1bcf6.mockapi.io/crud-project',
        {name:name,email:email

        })
     .then(()=>{ history('/read');})
    
   }
  return (
    <>
      <div className="main-container">
      <h1>Create</h1>
     
        <form>
            
          <div className="mb-3">
            <label for="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)}/>
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>

         <div className="btn-create">
         <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
         <Link to="/read">
         <button  className="btn btn-secondary">Show Data</button> 
         </Link>
         </div>
        </form>
      </div>
    </>
  );
};

export default Main;
