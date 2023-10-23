
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./myNavbar.css";
import logo from "../assets/logo.png"

export const myNavbar = ()=> {

    return(
        <nav className="navbar navbar-expand-lg  py-3 d-flex justify-content-space-between shadow sticky-top">
            <Container>
                <Navbar.Brand href="/home" className="nav-title">
                    <img id="navbar-logo" src={logo} alt="" />
                    Team Boyet
                </Navbar.Brand>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navmenu"
                    >
                    <span>
                        <i class="bi bi-list"></i>
                    </span>
                </button>

                 <div className="collapse navbar-collapse justify-content-end" id="navmenu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <Nav.Link to="/about" className="nav-link">
                            About
                        </Nav.Link>
                        </li>
                        <li className="nav-item">
                        <Nav.Link to="/platforms" className="nav-link">
                            Platforms
                        </Nav.Link>
                        </li>
                        <li className="nav-item">
                        <Nav.Link to="/gallery" className="nav-link">
                            Gallery
                        </Nav.Link>
                        </li>
                    </ul>
                    </div>
            </Container>
        </nav>
    );
};

export default myNavbar;