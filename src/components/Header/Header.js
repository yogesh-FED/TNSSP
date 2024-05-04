import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Header/header.scss';
import { useNavigate } from 'react-router';
import FontChanger from '../FontChanger/FontChanger';
import logo from '../../Assets/Header-image/logo_tn.png';

const Header = (props) => {
  const [dashValue, setDashValue] = useState(false);
  const handleChange = () => {
    props.onDashValueChange(dashValue);
  };
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate('/login')
  }
  return (
    <>
    <FontChanger />
		<Container fluid>
      <Row>
        <Col lg={12} className='header'>
					<Row>
						<Col xs={4} md={6}>
							<div className='myProfile'>
              <img src={logo} alt="logo" />
							</div>
						</Col>
						<Col xs={8}  md={6}  className='profileName-signOut'>
							<Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Student Name"
                className='Mla'
              >
              <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
						</Col>
					</Row>
				</Col>
      </Row>
    </Container>
    </>
  )
}

export default Header