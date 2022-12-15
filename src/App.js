import './App.css';
import "./component/style.css";
import {Navbar,Nav,NavDropdown,Form,Button,Container} from "react-bootstrap";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Contact } from './component/Contact';
import {Home} from './component/Home';
import {Product} from "./component/Product"
function App() {
  return(
    <BrowserRouter>
    <div className='App'>
      <div className='Container'>
      <div class="Navbar_aa">
      <Navbar bg="dark" variant={"dark"} expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand href="#">TaTa CliQ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/product">Product</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <NavDropdown title="Brands" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Mens Wear</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Womens Wear
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Kids Wear
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
      <Routes>
        <Route path="/product" element={<Product/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
    </div>
    </div>
    </div>
    </BrowserRouter>
    
  );
}
export default App;
