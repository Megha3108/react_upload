import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
class AdminNav extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">PhoneBook Application</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/allUsers">All Users</Nav.Link>
                    <NavDropdown title="Delete" className="red" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/delete">By ID</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="/deleteNumber">By Number</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Search" id="basic-nav-dropdown" className="red">
                        <NavDropdown.Item href="/searchByNum">By Number</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="/searchUser">By ID</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav className = "sign">
                    <NavDropdown title="Profile" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/adminProfile">My profile</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/adminlogout">Logout</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar>
        );
    }
}
export default AdminNav;