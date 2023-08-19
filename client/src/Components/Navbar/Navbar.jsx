import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";



export const NavbarIs = () => {
  return (
    <div>
      <Navbar
  
        collapseOnSelect
        expand="lg"
        bg="info"
        variant="dark"
      >
        <Container className="navbar">
          <Navbar.Brand href="/"><h1>Zuppy App</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <div style={{
              "display": "flex",
              "gap":"10px",

            }}>
              <Link to="/biryani" style={{
                "color":"white",
                "textDecoration": "none"
              }}>Biryani</Link>
              <Link to="/pizza" style={{
                "color":"white",
                "textDecoration": "none"
              }}>Pizza</Link>
              <Link to="/burger" style={{
                "color":"white",
                "textDecoration": "none"
              }}>Burger</Link>
              
              </div>
            </Nav>
            <Nav>
              <Nav.Link href="#f8ec00ts"></Nav.Link>
              <Nav.Link
                eventKey={2}
                href="#memes"
              ></Nav.Link>
              <div className="cartIcon">
                <Link to="/cart">
                  <img
                    src="https://cdn3.iconfinder.com/data/icons/e-commerce-2-1/256/2-512.png"
                    alt=""
                    height="100%"
                    width="100%"
                  />
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
          <Link to="/signup" >
             <button>SignUp</button>
            </Link>
            <Link to="/signin" >
            <button>SignIn</button>
            </Link>
      </Navbar>
      
    </div>
  );
};
