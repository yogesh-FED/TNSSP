import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../Assets/Header-image/logo_tn.png';
import logoTnega from '../../Assets/Header-image/logo_tnega.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './mainnav.scss';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import FontChanger from '../FontChanger/FontChanger';
import { useState } from 'react';
import { useEffect } from 'react';

function MainNav() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate('/login');
  }
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <FontChanger isSticky={isSticky}/>
      <div className={isSticky ? 'sticky marDiv' : 'marDiv'}>
      <marquee>
        <p className="marText" >To proceed with Scholarship Application process please ensure that you have a valid UMIS ID generated through UMIS Portal. Please contact your Institute's UMIS Nodal officer for assistance in enrolling in UMIS Portal.</p>
      </marquee>
      </div>
      <div className='navSec'>
        <Navbar collapseOnSelect expand="lg" className={isSticky ? 'customCss sticky' : 'customCss'}>
          <Container fluid>
            <Navbar.Brand href="#home">
              <img src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto fontIncr">
                <p role="button" className="nav-link" tabIndex="0">
                  State Scholarship Portal
                </p>
              </Nav>
              <Nav className='sideMenus'>
                <Nav.Link eventKey={2}>About</Nav.Link>
                <Nav.Link eventKey={2}>Scheme</Nav.Link>
                <Nav.Link className='loginStyle' onClick={() => handleLogin()}>Login</Nav.Link>
                <Nav.Link eventKey={2}>
                  {/* <img src={logoTnega} alt="logo2"  /> */}
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className='headerContent text-center'>
          <h1>State Scholarship Portal</h1>
          <p>(Academic Year {`${currentYear - 1}-${currentYear}`})</p>
          <p className='headerinnercont'>Tamil Nadu State Scholarship Portal (TNSSP) is a single window platform for all the scholarship schemes offered by various departments of the state. This portal envisage to provide an end-to-end solution for all the scholarship schemes starting from online student registration, verifications and disposal of application online, sanction and disbursal of various scholarships to the students through Direct Benefit Transfer (DBT). This portal aims to provide a simplified and transparent system for faster & effective disposal of the scholarship applications and delivery of funds directly into beneficiaries account without any hassles. The portal facilitates a common portal for all the stakeholders like students, colleges / institutions, welfare departments, etc. for various Scholarships schemes of Central and State Governments.</p>
        </div>
      </div>
    </>
  );
}

export default MainNav;