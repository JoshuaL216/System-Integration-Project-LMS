import React, { Component } from "react";
//import "./App.css";
import "./register.css"
import Modal from "./modal/Modal";
import LoginForm from '../LoginFrom';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);


const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class RegisterPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      formErrors: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        number: "",
        select: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.firstName}
        Last Name: ${this.state.lastName}
        Email: ${this.state.email}
        Password: ${this.state.password}
        Number: ${this.state.number}
        select: ${this.state.select}
      `);
      //routing
      <LoginForm/>
       
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.firstName =
          value.length < 2 ? "Minimum 2 characters required" : "";
        break;
      case "lastName":
        formErrors.lastName =
          value.length < 2 ? "Minimum 2 characters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Minimum 6 characaters required" : "";
        break;
      case "number":
          formErrors.number =
          value.length < 11 ? "Minimum 11 digits required" : "";
        break; 

      case "select":
        formErrors.select =
        value.length != "Student" ? "Please Select" : "";
      break; 

      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="Rwrapper">
        <div className="Rform-wrapper">
          <h4>Register</h4>
          <h5>Experience school digitally with us.</h5>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="RInputBox">
              <label htmlFor="firstName">First Name:</label>
              <input
                className={formErrors.firstName.length > 0 ? "error" : null}
                className="RInput"
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.firstName.length > 0 && (
                <span className="errorMessage">{formErrors.firstName}</span>
              )}
            </div>

            <div className="RInputBox">
              <label htmlFor="lastName">Last Name:</label>
              <input
                className={formErrors.lastName.length > 0 ? "error" : null}
                className="RInput"
                placeholder="Last Name"
                type="text"
                name="lastName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.lastName.length > 0 && (
                <span className="errorMessage">{formErrors.lastName}</span>
              )}
            </div>

            <div className="RInputBox">
              <label htmlFor="email">Email:</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                className="RInput"
                placeholder="Email"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="RInputBox">
              <label htmlFor="password">Password:</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                className="RInput"
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>

            <div className="RInputBox">
              <label htmlFor="number">Contact number:</label>
              <input 
                className={formErrors.number.length > 0 ? "error" : null}
                className="RInput"
                placeholder="Contact number"
                type="text"
                name="number"
                noValidate
                onChange={this.handleChange}
              />

              {formErrors.number.length > 0 && (
                <span className="errorMessage">{formErrors.number}</span>
              )}
            </div>

            <div className="select">
            <select 
            className={formErrors.select.length > 0 ? "error" : null}
            type="checkbox" 
            id="select"
            name ="select"
            className="select" 
            id="sel-Please Select">
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
            </select>
      
            

            {formErrors.select.length > 0 && (
              <span className="errorMessage">{formErrors.select}</span>
            )}
            </div>
            <div className="agreement">
            <input type="checkbox" id="chk-agreement" className="chk-agreement" defaultValue="I accept the Terms of use and Privacy policy"/>
            <label htmlFor="chk-agreement">I accept the Terms of use and Privacy policy</label>
            </div>

            <Modal />

            
            <br></br>
            
        
            <div className="createAccount">
                <button type="submit" className="RButton">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegisterPage;
