import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StudentGrid from '../Grid/StudentGrid';
import Table from 'react-bootstrap/Table';
import './student.scss';
import { Card, ListGroup, Container, Row, Col, Form } from 'react-bootstrap';
import Schemecard from './Schemecard';
import MotionFramer from '../MotionFramer/MotionFramer';
import SchemeCards from '../MotionFramer/SchemeCards';
import Aggrid from '../Aggrid/Aggrid';
import EligibleSchemes from '../EligibleSchemes/EligibleSchemes';
import StudentEligibleScheme from './StudentEligibleScheme';

const Student = () => {
  const handleAvailClick = () => {
    alert('Approval Request has been sent to Institute')
  }
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  return (
    <>
      {/* <Container fluid className='studentDetailsList'>
        <Row>
          <Col lg={12} className='detailsSection'>
              <Row>
                <Col md={4} className='studentList'>
                  <div className='innerListDiv'>
                    <p>Student Name</p>
                    <span>Thirumurthi</span>
                  </div>
                </Col>
                <Col md={4} className='studentList'>
                  <div className='innerListDiv'>
                    <p>Academic Year</p>
                    <span>{`${currentYear - 1}-${currentYear}`}</span>
                  </div>
                </Col>
                <Col md={4} className='studentList'>
                  <div className='innerListDiv'>
                    <p>Institute Name</p>
                    <span>Anna University, Chennai</span>
                  </div>
                </Col>
                <Col md={4} className='studentList'>
                  <div className='innerListDiv'>
                    <p>Gender</p>
                    <span>Male</span>
                  </div>
                </Col>
                <Col md={4} className='studentList'>
                  <div className='innerListDiv'>
                    <p>Fees Paid</p>
                    <span>₹ 50000</span>
                  </div>
                </Col>
                <Col md={4} className='studentList'>
                  <div className='innerListDiv'>
                    <p>Total Fee</p>
                    <span>₹ 75000</span>
                  </div>
                </Col>
              </Row>
          </Col>
        </Row>
      </Container> */}
      <Container fluid className='studentBasicDetails'>
        <Row>
          <Col lg={4}>
            <Table hover>
              <tbody>
                <tr>
                  <td><b>Student Name :</b></td>
                  <td>Thirumurugan</td>
                </tr>
                <tr>
                  <td><b>Institute Name :</b></td>
                  <td>Anna University, Chennai</td>
                </tr>
                <tr>
                  <td><b>Academic Year :</b></td>
                  <td>{`${currentYear - 1}-${currentYear}`}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg={4}>
            <Table hover>
              <tbody>
                <tr>
                  <td width={100}><b>Gender :</b></td>
                  <td>Male</td>
                </tr>
                <tr>
                  <td><b>Fees paid :</b></td>
                  <td>₹ 15000</td>
                </tr>
                <tr>
                  <td><b>Total Fee :</b></td>
                  <td>₹ 100000</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <div className='studentScreen'>
        <Tabs
          defaultActiveKey="Eligible"
          id="studentPage"
          className="mb-3"
          fill
        >
          <Tab eventKey="Eligible" title="Your Eligible Schemes">
            {/* <EligibleSchemes /> */}
            <StudentEligibleScheme />
          </Tab>
          <Tab eventKey="BasicDetails" title="My Basic Details">
            <StudentGrid />
          </Tab>
          <Tab eventKey="Scheme Status" title="Scheme Status">
            <Aggrid />
          </Tab>
        </Tabs>
      </div>
    </>
  )
}

export default Student