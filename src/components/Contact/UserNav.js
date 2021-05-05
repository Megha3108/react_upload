import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
class UserNav extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">PhoneBook Application</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/addContact">Add contact</Nav.Link>
                    <Nav.Link href="/contactDashboard">View Contacts</Nav.Link>
                    <Nav.Link href="/#">Delete Contact</Nav.Link>
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
export default UserNav;