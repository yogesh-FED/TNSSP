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
import { FormGroup } from 'react-bootstrap';
import NewScheme from '../NewScheme/NewScheme';

  const Admin = () => {
    const inputRef = useRef(null);
    // const initialFields = {
    //   "UmisId": [
    //     { id: 1, value: 'Initial Value 1', schemeName: 'UmisId' }
    //   ],
    //   "EmisId": [
    //     { id: 1, value: 'Initial Value 1', schemeName: 'UmisId' }
    //   ],
    //   "Salutation": [
    //     { id: 1, value: 'Initial Value 1', schemeName: 'UmisId' }
    //   ],
    // }
    const [isEditable, setIsEditable] = useState(false);
    const [fields, setFields] = useState({});
    const [selectedOption, setSelectedOption] = useState('');
    const [options, setOptions] = useState([]);
    const [optionsKeys, setOptionsKeys] = useState([]);
    const [formFields, setFormFields] = useState(fields);
    const [showEdit, setShowEdit] = useState(false);
    const [errors, setErrors] = useState({});
    const [allSchemes, setAllSchemes] = useState({});
    const [showTheOptions, setShowTheOptions] = useState(false);
    const [falseForOptions, setFalseForOptions] = useState(false);
    const [optionsClicked, setOptionsClicked] = useState('');
    const [optionsFromAPI, setOptionsFromAPI] = useState(false);
    const [genderApi, setGenderApi] = useState('');
    const [showNewScheme, setShowNewScheme] = useState(true);
    // const validationRules = {
    //   UmisId: {
    //     required: true,
    //     minLength: 2,
    //     maxLength: 10,
    //   },
    //   EmisId: {
    //     required: true,
    //     minLength: 2,
    //     maxLength: 10,
    //   },
    //   Salutation: {
    //     required: true,
    //   },
    // };

    // const validateForm = () => {
    //   let errors = {};
    //   Object.entries(formFields).forEach(([schemeName, schemeFields]) => {
    //     Object.entries(schemeFields).forEach(([key, value]) => {
    //       if (validationRules[key]) {
    //         if (validationRules[key].required && !value) {
    //           errors[key] = `${key} is required`;
    //         }
    //         if (
    //           validationRules[key].minLength &&
    //           value.length < validationRules[key].minLength
    //         ) {
    //           errors[key] = `${key} must be at least ${validationRules[key].minLength} characters`;
    //         }
    //         if (
    //           validationRules[key].maxLength &&
    //           value.length > validationRules[key].maxLength
    //         ) {
    //           errors[key] = `${key} must not exceed ${validationRules[key].maxLength} characters`;
    //         }
    //       }
    //     });
    //   });
    //   setErrors(errors);
    //   return Object.keys(errors).length === 0; // Return true if there are no errors
    // }
    const closeNew = () => {
      setShowNewScheme(true);
    }
    const handleToggleEdit = () => {
      setFalseForOptions(true);
      setIsEditable(!isEditable);
    };
    const saveData = async (updatedFields) => { debugger;
      try {
        localStorage.setItem('formFields', JSON.stringify(updatedFields));
        await axios.put('workingJson/scheme.json', { fields: updatedFields });
      } catch (error) {
        console.error('Error saving data: ', error);
      }
    };
    const handleSave = async () => { 
      //if (validateForm()) {
        try {
          await saveData(formFields);
          console.log('Data saved successfully');
        } catch (error) {
          console.error('Error saving data: ', error);
        }
        setIsEditable(false);
      //}
    };
    const handleCancel = () => {
      setIsEditable(false);
      setOptionsFromAPI(true);
    }
    const handleChange = (event, key, genderClickVal) => { debugger;
      const updatedValue = event.target.value;
      setFormFields(prevFormFields => ({
        ...prevFormFields,
        [selectedOption]: {
          ...prevFormFields[selectedOption],
          [key]: updatedValue
        }
      }));
    };
    // const handleOptions = (e, key) => { debugger;
    //   handleChange(e, key);
    // }
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
      setShowEdit(true);
    };
    useEffect(() => {
      if (isEditable && inputRef.current) {
        inputRef.current.focus();
      }
    }, [isEditable]);
    useEffect(() => {
      const savedFields = localStorage.getItem('formFields');
      if (savedFields) {
        setFormFields(JSON.parse(savedFields));
      }
      const fetchData = async () => {  debugger;
        try {
          const allSchemeResponse = await axios.get('workingJson/AllScheme.json');
          const schemeJson = await axios.get('workingJson/scheme.json');
          const genderApi = await axios.get('workingJson/gender.json');
          setGenderApi(genderApi);
          setOptions(schemeJson.data.Schemes);
          const allSchemesFirstData = schemeJson.data.Schemes[0].SchemeName;
          //const firstOption = Object.keys(allSchemesFirstData)[0];
          setSelectedOption(allSchemesFirstData);
          //setOptionsKeys(Object.keys(allSchemesFirstData));
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };
      fetchData();
      const fetchinitData = async () => {
        try {
          const response = await axios.get('workingJson/scheme.json');
          setFields(response.data);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };
      fetchinitData();
    }, []);
    useEffect(() => {
      if (selectedOption && fields[selectedOption]) {
        setFormFields({
          ...formFields,
          [selectedOption]: fields[selectedOption]
        });
      }
    }, [selectedOption, fields]);
    const handleSelectFieldClick = (e) => { debugger;
      // const key="gender_id";
      // setOptionsClicked(e.target.innerText)
      // handleChange(e, key, e.target.innerText);
      setOptionsFromAPI(true);
    }
    const showNew = () => {
      setShowNewScheme(false);
    }
    return (
      <div className="adminParent">
        <FontChanger />
        <Banner />
        <Container>
          <Row>
            <Col lg={12} className='schemeForm'>
              {
                showNewScheme ?
                <>
                  <Row>
                    <Col lg={12} className="schemeParent">
                      <p className="title">schemes list</p>
                    </Col>
                    <Col lg={12} className="selectScheme text-center">
                      <span>SELECT SCHEME</span>
                      <Form.Select aria-label="Default select example" onChange={handleSelectChange} value={selectedOption}>
                        {Object.entries(options).map(([key, value]) => {
                          return (
                            <option key={key} value={value.SchemeName}>
                              {value.SchemeName}
                            </option>
                          )
                        }
                        )}
                        <option>New</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={12} className='addNewScheme'>
                      <p onClick={(e) => showNew(e)}>+ Add New Scheme</p>
                    </Col>
                  </Row>
                  <Row className='schemeBox'>
                    {
                      Object.entries(fields).map(([schemeName, schemeFields]) => {
                        return (
                          Object.entries(schemeFields).map(([key, value]) => {
                            if (selectedOption === value.SchemeName) {
                              return Object.keys(value).map((key, index) => {
                                if (key === 'gender') {
                                  return (
                                    <Col lg={4} key="GenderSelect" className='borBotm'>
                                      <Form.Group className="mb-3">
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Control
                                          as="select"
                                          defaultValue={formFields[selectedOption]?.gender || '' }
                                          onChange={(e) => handleChange(e, 'gender')}
                                          disabled={!isEditable}
                                          onClick={(e) => handleSelectFieldClick(e)}
                                        >
                                          {
                                            optionsFromAPI ? Object.entries(genderApi.data.Gender).map(([key,val]) => {
                                              return(
                                                Object.entries(val).map(([key, optionVal]) => {
                                                  return (
                                                    <option key={key} value={optionVal}>
                                                      {optionVal}
                                                    </option>
                                                  )
                                                })
                                              )
                                            }) :  
                                            <option key={value.key} value={value.gender}>
                                              {value.gender}
                                            </option>
                                          }
                                        </Form.Control>
                                      </Form.Group>
                                    </Col>
                                  );
                                } 
                                else {
                                  return (
                                    <Col lg={4} key={key} className='borBotm'>
                                      <Form.Group className="mb-3">
                                        <Form.Label>{key.replace(/([a-z])([A-Z])/g, '$1 $2')}</Form.Label>
                                        <Form.Control
                                          type="text"
                                          defaultValue={selectedOption === 'New' ? '' : formFields[selectedOption]?.[key] || value[key]}
                                          onChange={(e) => handleChange(e, key)}
                                          onClick={(e) => handleChange(e, key)}
                                          disabled={!isEditable}
                                          ref={index === 0 ? inputRef : null}
                                        />
                                      </Form.Group>
                                    </Col>
                                  );
                                }
                              });
                            }
                          })
                        )
                      })
                    }
                    {
                      isEditable ? (
                      <p onClick={handleCancel} className="editIcon">Cancel</p>
                    ) : (
                      <p onClick={handleToggleEdit} className="editIcon">Edit</p>
                    )
                    }
                    {
                      isEditable && <p onClick={handleSave} className='submitFormChange'>Submit</p>
                    }
                  </Row>
                </>
                :
                <NewScheme close={closeNew}/>
              }
            </Col>
          </Row>
        </Container>
      </div>
    );
  };

  export default Admin;
