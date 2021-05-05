import React from 'react';
import {getContact} from '../../actions/phonebookActions';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

class ViewContact extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contactName:'',
            contactNumber:'',
            contactEmail:''
        }
    }
    componentDidMount(){

        const {contactNumber} = this.props.match.params;
       this.props.getContact(contactNumber,this.props.history);
 
     }
 
     componentWillReceiveProps(nextProps){
         const {
            contactName,
            contactNumber,
            contactEmail        
         }=nextProps.contact;
 
         this.setState({
            contactName,
            contactNumber,
            contactEmail              
                        
         });
     }
    render(){
        return(
            <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 mauto">
                        <h5 className="display-4 text-center">View Contact</h5>
                        <hr />
                        <form>
                            <div className="form-group">
                            <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Contact Name " 
                                    name="contactName" 
                                    value={this.state.contactName}/>
                            </div>
                            
                            <div className="form-group">
                            <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Email" 
                                    name="contactEmail" 
                                    value={this.state.contactEmail}/>
                            </div>
                            <div className="form-group">
                            <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Contact Number" 
                                    name="contactNumber" 
                                    value={this.state.contactNumber}/>
                            </div>
                            <Link to="/ContactDashboard" className="btn btn-lg btn-info">Ok</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
ViewContact.propTypes = {
    getContact:PropTypes.func.isRequired,
    contact:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    contact: state.contacts.contact
  });

export default connect(mapStateToProps,{getContact})(ViewContact); 