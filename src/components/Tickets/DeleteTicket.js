import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteTicket } from '../../actions/phonebookActions';
import classnames from "classnames";
import UserSupportNav from '../UserSupport/UserSupportNav';
class DeleteTicket extends Component {

    constructor(props) {
        super(props);

        this.state={
            users:[],
            errors : [],
            modalIsOpen: false
        }
    }

    componentWillReceiveProps(nextProps)
    {
        if(nextProps.errors)
        {
            this.setState({errors : nextProps.errors.error});
        }
    }

    onChange=(event)=>{
       this.setState(
           {[event.target.name]:event.target.value}
       );
    }

    onSubmit=(event)=>{
        event.preventDefault();
        const deleteTicket = {
            userIdentifier:this.state.userIdentifier
            
        }
        console.log(this.state.ticketId);
        this.props.deleteTicket(this.state.userIdentifier,this.props.history);
        

    }

    
    render() {
        const {errors} = this.props.errors;
        return (
            <div className="user">
                <UserSupportNav/>
            <div className="container-fluid phonebook">
                <div className="row">
                    <div className="col-md-4 mauto">
                        <h5 className="display-4 text-center">Delete Ticket details</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg")}
                                    placeholder="Unique user ID" 
                                    name="userIdentifier"
                                    pattern = "[A-Z]{2}[0-9]{1,}"
                                    title = "Invalid pattern Should have two capital alphabets and one or two numbers" 
                                    onChange={this.onChange}
                                    value={this.state.ticketId}
                                    />
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

DeleteTicket.propTypes = {
    deleteTicket:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return { errors: state.errors }
};
export default connect(mapStateToProps,{deleteTicket})(DeleteTicket);