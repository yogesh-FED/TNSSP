import React, { useEffect } from 'react';
import '../Banner/banner.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TnLogo from '../../Assets/Header-image/logo_tn.png';
import ScholarshipStatus from '../ScholarshipStatus/ScholarshipStatus';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const Banner = (props) => {
  const [showStatusComp, setShowStatusComp] = useState(false);
  const handleStatusClick = () => {
    setShowStatusComp(true);
  }
  const handleClose = () => {
    setShowStatusComp(false);
  }
  useEffect(() => {
    if(showStatusComp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  },[showStatusComp])
  const navigate = useNavigate()
  const goToHome = () => {
    navigate('/')
  }
  return (
    <>
      <div className='bannerComp'>
        <Container>
          <Row>
            <Col lg={12}>
              <img src={TnLogo} alr='TnLogo' onClick={goToHome}/>
              <p onClick={() => handleStatusClick()}>Scholarship Status</p>
            </Col>
          </Row>
        </Container>
      </div>
      {
        showStatusComp && <ScholarshipStatus showStatusComp={handleClose} />
      }
    </>
  )
}

export default Banner