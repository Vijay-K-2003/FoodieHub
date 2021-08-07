import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="./">FoodieHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="ml-auto">
              <Nav.Link href="./cart">
              <i className="fas fa-shopping-cart"></i> Cart
              </Nav.Link>
              <Nav.Link href="./login">
                <i className="fas fa-user"></i> Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
