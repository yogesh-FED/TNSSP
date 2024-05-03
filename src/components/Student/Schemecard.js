import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './student.scss';

const Schemecard = () => {
  return (
    <>
      <Container className='schemeCard'>
        <Row>
          <Col lg={4}>
            <Card>
              <Card.Header as="p">Central Scheme-Post-Matric Scholarship Scheme(SC)</Card.Header>
              <Card.Body>
                {/* <Card.Title>Special title treatment</Card.Title> */}
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Header as="p">State Scheme-Higher Education Special Scholarship(SC,SCC)</Card.Header>
              <Card.Body>
                {/* <Card.Title>Special title treatment</Card.Title> */}
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Header as="p">State Scheme-Special Post-Matric Scholarship Scheme(SCC)</Card.Header>
              <Card.Body>
                {/* <Card.Title>tet</Card.Title> */}
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Header as="p">State Scheme-Special Post-Matric Scholarship Scheme(SCC)</Card.Header>
              <Card.Body>
                {/* <Card.Title>tet</Card.Title> */}
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Header as="p">State Scheme-Special Post-Matric Scholarship Scheme(SCC)</Card.Header>
              <Card.Body>
                {/* <Card.Title>tet</Card.Title> */}
                <Card.Text>
                  With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Schemecard;