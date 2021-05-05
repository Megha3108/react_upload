import React from 'react';
import CreateContactButton from './CreateContactButton';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getContacts}from "../../actions/phonebookActions";
import {Link} from 'react-router-dom';
import {deleteContact} from '../../actions/phonebookActions';
import classnames from "classnames";
import UserNav from './UserNav';
class ContactDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[],
            errors:[],
            userIdentifier:""
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
        const deleteUser = {
            userIdentifier:this.state.userIdentifier
            
        }
        console.log(this.state.userIdentifier);
        this.props.getContacts(this.state.userIdentifier,this.props.history);
        

    }
    onDeleteClick=(userId,contactNumber)=>{
        console.log('--------ContactItemComponent:onDeleteClick Called--------')
        this.props.deleteContact(userId,contactNumber);
    }
    componentDidMount(){
        if(this.state.userIdentifier !==""){
            this.props.getContacts(this.state.userIdentifier);
        }
    }

    render(){

        const {users} =  this.props.users;
        const {errors}=this.props.errors;
        console.log(users);
        return(
            <div>
                <UserNav/>
                <div className="phonebook">
                <div className="row">
                <div className="col-md-6 mauto">
               <h2 className="display-4 text-center">Contacts List</h2>
               <br/>
               <CreateContactButton/>
               <hr/>
               <form onSubmit={this.onSubmit}>
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg")}
                                    placeholder="Enter User ID" 
                                    name="userIdentifier"
                                    pattern = "[A-Z]{2}[0-9]{2,}"
                                    title = "Pattern Should have two capital alphabets and minimum two numbers" 
                                    onChange={this.onChange}
                                    value={this.state.userIdentifier}
                                    required/>
                            </div>
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                         </div>
                    </div>
                   
                    <div>
                        <table className = "table table-striped table-bordered col-md-6 mx-auto">
                            <thead>
                                <tr>

                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map(
                                        (user) => 
                                        <tr key = {user.contactNumber}>
                                             <td> {user.contactName} </td>   
                                             <td> {user.email} </td>
                                             <td> {user.contactNumber} </td>
                                             <td>
                                                 {/* <Link to={"/updateContact/"+user.contactNumber} className="btn btn-sm btn-info">Update </Link> */}
                                                 <button className="btn btn-sm btn-danger" onClick={this.onDeleteClick.bind(this,user.userId,user.contactNumber)}>Delete </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    </div>
                    </div>
        );
    }
}

ContactDashboard.propTypes={
    getContacts:PropTypes.func.isRequired,
    deleteContact:PropTypes.func.isRequired,

}

const mapStateToProps=(state)=>({
    users:state.users,
    errors:state.errors
});
export default connect(mapStateToProps,{getContacts,deleteContact})(ContactDashboard);