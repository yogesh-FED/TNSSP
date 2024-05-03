import React, { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './admin.scss';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import FontChanger from '../FontChanger/FontChanger';
import Banner from '../Banner/Banner';

const Admin = () => {
  const inputRefs = useRef([]);
  const [isEditable, setIsEditable] = useState(false);
  const [fields, setFields] = useState({});
  const [selectedOption, setSelectedOption] = useState('');
  const [options, setOptions] = useState([]);
  const [optionsKeys, setOptionsKeys] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('API_URL'); // Replace 'API_URL' with your actual API endpoint
      setOptions(response.data.GeneralDetails[0]);
      setOptionsKeys(Object.keys(response.data.GeneralDetails[0]));
      setFields(response.data.fields); // Assuming API response contains the fields data
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const saveData = async (updatedFields) => {
    try {
      await axios.put('API_URL', { fields: updatedFields }); // Replace 'API_URL' with your actual API endpoint
    } catch (error) {
      console.error('Error saving data: ', error);
    }
  };

  const handleToggleEdit = () => {
    setIsEditable(!isEditable);
    if (!isEditable) {
      inputRefs.current[0]?.focus();
    }
  };

  const handleInputChange = (e, id, schemeName) => {
    const updatedFields = {
      ...fields,
      [schemeName]: fields[schemeName].map(field =>
        field.id === id ? { ...field, value: e.target.value } : field
      )
    };
    setFields(updatedFields);
    saveData(updatedFields);
  };    

  const handleSave = () => {
    setIsEditable(false);
  };

  const handleSelectChange = (event) => {
    const selectText = event.target.value;
    setSelectedOption(selectText);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="adminParent">
      <FontChanger />
      <Banner />
      <Container>
        <Row>
          <Col lg={12} className="schemeParent">
            <p className="title">schemes</p>
          </Col>
          <Col lg={12} className="selectScheme">
            <Form.Select aria-label="Default select example" onChange={handleSelectChange} value={selectedOption}>
              <option>Select Scheme</option>
              {Object.entries(options).map(([key]) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
              <option>New</option>
            </Form.Select>
          </Col>
        </Row>
        <Row>
          {Object.entries(fields).map(([schemeName, schemeFields]) =>
            schemeFields.map(field =>
              selectedOption === schemeName && (
                <Col lg={4} key={field.id}>
                  <Form.Group className="mb-3">
                    <Form.Label>{schemeName}</Form.Label>
                    <Form.Control
                      type="text"
                      value={field.value}
                      onChange={(e) => handleInputChange(e, field.id, schemeName)}
                      readOnly={!isEditable}
                      ref={(input) => (inputRefs.current[field.id - 1] = input)}
                    />
                    <Button onClick={handleToggleEdit}>{isEditable ? 'Cancel' : 'Modify'}</Button>
                    {isEditable && <button onClick={handleSave}>Save</button>}
                  </Form.Group>
                </Col>
              )
            )
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Admin;
