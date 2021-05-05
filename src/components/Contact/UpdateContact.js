import React, { Component } from 'react'
import {updateContact,createContact} from '../../actions/phonebookActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import UserNav from './UserNav';

class UpdateContact extends Component {
    constructor(props){
        super(props);
        this.state={
            
            contactNumber:'',
            contactName:'',
            email:''
            
        }
    }
    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }
     onSubmit=(event)=>{
        event.preventDefault();
        const updatedContact= {
            contactNumber:this.state.contactNumber,
            contactName:this.state.contactName,
            email:this.state.email
            
        }

      this.props.createContact(updatedContact,this.props.history);

    }
    componentDidMount(){
        const {contactNumber} = this.props.match.params;
        this.props.updateContact(contactNumber,this.props.history);
 
     }
 
     componentWillReceiveProps(nextProps){
         const {
            contactNumber,
            contactName,
           email       
         }=nextProps.users;
 
         this.setState({
            
             contactNumber,
             contactName,
             email        
                        
         });
     }
    render(){
        return(
            <div>
                <UserNav/>
            <div className="container-fluid phonebook">
                <div className="row">
                    <div className="col-md-6 mauto">
                        <h5 className="display-4 text-center">Update contact detials</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="User Name" 
                                    name="contactName" 
                                    onChange={this.onChange}
                                    value={this.state.contactName}
                                    pattern="[a-zA-Z][a-zA-Z ]{2,}"
                                    title="name should be in letters and spaces" required/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="User Email" 
                                    pattern="[a-zA-Z0-9+_.-]{5,15}[@][a-zA-Z]{1,8}[.][a-z]{2,5}"
                                    title="email should be like eg. name@gmail.com"
                                    name="email" 
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Phone No" 
                                    pattern="[6-9]{1}[0-9]{9}"
                                    title="phone number should start with 6 to 9 and have 10 digits"
                                    name="contactNumber" 
                                    onChange={this.onChange}
                                    value={this.state.contactNumber}
                                    required/>
                            </div>
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
UpdateContact.propTypes = {
    updateContact:PropTypes.func.isRequired,
    createContact:PropTypes.func.isRequired,
    contact:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    users: state.users
  });

export default connect(mapStateToProps,{updateContact,createContact})(UpdateContact); 