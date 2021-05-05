import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getUsers} from '../../actions/phonebookActions'
import AdminNav from './AdminNav';

class ViewUsersComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            users:[],
            errorMessage:""
        }
    }

    componentDidUpdate(prevPro){
        if (this.props.errors.errorMessage) {
            alert(this.props.errors.errorMessage);
        }
    }
    componentDidMount(){
        this.props.getUsers();
    }

    render() {
        const {users} =  this.props.users;
        return (
            <div>
                <AdminNav/>
            <div className="container-fluid phonebook">
                <br/>
                <table className="table col-md-10 mx-auto table-bordered">
                    <tbody>
                    <tr>
                        <th>User Identifier</th>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                        {
                           users.map((user) => {
                                const { userIdentifier, firstName, phoneNumber, email, address } = user;
                                return (
                                    <tr key={phoneNumber+1}>
                                        <td >{userIdentifier}</td>
                                        <td>{firstName}</td>
                                        <td>{phoneNumber}</td>
                                        <td>{email}</td>
                                        <td>{address}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            </div>
        );
    }
}

ViewUsersComponent.propTypes={
    getUsers:PropTypes.func.isRequired,

}

const mapStateToProps=(state)=>({
    users:state.users,
    errors:state.errors
});

export default connect(mapStateToProps,{getUsers})(ViewUsersComponent);