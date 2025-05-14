import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar() {
  return (
      <Navbar bg="dark" data-bs-theme="dark" className='NavBarCustom'>
        <Container>
          <Navbar.Brand className='ms-4' href="#home">Massimiliano Teramo</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#career">Career</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#hobbies">Hobbies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );  
}
export default NavBar;