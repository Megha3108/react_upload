import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTickets } from '../../actions/phonebookActions'
import UserSupportNav from './UserSupportNav';

class ViewTicket extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidUpdate(prevPro) {
        if (this.props.errors.errorMessage) {
            alert(this.props.errors.errorMessage);
        }
    }
    componentDidMount() {
        this.props.getTickets();
    }

    render() {
        const { users } = this.props.users;
        return (
            <div>
                <UserSupportNav />
                <div className="container-fluid phonebook">
                    <br />

                    <table className="table table-bordered table-striped table-lg col-md-6 mauto">
                        <tbody>
                            <tr>
                                <th>User Identifier</th>
                                <th>Title Type</th>
                                <th>Description</th>
                            </tr>
                            {
                                users.map((user) => {
                                    const { ticketId, userIdentifier, titleType, description } = user;
                                    return (
                                        <tr key={ticketId}>
                                            <td >{userIdentifier}</td>
                                            <td>{titleType}</td>
                                            <td>{description}</td>
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

ViewTicket.propTypes = {
    getTickets: PropTypes.func.isRequired

}

const mapStateToProps = (state) => ({
    users: state.users,
    errors: state.errors
});

export default connect(mapStateToProps, { getTickets })(ViewTicket);