import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, ListGroup, Container, Row, Col, Form } from 'react-bootstrap';
import './eligible.scss';

const EligibleSchemes = () => {
  const [approve, setApprove] = useState(false);
  const [schemesData, setSchemesData] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [filterSearchInput, setFilterSearchInput] = useState('');
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
        setFilteredSearch(sortedSchemes);        
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

  const handleFilterChange = (event) => { debugger;
    const value = event.target.value.toLowerCase();
    setFilterSearchInput(value);
    const filtered = schemesData.filter(scheme =>
      scheme.SchemeName.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().includes(value) || 
      scheme.fee.toString().includes(value)
    );
    setFilteredSearch(filtered);
  };
  

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
        <div className='statusDiv text-center'>
        <p><b>Total Fee of Selected Schemes</b></p>
        <h3> <b>₹{totalSelectedFees}</b></h3>
        </div>
        </Col>
        <Col xs={12} sm={6} md={4} lg={4} className='totalSelection'>
        <div className='statusDiv text-center'>
          <p><b>Total Number of Schemes Selected</b></p>
          <h3><b>{selectedSchemeNames.length}</b></h3>
        </div>
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
        <Col lg={12}>
        <Form.Group className="mb-3">
            <Form.Label>Search Scheme</Form.Label>
             <Form.Control
               type="text"
               placeholder='Enter Scheme Name or Fee'
               onChange={(event) => handleFilterChange(event)}
             />
          </Form.Group>
          <Row>
            {filteredSearch.map((scheme) => {
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
                        />
                      </Form>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
      <Row>
        <button onClick={handleSendForApproval} className=  {approve ? 'PendingBg sendForApproval' : 'sendForApproval'}>
          {
            approve ? <b>Approval Pending</b> : <b>Send for Approval</b>
          }
        </button>
      </Row>
    </Container>
  );
}

export default EligibleSchemes;
