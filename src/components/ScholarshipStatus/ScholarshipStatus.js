import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import './scholarshipstatus.scss';
import Table from 'react-bootstrap/Table';

const ScholarshipStatus = (props) => {
  const handleStatusClose = () => {
    props.showStatusComp();
  }
  return (
    <div className='scholarshipStatus'>
      <Container className='text-center'>
        <Row>
          <Col lg={12}>
            <div className='innerStatus'>
              <p className='statusHeading'>SCHOLARSHIP STATUS </p>
              <Row>
                <Col lg={4} className='innerCol'>
                  <p className='head'>Scholarship Name</p>
                  <p className='subHead'>-</p>
                </Col>
                <Col lg={4} className='innerCol'>
                  <p className='head'>Scholarship Scheme</p>
                  <p className='subHead'>-</p>
                </Col>
                <Col lg={4} className='innerCol'>
                  <p className='head'>Scholarship Type</p>
                  <p className='subHead'>Fresh</p>
                </Col>
                <Col lg={4} className='innerCol'>
                  <p className='head'>Eligible Scheme Details</p>
                  <p className='subHead'>-</p>
                </Col>
                <Col lg={4} className='innerCol'>
                  <p className='head'>Scholarship Amount</p>
                  <p className='subHead'>-</p>
                </Col>
                <Col lg={4} className='innerCol'>
                  <p className='head'>Previously applied Scholarship</p>
                  <p className='subHead'>-</p>
                </Col>
              </Row>
              <p className='closeicon' onClick={() => handleStatusClose()}> <i className="fa-solid fa-xmark fa-2xl" style={{color: "#FFD43B"}}></i> </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ScholarshipStatus