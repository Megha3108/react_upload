import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Layout/register.css';
import { userRegister } from '../../actions/phonebookActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class UserRegister extends Component {
    constructor(props) {
        super(props);
        this.state={
            userIdentifier:'',
            firstName:'',
            lastName:'',
            phoneNumber:'',
            email:'',
            address:'',
            password:'',
            confirmPassword:'',
            errors:{}
        }
    }
    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
    }   
    onSubmit=(event)=>{
        event.preventDefault();
        const newUser={
            userIdentifier:this.state.userIdentifier,
            firstName:this.state.firstName,
            lastName:this.state.lastName,
            phoneNumber:this.state.phoneNumber,
            email:this.state.email,
            address:this.state.address,
            password:this.state.password,
            confirmPassword:this.state.confirmPassword
        }
        console.log(newUser);
        let errors = this.validateAll();
        if(this.isValid(errors)) this.props.userRegister(newUser, this.props.history);
        else{
            let s1 = {...this.state};
            s1.errors = errors;
            this.setState(s1);
        }
    }
    isValid = (errors) =>{
        let keys = Object.keys(errors);
        let count = keys.reduce((acc, curr)=>errors[curr]? acc+1 : acc,0);
        return count ===0;
    }
    validateAll = () =>{
        let errors ={};
        errors.userIdentifier = this.validateUserIdentifier(this.state.userIdentifier);
        errors.firstName = this.validateFirstName(this.state.firstName);
        errors.lastName = this.validateLastName(this.state.lastName);
        errors.phoneNumber = this.validatePhoneNumber(this.state.phoneNumber);
        errors.email = this.validateEmail(this.state.email);
        errors.address = this.validateAddress(this.state.address);
        errors.password = this.validatePassword(this.state.password);
        errors.confirmPassword = this.validateConfirmPassword(this.state.confirmPassword);
        return errors;
    }
    validateUserIdentifier = (userIdentifier) =>
        !userIdentifier 
        ? "ID must be entered"
        : " ";

    validateFirstName = (firstName) =>
        !firstName
        ? "First name should not be blank"
        : firstName.length < 3
        ? "First name should have minimum 3 characters"
        : "";
    
    validateLastName = (lastName) =>
        !lastName
        ? "Last name should not be blank"
        : lastName < 3
        ? "Last name should have minimum 3 characters"
        : "";

    validatePhoneNumber = (phoneNumber) =>
        !phoneNumber
        ? "Phone Number should not be blank"
        : "";

    validateEmail = (email) =>
        !email
        ? "Enter valid email"
        : "";
    validateAddress = (address) =>
        !address
        ? "Enter valid address"
        : "";

    validatePassword = (password) =>
        !password
        ? "Password should not be blank"
        : "";
    validateConfirmPassword = (confirmPassword) =>
        !confirmPassword
        ? "Please re-enter the password"
        : "";

    render() {
        const {errors} = this.state;

        return (
            <div className="register">
                <div className="container">
                    <div className="card">
                        <article className="card-body mx-auto">
                            <h4 className="card-title mt-3 text-center">User Registration</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <FontAwesomeIcon icon="id-badge" size="lg" /></span>
                                    </div>
                                    <input name="userIdentifier" 
                                    className="form-control" 
                                    placeholder="User ID" 
                                    onChange={this.onChange}
                                    value= {this.state.userIdentifier}
                                    type="text" 
                                    />
                                    {errors.userIdentifier ? <span className="text-danger">{errors.userIdentifier}</span>:""}
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <FontAwesomeIcon icon="user" size="lg" /></span>
                                    </div>
                                    <input name="firstName" 
                                    className="form-control" 
                                    placeholder="First name" 
                                    onChange={this.onChange}
                                    value={this.state.firstName}
                                    type="text" 
                                    />
                                    {errors.firstName ? <span className="text-danger">{errors.firstName}</span>:""}
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <FontAwesomeIcon icon="user" size="lg" /></span>
                                    </div>
                                    <input name="lastName" 
                                    className="form-control" 
                                    placeholder="Last name" 
                                    type="text"
                                    onChange={this.onChange}
                                    value={this.state.lastName}
                                    />
                                    {errors.lastName ? <span className="text-danger">{errors.lastName}</span>:""}
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <FontAwesomeIcon icon="phone-alt" size="lg" /> </span>
                                    </div>
                                    <input name="phoneNumber" 
                                    className="form-control" 
                                    placeholder="Phone number" 
                                    type="text" 
                                    onChange={this.onChange}
                                    value={this.state.phoneNumber}
                                    />
                                    {errors.phoneNumber ? <span className="text-danger">{errors.phoneNumber}</span>:""}
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon="envelope" size="lg" />  </span>
                                    </div>
                                    <input name="email" 
                                    className="form-control" 
                                    placeholder="Email address" 
                                    type="email" 
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    />
                                    {errors.email ? <span className="text-danger">{errors.email}</span>:""}
                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon="map-marker" size="lg" />  </span>
                                    </div>
                                    <input name="address" 
                                    className="form-control" 
                                    placeholder="Address" 
                                    type="text" 
                                    onChange={this.onChange}
                                    value={this.state.address}
                                    />
                                    {errors.address ? <span className="text-danger">{errors.address}</span>:""}

                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">  <FontAwesomeIcon icon="lock" size="lg" /></span>
                                    </div>
                                    <input className="form-control" 
                                    placeholder="Create password" 
                                    type="password" 
                                    name="password"
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    />
                                    {errors.password ? <span className="text-danger">{errors.password}</span>:""}

                                </div>
                                <div className="form-group input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><FontAwesomeIcon icon="lock" size="lg" /></span>
                                    </div>
                                    <input className="form-control" 
                                    placeholder="Confirm password" 
                                    type="password" 
                                    onChange={this.onChange}
                                    value={this.state.confirmPassword}
                                    name="confirmPassword"
                                    />
                                    {errors.confirmPassword ? <span className="text-danger">{errors.confirmPassword}</span>:""}

                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
                                </div>
                                <p className="text-center float-right">Have an account? <a href="/userlogin">Log In</a> </p>
                            </form>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}
UserRegister.propTypes = {
    userRegister:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return { errors: state.errors }
};
export default connect(mapStateToProps,{userRegister})(UserRegister);