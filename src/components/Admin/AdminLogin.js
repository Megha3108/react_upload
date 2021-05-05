import React, { Component } from 'react';
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Layout/style.css';
import { connect } from 'react-redux';
import {adminLogin} from '../../actions/phonebookActions';
import Navigation from '../Layout/Navigation';

class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    onChange=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }
    onSubmit=(event)=>{
        event.preventDefault();
        const adminlogin={
            email:this.state.email,
            password:this.state.password
        }
        console.log(this.state.email);
        console.log(this.state.password);
        this.props.adminLogin(this.state.email,this.state.password,this.props.history);
    }
    render() {
        return (
            <div className="login">
                <Navigation/>
                <div className="container">
                    <div className="d-flex justify-content-center h-100">
                        <div className="card mx-auto">
                            <div className="card-header">
                                <h3> Admin Login</h3>
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit}>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><FontAwesomeIcon icon="user" /></span>
                                        </div>
                                        <input type="email" 
                                        className="form-control"
                                        name="email"
                                        onChange={this.onChange}
                                        value={this.state.email} 
                                        placeholder="username" 
                                        required
                                        />

                                    </div>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><FontAwesomeIcon icon="key" /></span>
                                        </div>
                                        <input type="password" 
                                        className="form-control" 
                                        placeholder="password"
                                        name="password"
                                        onChange={this.onChange}
                                        value={this.state.password} 
                                        required/>
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn float-right login_btn" />
                                    </div>
                                </form>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex justify-content-center links">
                                    Don't have an account?<a href="/adminregister">Sign Up</a>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <a href="#">Forgot your password?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
AdminLogin.propTypes = {
    adminLogin:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    errors: state.errors
  });
export default connect(mapStateToProps,{adminLogin})(AdminLogin);