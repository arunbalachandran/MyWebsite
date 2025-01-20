import { Container } from "react-bootstrap"
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import { useEffect, useState } from "react"

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState<String>('');  // default value set to Home
  const [scrolled, setScrolled] = useState<boolean>(false);  // default value set to Home
  const onUpdateActiveLink = (value: String) => {
    setActiveLink(value);
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        {/* <Navbar.Brand href="/">
          <img src="" alt="Logo" />
        </Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'nav-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            {/* <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link> */}
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
