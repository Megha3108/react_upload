import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteUser } from '../../actions/phonebookActions';
import classnames from "classnames";
import AdminNav from './AdminNav';

class DeleteUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
            errors: {},
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
        const deleteUser = {
            userIdentifier: this.state.userIdentifier
        }
        console.log(this.state.userIdentifier);
        this.props.deleteUser(this.state.userIdentifier, this.props.history);
    }
    render() {
        const { errors } = this.props.errors;
        console.log(errors);

        //alert(errors);
        return (
            <div className="user">
                <AdminNav />
                <div className="container-fluid phonebook">
                    <div className="row">
                        <div className="col-md-4 mauto">
                            <h5 className="display-4 text-center">Delete User Details</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className={classnames("form-control form-control-lg")}
                                        placeholder="Enter User ID"
                                        name="userIdentifier"
                                        pattern="[A-Z]{2}[0-9]{2,}"
                                        title="Pattern Should have two capital alphabets and minimum of two numbers"
                                        onChange={this.onChange}
                                        value={this.state.userIdentifier}
                                        required />

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

DeleteUser.propTypes = {
    deleteUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return { errors: state.errors }
};
export default connect(mapStateToProps, { deleteUser })(DeleteUser);