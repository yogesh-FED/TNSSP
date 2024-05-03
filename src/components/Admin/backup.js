//   import React, { useEffect, useRef, useState } from 'react';
//   import Container from 'react-bootstrap/Container';
//   import Row from 'react-bootstrap/Row';
//   import Col from 'react-bootstrap/Col';
//   import './admin.scss';
//   import Form from 'react-bootstrap/Form';
//   import Button from 'react-bootstrap/Button';
//   import axios from 'axios';
//   import FontChanger from '../FontChanger/FontChanger';
//   import Banner from '../Banner/Banner';

//   const Admin = () => {
//     const inputRef = useRef(null);
//     // const initialFields = {
//     //   "UmisId": [
//     //     { id: 1, value: 'Initial Value 1', schemeName: 'UmisId' }
//     //   ],
//     //   "EmisId": [
//     //     { id: 1, value: 'Initial Value 1', schemeName: 'UmisId' }
//     //   ],
//     //   "Salutation": [
//     //     { id: 1, value: 'Initial Value 1', schemeName: 'UmisId' }
//     //   ],
//     // }
//     const [isEditable, setIsEditable] = useState(false);
//     const [fields, setFields] = useState({});
//     const [selectedOption, setSelectedOption] = useState('');
//     const [options, setOptions] = useState([]);
//     const [optionsKeys, setOptionsKeys] = useState([]);
//     const [formFields, setFormFields] = useState(fields);
//     const [showEdit, setShowEdit] = useState(false);
//     const [errors, setErrors] = useState({});
//     const [allSchemes, setAllSchemes] = useState({});
//     // const validationRules = {
//     //   UmisId: {
//     //     required: true,
//     //     minLength: 2,
//     //     maxLength: 10,
//     //   },
//     //   EmisId: {
//     //     required: true,
//     //     minLength: 2,
//     //     maxLength: 10,
//     //   },
//     //   Salutation: {
//     //     required: true,
//     //   },
//     // };

