import React, { useState } from 'react';
import Login from './LoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import RegisterPage from './registerpage/RegisterPage';
import LoginForm from "./LoginFrom";


function App() {

  return (
    <Router>
        
        <Switch> 
            <Route exact path="/">
                <Login />
            </Route>
            <Route path="/registerpage/RegisterPage">
                <RegisterPage />
            </Route>
            <Route path="/Homepage">
                <Homepage />
            </Route>
            <Route path="/LoginFrom">
                <LoginForm />
            </Route>
        </Switch>  
    </Router>
);
}


export default App;
