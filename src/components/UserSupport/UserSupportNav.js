import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
class UserSupportNav extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">PhoneBook Application</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/addTicket">Add Ticket</Nav.Link>
                    <Nav.Link href="/allTickets">View Tickets</Nav.Link>
                    <Nav.Link href="/deleteTicket">Delete Tickets</Nav.Link>
                    <Nav.Link href="/searchticket">Search Ticket</Nav.Link>
                </Nav>
                <Nav className = "sign">
                    <NavDropdown title="Profile" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/userProfile">My profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/userlogout">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}
export default UserSupportNav;