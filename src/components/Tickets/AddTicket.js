import React, { Component, UseState } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { addTicket } from '../../actions/phonebookActions';
import UserSupportNav from '../UserSupport/UserSupportNav';
class AddTicket extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userIdentifier: "",
            titleType: "",
            description: "",
            errors: {}
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
        const id = {
            userIdentifier: this.state.userIdentifier
        }
        const newTicket = {
            userIdentifier: this.state.userIdentifier,
            titleType: this.state.titleType,
            description: this.state.description,
        }
        let errors = this.validateAll();
        if(this.isValid(errors)) this.props.addTicket(this.state.userIdentifier, newTicket, this.props.history);
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
        errors.titleType = this.validateTitleType(this.state.titleType);
        errors.description = this.validateDescription(this.state.description);
        return errors;
    }
    validateUserIdentifier = (userIdentifier) =>
        !userIdentifier 
        ? "ID must be entered"
        : " ";

    validateTitleType = (titleType) =>
        !titleType
        ? "Title type should not be blank"
        : titleType.length < 3
        ? "Title type should have minimum 3 characters"
        : "";
    
    validateDescription = (description) =>
        !description
        ? "Description should not be blank"
        : "";
    render() {
        const { errors } = this.state;
        return (
            <div className="tickets">
                <UserSupportNav />
                <div className="container-fluid phonebook">
                    <div className="row">
                        <div className="col-md-6 mauto">
                            <h5 className="display-4 text-center">Add Ticket form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg")}
                                        placeholder="Enter User ID"
                                        name="userIdentifier"
                                        pattern="[A-Z]{2}[0-9]{2,}"
                                        title="Invalid pattern Should have two capital alphabets and minimum two numbers"
                                        onChange={this.onChange}
                                        value={this.state.userIdentifier}
                                        
                                    />
                                    {errors.userIdentifier ? <span className="text-danger">{errors.userIdentifier}</span>:""}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg")}
                                        placeholder="Title Type"
                                        name="titleType"
                                        onChange={this.onChange}
                                        value={this.state.titleType}
                                    />
                                    {errors.titleType ? <span className="text-danger">{errors.titleType}</span>:""}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg")}
                                        placeholder="write a short description"
                                        name="description"
                                        onChange={this.onChange}
                                        value={this.state.description}
                                    />
                                    {errors.description ? <span className="text-danger">{errors.description}</span>:""}

                                </div>
                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

AddTicket.propTypes = {
    addTicket: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return { errors: state.errors }
};

export default connect(mapStateToProps, { addTicket })(AddTicket);