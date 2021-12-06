import React, { useState } from 'react';
import LoginForm from './LoginFrom';
import MainHomepage from './homepage/MainHomepage';


function Login() {

  


  const adminUser = {
    email: "SystemIntegration@email.com",
    password: "it2a"
  }

  const [user, setUser] = useState({name: "", email:""});
  const [error, setError] = useState("");

  const Login = details =>{
    console.log(details);

    if (details.email == adminUser.email &&  details.password == adminUser.password){
    console.log("Logged in");
 
    setUser({
      name: details.name,
      email: details.email
         //routing homepage
         
    });
    }else{
      setError("Invalid Credentials")
    }
  }
 
  const Logout = () => {
    console.log("Logout");
    setUser({name: "", email:""});
  }

  
  return (

    <div className="App"> 
      {(user.email !="") ? (
      <MainHomepage/>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
    
  );
}


export default Login;
