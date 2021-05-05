import axios from 'axios';
import { GET_ERRORS, GET_USERS, GET_USER, DELETE_USER, DELETE_USER_BY_NUM, SEARCH_USER_BY_NUM, 
    GET_TICKETS, SEARCH_TICKETS, DELETE_CONTACT, GET_CONTACTS, GET_CONTACT, DELETE_TICKET} from './type';


    export const adminRegister=(admin, history)=>async dispatch =>{
        try{
            const res = await axios.post(`http://localhost:8080/api/phonebook/adminregister`, admin)
            console.log(res);
            alert("Registered Successfully")
            history.push("/adminlogin");
        }
        catch (error) {
            alert(error.response.data.message);
            console.log(error.response.data.message);
            dispatch({
                type: GET_ERRORS,
                payload: error.response.data
            })
        }
    }
export const adminLogin=(email, password, history)=> async dispatch =>{
    try{
        const res = await axios.get(`http://localhost:8080/api/phonebook/adminLogin/${email}/${password}`)
        console.log(res);
        alert(res.data);
        history.push("/adminNav");
    }
    catch (error) {
        alert(error.response.data.message);
        console.log(error.response.data.message);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}
export const userRegister=(user, history)=>async dispatch =>{
    try{
        const res = await axios.post(`http://localhost:8080/api/phonebook/newUserRegister`, user)
        console.log(res);
        alert("Registered Successfully")
        history.push("/userlogin");
    }
    catch (error) {
        alert(error.response.data.message);
        console.log(error.response.data.message);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}
export const userLogin=(email, password, history)=> async dispatch =>{
    try{
        const res = await axios.get(`http://localhost:8080/api/phonebook/userLogin/${email}/${password}`)
        console.log(res);
        alert(res.data);
        history.push("/userNav");
    }
    catch (error) {
        alert(error.response.data.message);
        console.log(error.response.data.message);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

export const getUsers = () => async dispatch => {
    await axios.get("http://localhost:8080/api/phonebook/allUsers")
        .then(response => {
            if (response.status === 200) {
                dispatch({
                    type: GET_USERS,
                    payload: response.data
                })
            }
            else {
                var error = new Error('Error' + response.status + ' ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmsg = new Error(error.message);
                console.log(error);
                alert("Network error");
                throw errmsg;
                
            })
            
        .catch(error => dispatch(getUsersError(error.message)));
}
export const getUsersError = (errmesg) => ({
    
    type: GET_ERRORS,
    payload: errmesg
})

export const getUser = (useridentifier, history) => async dispatch => {
    try{
    const res = await axios.get(`http://localhost:8080/api/phonebook/byUserIdentifier/${useridentifier}`);
    console.log(res);
    //history.push("/singleUser");
    dispatch({
        type: GET_USER,
        payload: res.data
    })
}
    catch (error) {
        alert(error.response.data.message);
        console.log(error.response.data.message);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data.message
        })
    }
}
export const searchUserByNum = (phoneNumber, history) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:8080/api/phonebook/byUserphoneNumber/${phoneNumber}`);
    console.log(res);
    dispatch({
        type: SEARCH_USER_BY_NUM,
        payload: res.data
    })
    }
    catch (error) {
        alert(error.response.data);
        console.log(error.response);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
    
}

export const deleteUser = (userIdentifier, history) => async dispatch => {
    try {
        if (window.confirm("Are you sure ? This will delete the user and the data related to it")) {
            const res = await axios.delete(`http://localhost:8080/api/phonebook/byIdentifier/${userIdentifier}`);
            alert("User successfully deleted !!");
            dispatch({
                type: DELETE_USER,
                payload: userIdentifier
            })
        }
    }
    catch (error) {

        console.log(error.response.data);
        alert(error.response.data)
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}
export const deleteNumber = (phoneNumber, history) => async dispatch => {
    try {
        if (window.confirm("Are you sure ? This will delete the user and the data related to it")) {
            const res = await axios.delete(`http://localhost:8080/api/phonebook/${phoneNumber}`);
            console.log(res);
            alert("User successfully deleted !!");
            dispatch({
                type: DELETE_USER_BY_NUM,
                payload: phoneNumber
            })
        }
    }
    catch (error) {
        alert(error.response.data);
        console.log(error.response);
        dispatch({
            type: GET_ERRORS,
            payload: error.response.data
        })
    }
}

//UserSupport
export const getTickets = () => async dispatch => {
    await axios.get("http://localhost:8080/api/phonebook/allTickets")
        .then(response => {
            if (response.status === 200) {
                dispatch({
                    type: GET_TICKETS,
                    payload: response.data
                })
            }
            else {
                var error = new Error('Error' + response.status + ' ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmsg = new Error(error.message);
                throw errmsg;
            })
        .catch(error => dispatch(getTicketsError(error.message)));
}
export const getTicketsError = (errmesg) => ({
    type: GET_ERRORS,
    payload: errmesg
})

export const searchTicket = (useridentifier, history) => async dispatch => {
    try{
    const res = await axios.get(`http://localhost:8080/api/phonebook/viewTicketByIdentifier/${useridentifier}`);
    console.log(res);
    dispatch({
        type: SEARCH_TICKETS,
        payload: res.data
    })
}
catch (error) {
    console.log(error.response);
    dispatch({
        type:GET_ERRORS,
        payload:error.response.data
    })
}
}

//Contact
export const createContact=(userIdentifier,contact,history)=>async dispatch=> {
    try {
        await axios.post (`http://localhost:8080/api/phonebook/addContact/${userIdentifier}`,contact);
        alert("Contact saved");
        history.push("/");
    } 
    catch (error) {
        alert(error.response.data.message);
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}
export const getContacts=(userIdentifier)=>async dispatch=>{
    try{
    const res=await axios.get(`http://localhost:8080/api/phonebook/allContacts/${userIdentifier}`);
    console.log(res);
    dispatch({
        type:GET_CONTACTS,
        payload:res.data
    })
}
    catch (error) {
        alert(error.response.data);
        console.log(error.response);
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}
export const updateContact=(contactNumber,history)=>async dispatch=>{
    const res=await axios.put(`http://localhost:8080/api/phonebook/updateContact/${contactNumber}`);
    dispatch({
        type:GET_CONTACT,
        payload:res.data
    })
}
export const deleteContact=(userIdentifier,contactNumber)=>async dispatch=>{
    try{
    if(window.confirm("Are you sure ? This will delete the contact")) {
        const result= await axios.delete(`http://localhost:8080/api/phonebook/deleteContact/${userIdentifier}/${contactNumber}`);
        alert("Contact Deleted");
        console.log(result);
        dispatch({
           type:DELETE_CONTACT,
            payload:contactNumber
        })
    }
}
catch (error) {
    console.log(error.response);
    dispatch({
        type:GET_ERRORS,
        payload:error.response.data
    })
}
}

//Ticket

export const addTicket=(userIdentifier,ticket,history)=>async dispatch=> {
    try {
        const res =await axios.post (`http://localhost:8080/api/phonebook/addTicket/${userIdentifier}`,ticket)
        history.push("/");
        alert("Ticket added");
    } catch (error) {
        alert("User with ID not found");
        console.log(error.response.data.message);
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        })
    }
}

export const deleteTicket = (userIdentifier, history) => async dispatch => {
try {
    if (window.confirm("Are you sure ? This will delete the ticket and the data related to it")) {
        const res = await axios.delete(`http://localhost:8080/api/phonebook/deleteTicket/${userIdentifier}`);

        alert("Ticket successfully deleted !!");
        history.push("/");
        dispatch({
            type: DELETE_TICKET,
            payload: userIdentifier
        })
    }
}
catch (error) {

    alert(error.response.data);
    console.log(error.response);
    dispatch({
        type: GET_ERRORS,
        payload: error.response.data
    })
}
}
