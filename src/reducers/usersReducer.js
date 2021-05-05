import { GET_USER, GET_USERS, SEARCH_USER_BY_NUM, GET_TICKETS, SEARCH_TICKETS, GET_CONTACTS, 
    GET_CONTACT, DELETE_CONTACT, DELETE_TICKET} from "../actions/type";

const initialState = {
    users: [],
    user: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case GET_USER:
            return {
                ...state,
                users: action.payload
            }
            case SEARCH_USER_BY_NUM:
                return {
                    ...state,
                    users: action.payload
                }
                case GET_TICKETS:
            return {
                ...state,
                users: action.payload
            }
        case SEARCH_TICKETS:
            return {
                ...state,
                users: action.payload
            }
            case GET_CONTACTS:
            return{
                ...state,
                users:action.payload
            }
        case GET_CONTACT:
            return{
                ...state,
                users:action.payload
            }
        case DELETE_CONTACT:
            return{
                ...state,
                users:state.users.filter(
                    user=>user.contactNumber!==action.payload
                )
            };
            case DELETE_TICKET:
                return {
                    ...state,
                    users: action.payload
                    
                }
           
        default:
            return state;
        }
    }