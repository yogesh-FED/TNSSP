import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import StudentGrid from '../Grid/StudentGrid';
import './student.scss';
import Schemecard from './Schemecard';
import MotionFramer from '../MotionFramer/MotionFramer';
import SchemeCards from '../MotionFramer/SchemeCards';
import Aggrid from '../Aggrid/Aggrid';
import EligibleSchemes from '../EligibleSchemes/EligibleSchemes';

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
          <Tab eventKey="Eligible" title="Your Eligible Schemes">
            <EligibleSchemes />
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