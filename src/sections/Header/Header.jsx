
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from '../../../public/a-logo.png'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    
    <div className="App">
      <header>
        <div id="navbarHeader" className="collapse bg-transparent">
          <Container>
            <Row>
              <Col sm={8} md={7} className="py-4">
                <h4 className="text-white">About</h4>
                <p className="text-muted">
                  Add some information about the album below.
                </p>
              </Col>
              <Col sm={4} md={{ span: 10, offset: 1 }} className="py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white">
                      Follow on Twitter
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
        <Navbar bg="dark" expand={false} variant="dark" className="box-shadow">
          <Container className="d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <img src={logo} alt="" />
            </a>
            <Navbar.Toggle
              data-toggle="collapse"
              data-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              label="Toggle navigation"
            />
          </Container>
        </Navbar>
      </header>
    </div>
      
  );
}