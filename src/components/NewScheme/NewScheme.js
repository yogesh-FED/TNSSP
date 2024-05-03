import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import '../Admin/admin.scss';
import Form from 'react-bootstrap/Form';

const NewScheme = (props) => {
  const [newSchemeData, setNewSchemeData] = useState('');
  useEffect(() => { debugger;
    const fetchData = async () => {
      try {
        const newSchemeResp = await axios.get('workingJson/newScheme.json');
        setNewSchemeData(newSchemeResp.data.NewScheme);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  },[])
  return (
    <div>
      <Container className='slideLeftAni'>
        <Row>
          <Col lg={12} className="schemeParent">
            <p className="title">New Scheme</p>
          </Col>
        </Row>
        <Row className='schemeBox'>
          <p className='closeNew' onClick={props.close}>x</p>
          {
            Object.entries(newSchemeData).map(([key,Val]) => {
              return (
                Object.entries(Val).map(([key, val]) => {
                  return (
                    <Col lg={4} key={key} className='borBotm'>
                      <form action=''>
                        <Form.Group className="mb-3">
                          <Form.Label>{key.replace(/([a-z])([A-Z])/g, '$1 $2')}</Form.Label>
                          <Form.Control
                            type="text"
                          />
                        </Form.Group>
                      </form>
                    </Col>
                  )
                })
              )
            })
          }
          <button className='submitNewScheme'>Submit</button>
        </Row>
      </Container>
    </div>
  )
}

export default NewScheme