import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    // <nav>
    //   <NavLink
    //     to="/"
    //   >
    //     Home
    //   </NavLink>
    //   <NavLink
    //     to="/list"
    //   >
    //     The List
    //   </NavLink>
    //   <NavLink
    //     to="/resources"
    //   >
    //     Resources
    //   </NavLink>
    // </nav>

    // <Navbar bg="dark" data-bs-theme="dark">
    // <Container>
    //   <Navbar.Brand href="/">The Seven Noahide Laws</Navbar.Brand>
    //   <Nav className="me-auto">
    //     <Nav.Link href="/">Home</Nav.Link>
    //     <Nav.Link href="/list">Laws</Nav.Link>
    //     <Nav.Link href="/resources">Resources</Nav.Link>
    //   </Nav>
    //   <Navbar.Collapse className="justify-content-end">
    //       <Navbar.Text>בס''ד</Navbar.Text>
    //   </Navbar.Collapse>
    // </Container>
    // </Navbar>

    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand as={NavLink} to="/">The Seven Noahide Laws</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/list">Laws</Nav.Link>
        <Nav.Link as={NavLink} to="/resources">Resources</Nav.Link>
      </Nav>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>בס''ד</Navbar.Text>
      </Navbar.Collapse>
    </Container>
    </Navbar>
  );
};

export default NavBar;
