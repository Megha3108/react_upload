import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">PhoneBook Application</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/">About</Nav.Link>
                    <NavDropdown title="Admin" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/allUsers">All Users</NavDropdown.Item>
                    <NavDropdown title="Delete" className="red" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/delete">By ID</NavDropdown.Item>
                        <NavDropdown.Item href="/deleteNumber">By Number</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Search" id="basic-nav-dropdown" className="red">
                    <NavDropdown.Item href="/searchByNum">By Number</NavDropdown.Item>
                        <NavDropdown.Item href="/searchUser">By ID</NavDropdown.Item>
                    </NavDropdown>
                    </NavDropdown>
                    <NavDropdown title="User" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/addContact">Save</NavDropdown.Item>
                        <NavDropdown.Item href="/contactDashboard">All Contact</NavDropdown.Item>
                        <NavDropdown.Item href="/updateContact/:userId">Update Contact</NavDropdown.Item>
                        <NavDropdown.Item href="/addTicket">Add Ticket</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="User support" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/allTickets">All Tickets</NavDropdown.Item>
                        <NavDropdown.Item href="/searchticket">Search Ticket</NavDropdown.Item>
                        <NavDropdown.Item href="/deleteTicket">Delete Ticket</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className = "sign">
                    <NavDropdown title="Sign Up"  id="basic-nav-dropdown">
                        <NavDropdown.Item href="/adminregister">Admin</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/userregister">User</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="/addTicket">User Support</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Login As" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/adminlogin">Admin</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/userlogin">User</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}
export default Navigation;