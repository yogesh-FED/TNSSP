// Login.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login/login.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import UserType from '../../components/UserType/UserType';
import LogoTn from '../../Assets/Header-image/logo_tn.png'
import LogoTnega from '../../Assets/Header-image/logo_tnega.png'
import About from '../About/About';
import HomeBanner from '../HomeBanner/HomeBanner';
import Footer from '../Footer/Footer';
import '../Login/testing.js';
import myFunction from '../Login/testing.js';
import FontChanger from '../FontChanger/FontChanger.js';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const navigate = useNavigate()
  useEffect(() => {
    //setIsLoggedIn(true)
  })
  const goToHome = () => {
    navigate('/')
  };

  return (
    <>
      <FontChanger />
      <div>
        <Container fluid className='loginParent'>
          <Col lg={12}>
            <Row>
              <Col lg={12} className='loginHeader'>
                <Row>
                  <Col md={2} className='logoImg text-center'>
                    <img src={LogoTn} alt='' onClick={() => goToHome()}/>
                  </Col>
                  <Col md={8}>
                    <div className='LoginPageTitleHeader text-center'>
                      <p onClick={myFunction}>Government of Tamil Nadu</p>
                      <h1>Student Scholarship Portal</h1>
                      <p>(Academic Year {`${currentYear - 1}-${currentMonth}`})</p>
                    </div>
                  </Col>
                  <Col md={2} className='logoImg text-center'>
                    <img src={LogoTnega} alt='' />
                  </Col>
                </Row>
              </Col>
                {/* <HomeBanner /> */}
              <Col lg={12} className='greenBg'>
                <div className='loginUserSelect text-center'>
                  <Container fluid>
                    <Row>
                      <Col md={12}>
                        <p className='intoText'>Tamil Nadu State Scholarship Portal (TNSSP)  is a single window platform for all the scholarship schemes offered by various departments of the state. click <a href='#moreUpdates'>here</a> to know more on TNSSP.</p>
                        <UserType />
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
              <Col lg={12} id='moreUpdates' className='text-center aboutUs'>
                <h4>About Scholarship</h4>
                <About />
              </Col> 
            <Footer />
            </Row>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Login;
