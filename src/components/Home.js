import React, { useState } from "react";
import Sidenav from "./Sidenav";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import StudentGrid from "./Grid/StudentGrid";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dashboard from "./Dashboard/Dashboard";
import Student from "./Student/Student";

const Home = () => {
  const [isDashShow, setIsDashShow] = useState(true);
  const handleDashValueChange = (newValue) => {
    setIsDashShow(newValue);
  };
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={12}>
            {/* <Header 
              onDashValueChange={handleDashValueChange}
            /> */}
            {/* <Banner /> */}
            <Student />
            {/* {
              isDashShow ? <StudentGrid /> : <Dashboard />
            }             */}
          </Col>
        </Row>
      </Container>
        {/* <Sidenav/> */}   
    </div>
  );
};

export default Home;
