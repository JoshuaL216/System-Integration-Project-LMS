import React, {useState} from 'react';
import './Login.css'
import Video from './Video';
import { useHistory } from "react-router-dom"


function LoginForm({Login, error }){   
    let history = useHistory();
    
    const [details, serDetails] = useState({name:"", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    
    return( 
        

    <div >
        
        <form onSubmit={submitHandler}> 
            <div class="container">
                <br></br>
                <h1>LOGIN</h1>

                <div className="form-horizontal">
                    <i class="uil uil-envelope"></i>
                    <input type="email" name="email" id="email" placeholder="Email" onChange={e=> serDetails({...details, email: e.target.value})} value={details.email}/>
                </div>
                <div className="form-horizontal">
                    <i class="uil uil-lock"></i>
                    <input type="password" name="password" id="password" placeholder="Password" onChange={e=> serDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                {<input type="submit" value="Login" className="form-horizontalp" id="btn-login"/>}
                



                <br></br>
                <br></br>
                <hr></hr> 
                
                
                <div class="adjust">
                <form className="form-horizontal">
                <button id="btn-register" onClick={() => {history.push("/registerpage/RegisterPage");}}>Register</button>

                </form>
                </div>

                
                

                {(error != "")?(<div className="error">{error}</div>):""}

            </div>
        </form>

        <Video/>
    </div>



    
    )
}

export default LoginForm;