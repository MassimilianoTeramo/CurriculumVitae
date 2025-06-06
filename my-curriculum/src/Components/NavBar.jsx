import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {

  return (
    <div className="pt-4">    
      <Navbar bg="dark" data-bs-theme="dark" className="NavBarCustom">
      <Container>
        <Navbar.Brand className="ms-4" href="#home">
          Massimiliano Teramo
        </Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/career">Career</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/hobbies">Hobbies</Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
    </div>

  );
}
export default NavBar;


/*

  const darkMode = useDarkMode(false);

  
<button type="button" onClick={darkMode.disable}>
            ☀
          </button>
          <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
          <button type="button" onClick={darkMode.enable}>
            ☾
          </button>*/