//     // const validateForm = () => {
//     //   let errors = {};
//     //   Object.entries(formFields).forEach(([schemeName, schemeFields]) => {
//     //     Object.entries(schemeFields).forEach(([key, value]) => {
//     //       if (validationRules[key]) {
//     //         if (validationRules[key].required && !value) {
//     //           errors[key] = `${key} is required`;
//     //         }
//     //         if (
//     //           validationRules[key].minLength &&
//     //           value.length < validationRules[key].minLength
//     //         ) {
//     //           errors[key] = `${key} must be at least ${validationRules[key].minLength} characters`;
//     //         }
//     //         if (
//     //           validationRules[key].maxLength &&
//     //           value.length > validationRules[key].maxLength
//     //         ) {
//     //           errors[key] = `${key} must not exceed ${validationRules[key].maxLength} characters`;
//     //         }
//     //       }
//     //     });
//     //   });
//     //   setErrors(errors);
//     //   return Object.keys(errors).length === 0; // Return true if there are no errors
//     // }
//     const handleToggleEdit = () => {
//       setIsEditable(!isEditable);
//     };
//     const saveData = async (updatedFields) => { 
//       try {
//         localStorage.setItem('formFields', JSON.stringify(updatedFields));
//         await axios.put('workingJson/scheme.json', { fields: updatedFields });
//       } catch (error) {
//         console.error('Error saving data: ', error);
//       }
//     };
//     const handleSave = async () => { 
//       //if (validateForm()) {
//         try {
//           await saveData(formFields);
//           console.log('Data saved successfully');
//         } catch (error) {
//           console.error('Error saving data: ', error);
//         }
//         setIsEditable(false);
//       //}
//     };
//     const handleCancel = () => {
//       setIsEditable(false);
//     }
//     const handleChange = (selectedOption, schemeName, key, updatedValue) => { debugger;
//       const filteredSelection = schemeName.filter(user => user.scheme_name === selectedOption);
//       setFormFields(prevFormFields => ({
//         ...prevFormFields,
//         [filteredSelection]: {
//           ...prevFormFields[filteredSelection],
//           [key]: updatedValue
//         }
//       }));
//     };
//     const handleSelectChange = (event) => {
//       const selectText = event.target.value;
//       setSelectedOption(selectText);
//       setShowEdit(true);
//     };
//     useEffect(() => {
//       if (isEditable && inputRef.current) {
//         inputRef.current.focus();
//       }
//     }, [isEditable]);
//     useEffect(() => {
//       const savedFields = localStorage.getItem('formFields');
//       if (savedFields) {
//         setFormFields(JSON.parse(savedFields));
//       }
//       const fetchData = async () => {  debugger;
//         try {
//           const allSchemeResponse = await axios.get('workingJson/AllScheme.json');
//           const schemeJson = await axios.get('workingJson/scheme.json');
//           setOptions(schemeJson.data.Schemes);
//           const allSchemesFirstData = schemeJson.data.Schemes[0].scheme_name;
//           //const firstOption = Object.keys(allSchemesFirstData)[0];
//           setSelectedOption(allSchemesFirstData);
//           //setOptionsKeys(Object.keys(allSchemesFirstData));
//         } catch (error) {
//           console.error('Error fetching data: ', error);
//         }
//       };
//       fetchData();
//       const fetchinitData = async () => {
//         try {
//           const response = await axios.get('workingJson/scheme.json');
//           setFields(response.data);
//         } catch (error) {
//           console.error('Error fetching data: ', error);
//         }
//       };
//       fetchinitData();
//     }, []);
//     return (
//       <div className="adminParent">
//         <FontChanger />
//         <Banner />
//         <Container>
//           <Row>
//             <Col lg={12} className='schemeForm'>
//               <Row>
//                 <Col lg={12} className="schemeParent">
//                   <p className="title">schemes list</p>
//                 </Col>
//                 <Col lg={12} className="selectScheme text-center">
//                   <span>SELECT SCHEME</span>
//                   <Form.Select aria-label="Default select example" onChange={handleSelectChange} value={selectedOption}>
//                     {/* <option>Select Scheme</option> */}
//                     {Object.entries(options).map(([key, value]) => { debugger;
//                       return (
//                         <option key={key} value={value.scheme_name}>
//                           {value.scheme_name}
//                         </option>
//                       )
//                     }
//                     )}
//                     <option>New</option>
//                   </Form.Select>
//                 </Col>
//               </Row>
//               <Row className='schemeBox'>
//                 {
//                   Object.entries(fields).map(([schemeName, schemeFields]) =>
//                     { debugger;
//                       return (
//                         Object.entries(schemeFields).map(([key, value]) =>
//                           { debugger;
//                             return (
//                               selectedOption === value.scheme_name && (
//                                 Object.keys(value).map((key, index) => {
//                                   return (
//                                     <>
//                                       <Col lg={4} key={[schemeFields][key]} className='borBotm'>
//                                         <Form.Group className="mb-3">
//                                           <Form.Label>{key.replace(/([a-z])([A-Z])/g, '$1 $2')}</Form.Label>
//                                           <Form.Control
//                                             type="text"
//                                             defaultValue={
//                                               selectedOption === 'New' ? '' :
//                                               (formFields[schemeFields] && formFields[schemeFields][key]) || value[key]
//                                             }
//                                             onChange={(e) => handleChange(selectedOption, schemeFields, key, e.target.value)}
//                                             readOnly={!isEditable}
//                                             ref={index === 0 ? inputRef : null}
//                                             //isInvalid={errors[key]}
//                                           />
//                                           {/* <button type="submit">Submit</button> */}
//                                         </Form.Group>
//                                       </Col>
//                                     </>
//                                   )
//                                 }
//                               )
//                               )
//                             )
//                           }
//                         )
//                       )
//                     }
//                   )
//                 }
//                 {
//                 isEditable 
//                   ?
//                   <p onClick={handleCancel}  className="editIcon">Cancel</p>
//                   :
//                   <p onClick={handleToggleEdit}  className="editIcon">Edit</p>
//                 }
//                 {
//                   isEditable && 
//                   <p onClick={handleSave} className='submitFormChange'>Submit</p>
//                 }
//               </Row>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     );
//   };

//   //export default Admin;

//   // ############################################################################################
// import React, { useEffect, useRef, useState } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Form } from 'react-bootstrap';
// import './admin.scss';
// import FontChanger from '../FontChanger/FontChanger';
// import Banner from '../Banner/Banner';

