import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { searchTicket } from '../../actions/phonebookActions';
import classnames from "classnames";
import { Link } from "react-router-dom";
import UserSupportNav from './UserSupportNav';
class SearchTicket extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            errors: [],
            userIdentifier:"",
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
        const searchTicket = {
            userIdentifier: this.state.userIdentifier

        }
        console.log(this.state.userIdentifier);
        this.props.searchTicket(this.state.userIdentifier, this.props.history);

    }
    componentDidMount() {
        if(this.state.userIdentifier !==""){
        return(this.props.searchTicket());
        }
    }
  

    render() {
        const { users } = this.props.users;
        const { errors } = this.props.errors;
        console.log(errors);
        return (
            <div className="user">
                <UserSupportNav/>
                <div className="container-fluid phonebook">
                    <div className="row">
                        <div className="col-md-4 mauto">
                            <h5 className="display-4 text-center">Search User Ticket</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>

                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg")}
                                        placeholder="Unique User ID"
                                        name="userIdentifier"
                                        pattern = "[A-Z]{2}[0-9]{1,}"
                                        title = "Invalid pattern Should have two capital alphabets should have one or two numbers" 
                                        onChange={this.onChange}
                                        value={this.state.userIdentifier}
                                    />
                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4"/>

                            </form>
                                <div className = "details">
                                <h3>USER DETAILS:</h3>
                                <div><b>User Ticket :</b> {users}</div>
                            
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

SearchTicket.propTypes = {
    searchTicket: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return {
        errors: state.errors,
        users: state.users
    }
};
export default connect(mapStateToProps, { searchTicket })(SearchTicket);