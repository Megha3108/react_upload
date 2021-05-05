import React  from 'react';
import {Link} from 'react-router-dom';
const CreateContactButton = () =>{
    return(

        <React.Fragment>
            <Link to="/addContact" className="btn btn-lg btn-info">
                Add Contact
            </Link>
        </React.Fragment>        
    );
}

export default CreateContactButton;