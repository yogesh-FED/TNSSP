import * as React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import StudentTabs from '../tabs/StudentTabs';
import '../Grid/studentGrid.scss';
import { FunctionContextProvider } from '../Utils/utils';
import Table from 'react-bootstrap/Table';

export default function StudentGrid() {
  return (
      <Container fluid className='parentDiv'>
        <Row>
            {/* <Col lg={4}>
              <Row>
              <Col lg={12} className='studentBasicDetails'>
                 
                  <div className='studentNameUmis text-center'>
                    <h5>Siva's Profile</h5>
                    
                    <span>1234567890</span>
                    <p className='studentUmisId'>
                      UMIS ID
                    </p>
                    <Col lg={12}>
                      <Row>
                        <Col lg={12} className='text-center'>
                          <Table>
                            <tbody>
                              <tr>
                                <td><b>Gender</b></td>
                                <td>Male</td>
                              </tr>
                              <tr>
                                <td><b>D.O.B</b></td>
                                <td>18 Aug 1995</td>
                              </tr>
                              <tr>
                                <td><b>Institute</b></td>
                                <td>Anna Institute</td>
                              </tr>
                            </tbody>
                          </Table>
                        </Col>
                      </Row>
                    </Col>
                  </div>
                </Col>
              </Row>
            </Col> */}
            <Col lg={12}>
              {/* <FunctionContextProvider> */}
                <StudentTabs />
              {/* </FunctionContextProvider> */}
            </Col>
        </Row>
      </Container>
  );
}