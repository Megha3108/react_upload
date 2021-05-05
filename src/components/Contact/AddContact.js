import React from 'react';import PropTypes from "prop-types";
import { connect } from "react-redux";
import {createContact} from "../../actions/phonebookActions";
import UserNav from './UserNav';

class AddContact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userIdentifier:'',
            contactName:'',
            email:'',
            contactNumber:'',
            errors:{}
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log("--------componentWillReceiveProps : Called----------");
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }

      onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }        
    
     onSubmit=(event)=>{
        event.preventDefault();
        const newContact = {
            contactName:this.state.contactName,
            contactNumber:this.state.contactNumber,
            email:this.state.email
        }
        console.log(newContact);
        this.props.createContact(this.state.userIdentifier,newContact,this.props.history);

    }
    render(){
        return(
            <div>
                <UserNav/>
            <div className="container-fluid phonebook">
                <div className="row">
                    <div className="col-md-6 mauto">
                        <h5 className="display-4 text-center">Create Contact form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg"
                                        placeholder="Enter User ID"
                                        name="userIdentifier"
                                        pattern = "[A-Z]{2}[0-9]{1,}"
                                        title = "Invalid pattern Should have two capital alphabets and one or two numbers" 
                                        onChange={this.onChange}
                                        value={this.state.userIdentifier}
                                        required
                                    />
                                </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Contact Name" 
                                    name="contactName" 
                                    onChange={this.onChange}
                                    value={this.state.contactName} 
                                    pattern="[a-zA-Z ]{5,}"
                                    title="name should be as given @example: maha devi"
                                    required/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Contact Number" 
                                    pattern="[6-9]{1}[0-9]{9}"
                                    title="phone number should start with 6 to 9 and have 10 digits"
                                    name="contactNumber" 
                                    onChange={this.onChange}
                                    value={this.state.contactNumber}
                                    required/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Contact Email" 
                                    name="email" 
                                    pattern="[a-zA-Z0-9+_.-]{5,15}[@][a-zA-Z]{1,8}[.][a-z]{2,5}"
                                    title="email should be like eg. radha@gmail.com"
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    />
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
AddContact.propTypes = {
    createContact:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired

}
const mapStateToProps = state => ({
    errors: state.errors
  });
export default connect(mapStateToProps,{createContact})(AddContact);