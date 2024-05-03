import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StudentGrid from '../Grid/StudentGrid';
import './student.scss';
import Schemecard from './Schemecard';

const Student = () => {
  const handleAvailClick = () => {
    alert('Approval Request has been sent to Institute')
  }
  return (
    <>
      <div className='studentScreen'>
        <Tabs
          defaultActiveKey="Eligible"
          id="studentPage"
          className="mb-3"
          fill
        >
          <Tab eventKey="BasicDetails" title="My Basic Details">
            <StudentGrid />
          </Tab>
          <Tab eventKey="Eligible" title="Your Eligible Schemes">
            <Schemecard />
            <p className='availSchemes' onClick={() => handleAvailClick()}>Avail All Schemes</p>
          </Tab>
          {/* <Tab eventKey="Status" title="Status">
            Tab content for Contact
          </Tab> */}
        </Tabs>
      </div>
    </>
  )
}

export default Student