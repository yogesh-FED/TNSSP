import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, ListGroup, Container, Row, Col, Form } from 'react-bootstrap';
import './eligible.scss';

const EligibleSchemes = () => {
  const [approve, setApprove] = useState(false);
  const [schemesData, setSchemesData] = useState([]);
  const [selectedSchemeIds, setSelectedSchemeIds] = useState(() => {
    return JSON.parse(localStorage.getItem('selectedSchemeIds')) || [];
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('workingJson/scheme.json');
        const schemes = response.data.Schemes;
        const sortedSchemes = schemes.sort((a, b) => b.fee - a.fee);
        setSchemesData(sortedSchemes);

        
        const topThreeSchemeIds = sortedSchemes.slice(0, 3).map(scheme => 
          scheme.SchemeName.replace(/([a-z])([A-Z])/g, '$1 $2')
        );

        
        if (selectedSchemeIds.length === 0) {
          setSelectedSchemeIds(topThreeSchemeIds);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedSchemeIds', JSON.stringify(selectedSchemeIds));
  }, [selectedSchemeIds]);

  const toggleSchemeSelection = (schemeId) => {
    setSelectedSchemeIds(prevIds =>
      prevIds.includes(schemeId) ? prevIds.filter(id => id !== schemeId) : [...prevIds, schemeId]
    );
  };

  const handleSendForApproval = async () => {
    setApprove(true);
    try {
      //await axios.post('/api/selectedSchemes', { selectedSchemeIds });
      localStorage.setItem('selectedSchemeIds', JSON.stringify(selectedSchemeIds));
      alert('Schemes sent for approval');
    } catch (error) {
      alert('Failed to send schemes for approval');
      console.error('Error sending schemes: ', error);
    }
  };

  const totalSelectedFees = schemesData
    .filter(scheme => selectedSchemeIds.includes(scheme.SchemeName.replace(/([a-z])([A-Z])/g, '$1 $2')))
    .reduce((acc, curr) => acc + curr.fee, 0);

  const selectedSchemeNames = schemesData
    .filter(scheme => selectedSchemeIds.includes(scheme.SchemeName.replace(/([a-z])([A-Z])/g, '$1 $2')))
    .map(scheme => scheme.SchemeName.replace(/([a-z])([A-Z])/g, '$1 $2'));
  return (
    <Container className='eliglibleSch'>
      <Row className="mb-3">
        <Col xs={12} sm={6} md={4} lg={4} className='totalSelection'>
          <p>Total Fee of Selected Schemes: <b>₹{totalSelectedFees}</b></p>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} className='totalSelection'>
        <p>Total Number of Schemes Selected: <b>{selectedSchemeNames.length}</b></p>
          {/* <ul>
            {
              selectedSchemeNames.map((val,i) => { debugger;
                return(
                  <li>
                    {val}
                  </li>
                )
              })
            }
          </ul> */}
        </Col>
        {/* <Col xs={12} sm={6} md={4} lg={4} className='totalSelection'>
          <p>Status: <b>{approve ? 'Pending' : ''}</b></p>
        </Col> */}
      </Row>
      <Row>
        {schemesData.map((scheme) => {
          const schemeId = scheme.SchemeName.replace(/([a-z])([A-Z])/g, '$1 $2');
          const isSelected = selectedSchemeIds.includes(schemeId);
          return (
            <Col key={scheme.SchemeName} xs={12} sm={6} md={4} lg={4} className='eligibleSchemeParent'>
              <Card className={isSelected ? 'active' : ''}>
                <Card.Header style={{borderBottomColor: isSelected ? '#fff' : ''}}>
                  <b>{schemeId}</b>
                </Card.Header>
                <ListGroup className="list-group-flush"  style={{borderBottomColor: isSelected ? '#000' : ''}}>
                  <ListGroup.Item  className={isSelected ? 'active' : ''}>
                    Fee: <b>₹{scheme.fee}</b>
                  </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Form className='chkForm'>
                    <Form.Check 
                      type="checkbox" 
                      checked={isSelected}
                      onChange={() => toggleSchemeSelection(schemeId)}
                      label={isSelected ? 'Cancel Scheme' : 'Apply Scheme'}
                      style={{ cursor: 'pointer' }}
                    />
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Row>
        <button onClick={handleSendForApproval} className='sendForApproval'>
          {
            approve ? <b>Approval Pending</b> : <b>Send for Approval</b>
          }
        </button>
      </Row>
    </Container>
  );
}

export default EligibleSchemes;
