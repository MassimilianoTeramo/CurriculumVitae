import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {

  return (
    <div className="pt-4">    
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="NavBarCustom">
      <Container>
        <Navbar.Brand className="ms-4" href="#home">
          Massimiliano Teramo
        </Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/career">Career</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/hobbies">Hobbies</Nav.Link>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>

  );
}
export default NavBar;
