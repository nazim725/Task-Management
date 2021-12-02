import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={NavLink} to="/newTask">New Task</Nav.Link>
                            <Nav.Link as={NavLink} to="/inprogressTask">InprogressTask</Nav.Link>
                            <Nav.Link as={NavLink} to="/completeTask">Complete Task</Nav.Link>
                            <Nav.Link as={NavLink} to="/archiveTask">Archive Task</Nav.Link>

                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;


