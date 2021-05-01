import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

const Navegation = ({boards,action}) => (
  <Navbar as="nav" className="menu" bg="primary" 
  variant="dark" aria-label="site menu" expand="md">
    <Navbar.Brand href="/"  variant="outline-success" >
      Home
    </Navbar.Brand>
    <Nav>
      <Nav.Link href="/members">
        Members
      </Nav.Link>
    </Nav>
    <Navbar.Toggle aria-label="options"></Navbar.Toggle>
    <Navbar.Collapse id="options">
    {boards.user ? (
      <Nav className="ml-auto align-items-center">
        {boards.teacher && (
        <Nav.Link href="/teacher">
            Teacher Board
        </Nav.Link>
      )}

      {boards.admin && (
        <Nav.Link href="/admin">
            Admin Board
        </Nav.Link>
      )}
      {boards.user && (
        <Nav.Link href="/user">
            Exercises
        </Nav.Link>
      )}

        <Nav.Link href="/profile">
            {boards.user.username}
        </Nav.Link>
        <Nav.Link  href="/sign" onClick={action}>
          <Button variant="light">
            LogOut
          </Button>
        </Nav.Link>
      </Nav>
      
    ) : (
      <Nav className="ml-auto">
        <Nav.Link href="/sign">
          <Button variant="light">
          Sign
          </Button>
        </Nav.Link>
      </Nav>
    )}
    </Navbar.Collapse>
  </Navbar>
)

export default Navegation;