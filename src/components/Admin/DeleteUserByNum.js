import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteNumber } from '../../actions/phonebookActions';
import classnames from "classnames";
import AdminNav from './AdminNav';
class DeleteUserByNum extends Component {

    constructor(props) {
        super(props);

        this.state={
            users:[],
            errors : []
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
        const deleteNumber = {
            phoneNumber:this.state.phoneNumber
            
        }
        console.log(this.state.phoneNumber);
        this.props.deleteNumber(this.state.phoneNumber,this.props.history);
    }

    
    render() {
        const {errors} = this.props.errors;
        console.log(errors);
        return (
            <div className="user">
                 <AdminNav/>
            <div className="container-fluid phonebook">
                <div className="row">
                    <div className="col-md-4 mauto">
                        <h5 className="display-4 text-center">Delete User Details By Phone Number</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className={classnames("form-control form-control-lg")}
                                    placeholder="Enter Phone Number" 
                                    name="phoneNumber"
                                    pattern = "[6-9]{1}[0-9]{9}"
                                    title = "Invalid Phone Number" 
                                    onChange={this.onChange}
                                    value={this.state.phoneNumber}
                                    required/>
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

DeleteUserByNum.propTypes = {
    deleteNumber:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return { errors: state.errors }
};
export default connect(mapStateToProps,{deleteNumber})(DeleteUserByNum);