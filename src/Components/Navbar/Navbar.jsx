import {
    Container,
    Nav,
    Navbar as BaseNavbar
} from "react-bootstrap";
import "./Navbar.css"


const Navbar = () => {
    return (
        <BaseNavbar className="navbar">
            <Container>
                <BaseNavbar.Brand href="#" className="logo"><b>GetbotsTest</b></BaseNavbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className="link" href="https://getbots.com.br/">GetBots page</Nav.Link>
                    <Nav.Link className="link" href="https://app.sheetlabs.com/#/services/doc/GETB/apidesafio">API utilizada</Nav.Link>
                </Nav>
            </Container>
        </BaseNavbar>
    )
}
export default Navbar