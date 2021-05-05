import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getUser, deleteUser } from '../../actions/phonebookActions';
import classnames from "classnames";
import { Link } from "react-router-dom";
import AdminNav from './AdminNav';
class SearchUserByID extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            errors: {},
            userIdentifier:"",
            modalIsOpen: false
        }
    }


    onChange = (event) => {
        this.setState(
            { [event.target.name]: event.target.value }
        );
    }

    onSubmit = (event) => {
        event.preventDefault();
        const getUser = {
            userIdentifier: this.state.userIdentifier
        }
        console.log(this.state.userIdentifier);
        this.props.getUser(this.state.userIdentifier, this.props.history);
        
        
    }
    componentDidMount() {
        if(this.state.userIdentifier !==""){
        return(this.props.getUser());
        }
    }

    onDelete = (id) => {
        this.props.deleteUser(id);
        console.log(id);
        this.props.history.push("/");
      };

    render() {
        const { users } = this.props.users;
        const { errors } = this.props.errors;
        console.log(errors);
        return (
            <div className="user">
                <AdminNav/>
                <div className="container-fluid phonebook">
                    <div className="row">
                        <div className="col-md-4 mauto">
                            <h5 className="display-4 text-center">Search User Details</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg")}
                                        placeholder="Enter User ID"
                                        name="userIdentifier"
                                        pattern = "[A-Z]{2}[0-9]{1,}"
                                        title = "Invalid pattern Should have two capital alphabets and one or two numbers" 
                                        onChange={this.onChange}
                                        value={this.state.userIdentifier}
                                        required
                                    />
                                    
                                    
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4"/>

                            </form>
                                <div className = "details">
                                <h3>USER DETAILS:</h3>
                                <div><b>User Identifier :</b> {users.userIdentifier}</div>
                                <div><b>Name :</b> {users.firstName}</div>
                                <div><b>Phone Number:</b> {users.phoneNumber}</div>
                                <div><b>Email :</b> {users.email}</div>
                                <div><b>Address :</b> {users.address}</div>
                                <div><Link onClick= { this.onDelete.bind(this, users.userIdentifier)}>DELETE</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SearchUserByID.propTypes = {
    getUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        errors: state.errors,
        users: state.users
    }
};
export default connect(mapStateToProps, { getUser, deleteUser })(SearchUserByID);