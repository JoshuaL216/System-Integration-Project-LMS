import React from 'react'
import { useHistory } from "react-router-dom"


function Register () {   
  let history = useHistory();

    return (
      <div class="container">
        <br></br>
        <h1> REGISTRATION </h1>

        <form className="form-horizontal">
        <button id="btn-register" onClick={() => {history.push("");}}>Register</button>
        </form>
        </div>
    );
}

export default Register;