// const Admin = () => {
//     const [isEditable, setIsEditable] = useState(false);
//     const [formFields, setFormFields] = useState({});
//     const [selectedOption, setSelectedOption] = useState('');
//     const [options, setOptions] = useState([]);

//     const handleToggleEdit = () => {
//         setIsEditable(!isEditable);
//     };

//     const handleSave = async () => {
//         try {
//             // Example: save only the changes for the selected scheme
//             await axios.put('api/scheme/update', formFields[selectedOption]);
//             console.log('Data saved successfully');
//         } catch (error) {
//             console.error('Error saving data: ', error);
//         }
//         setIsEditable(false);
//     };

//     const handleChange = (key, updatedValue) => {
//         setFormFields(prevFormFields => ({
//             ...prevFormFields,
//             [selectedOption]: {
//                 ...prevFormFields[selectedOption],
//                 [key]: updatedValue
//             }
//         }));
//     };

//     const handleSelectChange = (event) => {
//         setSelectedOption(event.target.value);
//         setIsEditable(false);  // Reset edit state on scheme change
//     };

//     useEffect(() => { debugger;
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get('workingJson/scheme.json');
//                 setOptions(response.data.Schemes);
//                 setSelectedOption(response.data.Schemes[0].scheme_id);
//                 setFormFields(response.data.Schemes.reduce((acc, scheme) => ({
//                     ...acc,
//                     [scheme.scheme_id]: scheme
//                 }), {}));
//             } catch (error) {
//                 console.error('Error fetching data: ', error);
//             }
//         };
//         fetchData();
//     }, []);

//     return (
//         <div className="adminParent">
//             <FontChanger />
//             <Banner />
//             <Container>
//                 <Row>
//                     <Col lg={12} className='schemeForm'>
//                         <Row>
//                             <Col lg={12} className="selectScheme text-center">
//                                 <span>SELECT SCHEME</span>
//                                 <Form.Select aria-label="Default select example" onChange={handleSelectChange} value={selectedOption}>
//                                     {options.map(option => (
//                                         <option key={option.scheme_id} value={option.scheme_id}>
//                                             {option.scheme_name}
//                                         </option>
//                                     ))}
//                                 </Form.Select>
//                             </Col>
//                         </Row>
//                         <Row className='schemeBox'>
//                             {formFields[selectedOption] && Object.entries(formFields[selectedOption]).map(([key, value]) => 
//                                 { debugger;
//                                   return (
//                                     <Col lg={4} key={key} className='borBotm'>
//                                       <Form.Group className="mb-3">
//                                           <Form.Label>{key.replace(/([a-z])([A-Z])/g, '$1 $2')}</Form.Label>
//                                           <Form.Control
//                                               type="text"
//                                               defaultValue={value}
//                                               onChange={(e) => handleChange(key, e.target.value)}
//                                               readOnly={!isEditable}
//                                           />
//                                       </Form.Group>
//                                     </Col>
//                                   )
//                                 }
//                             )}
//                             {isEditable ? (
//                                 <>
//                                     <p onClick={() => setIsEditable(false)} className="editIcon">Cancel</p>
//                                     <p onClick={handleSave} className='submitFormChange'>Submit</p>
//                                 </>
//                             ) : (
//                                 <p onClick={handleToggleEdit} className="editIcon">Edit</p>
//                             )}
//                         </Row>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//     );
// };

// //export default Admin;


// else if (key === "CommunityName") {
//   return (
//     <Col lg={4} key="CommunitySelect" className='borBotm'>
//       <Form.Group className="mb-3">
//         <Form.Label>Community</Form.Label>
//         <Form.Control
//           as="select"
//           defaultValue={formFields[selectedOption]?.CommunityName || ''}
//           onChange={(e) => handleChange(e, 'Community')}
//           disabled={!isEditable}
//         >
//           {
//             optionsFromAPI ? Object.entries(communityApi.data.Community).map(([key,val]) => {
//               return (
//                 <option key={key.Id} value={val.CommunityName}>
//                   {val.CommunityName}
//                 </option>
//               )
//             }) :  
//             <option key={value.key} value={value.Community}>
//               {value.CommunityName}
//             </option>
//           }
         
//         </Form.Control>
//       </Form.Group>
//     </Col>
//   );
// }