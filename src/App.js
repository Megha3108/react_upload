
import './App.css';
// import './components/Layout/style.css';
import "./FontAwsomeIcons";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from './store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Layout/Header';
import Navigation from './components/Layout/Navigation';
import ViewUsers from './components/Admin/ViewUsers';
import DeleteUser from './components/Admin/DeleteUser';
import DeleteUserByNum from './components/Admin/DeleteUserByNum';
import SearchUserByNum from './components/Admin/SearchUserByNum';
import SearchUserByID from './components/Admin/SearchUserByID';
import ViewTicket from './components/UserSupport/ViewTicket';
import SearchTicket from './components/UserSupport/SearchTicket';
import AddContact from './components/Contact/AddContact';
import ContactDashboard from './components/Contact/ContactDashboard';
import UpdateContact from './components/Contact/UpdateContact';
import DeleteTicket from './components/Tickets/DeleteTicket';
import AddTicket from './components/Tickets/AddTicket';
import UserLogin from './components/Contact/UserLogin';
import AdminRegister from './components/Admin/AdminRegister';
import Footer from './components/Layout/Footer';
import AdminLogin from './components/Admin/AdminLogin';
import UserRegister from './components/Contact/UserRegister';
import AdminNav from './components/Admin/AdminNav';
import UserNav from './components/Contact/UserNav';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Route exact path="/" component={Navigation}/>
        <Route exact path="/allUsers" component={ViewUsers} />
        <Route exact path="/delete" component={DeleteUser} />
        <Route exact path="/deleteNumber" component={DeleteUserByNum} />
        <Route exact path="/searchByNum" component={SearchUserByNum} />
        <Route exact path="/searchUser" component={SearchUserByID} />
        <Route exact path="/allTickets" component={ViewTicket}/>
        <Route exact path="/searchticket" component={SearchTicket}/>
        <Route exact path="/addContact" component={AddContact}/>
        <Route exact path="/contactDashboard" component={ContactDashboard}/>
        {/* <Route exact path="/updateContact/:userId" component={UpdateContact}/> */}
        <Route exact path="/deleteTicket" component={DeleteTicket}/>
        <Route exact path="/addTicket" component={AddTicket}/>
        <Route exact path="/adminlogin" component={AdminLogin}/>
        <Route exact path="/userlogin" component={UserLogin}/>
        <Route exact path="/userregister" component={UserRegister}/>
        <Route exact path="/adminregister" component={AdminRegister}/>
        <Route exact path="/adminNav" component={AdminNav}/>
        <Route exact path="/userNav" component={UserNav}/>
        {/*
            Delete Contact
            user and admin profile
            user and admin sign out
            update contact
            login admin and user
            Home page
            About
            Contact Us
            errors
        */}
        <Footer/>
      </Router>
    </Provider>

  );
}

export default App;
