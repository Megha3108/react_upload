import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchUserByNum, deleteNumber } from '../../actions/phonebookActions';
import classnames from "classnames";
import { Link } from "react-router-dom";
import AdminNav from './AdminNav';
class SearchUserByNum extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            errors: [],
            phoneNumber:"",
            modalIsOpen: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors.error });
        }
    }

    onChange = (event) => {
        this.setState(
            { [event.target.name]: event.target.value }
        );
    }

    onSubmit = (event) => {
        event.preventDefault();
        const searchUserByNum = {
            phoneNumber: this.state.phoneNumber
        }
        console.log(this.state.phoneNumber);
        this.props.searchUserByNum(this.state.phoneNumber, this.props.history);
    }

    componentDidMount() {
        if(this.state.phoneNumber !==""){
            return(this.props.searchUserByNum());
        }
    }
    onDelete = (id) => {
        this.props.deleteNumber(id);
        console.log(id);
        this.props.history.push("/");
      };

    render() {
        const { users } = this.props.users;
        const { errors } = this.props.errors;
        return (
            <div className="user">
                <AdminNav/>
                <div className="container-fluid phonebook">
                    <div className="row">
                        <div className="col-md-4 mauto">
                            <h5 className="display-4 text-center">Search User Details By Number</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg")}
                                        placeholder=" Enter Phone Number to search"
                                        name="phoneNumber"
                                        pattern = "[6-9]{1}[0-9]{9}"
                                        title = "Invalid Phone Number" 
                                        onChange={this.onChange}
                                        value={this.state.phoneNumber}
                                        required
                                    /> 
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4"/>

                            </form>
                                <div className = "details">
                                <h3>USER DETAILS:</h3>
                                <div><b>User Identifier :</b> {users.userIdentifier}</div>
                                <div><b>Name :</b> {users.name}</div>
                                <div><b>Phone Number:</b> {users.phoneNumber}</div>
                                <div><b>Email :</b> {users.email}</div>
                                <div><b>Address :</b> {users.address}</div>
                                <div><Link onClick= { this.onDelete.bind(this, users.phoneNumber) }>DELETE</Link></div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SearchUserByNum.propTypes = {
    searchUserByNum: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        errors: state.errors,
        users: state.users
    }
};
export default connect(mapStateToProps, { searchUserByNum, deleteNumber })(SearchUserByNum);