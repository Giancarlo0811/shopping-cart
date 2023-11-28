import { Container, Navbar, Nav, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavBar({productsInCart}) {
    return (
        <Navbar className="bg-white shadow-sm mb-3" sticky="top" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
                <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
                    <Nav className="me-auto">
                        <Nav.Link to='/' as={NavLink}>Inicio</Nav.Link>
                        <Nav.Link to='tienda' as={NavLink}>Tienda</Nav.Link>
                        <Nav.Link to='carrito' as={NavLink}>Carrito</Nav.Link>
                        <Nav.Link to='sobre-nosotros' as={NavLink}>Sobre Nosotros</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <NavLink to='carrito'>
                    <Button 
                            variant="outline-primary" 
                            className="rounded-circle" 
                            style={{width: '3rem', height: '3rem', position: 'relative'}}
                            >
                                <i className="fa-solid fa-cart-shopping"></i>
                                <div 
                                className="bg-danger rounded-circle d-flex justify-content-center align-items-center" 
                                style={{ 
                                color:'white',
                                width: '1.5rem', 
                                height:'1.5rem', 
                                position:'absolute', 
                                bottom: 0, 
                                right:0,
                                transform: 'translate(25%,25%)'
                                }}
                                    ><span>{productsInCart.length}</span>
                                </div>
                    </Button>
                </NavLink>
            </Container>
        </Navbar>
    )
}

export default NavBar;