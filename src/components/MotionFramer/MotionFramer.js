// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import './motion.scss';
// import axios from 'axios';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';

// const MotionFramer = () => {
//   const [schemesData, setSchemesData] = useState([]);
//   const [colorChange, setColorChange] = useState(false);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const schemeJson = await axios.get('workingJson/scheme.json');
//         setSchemesData(schemeJson.data.Schemes);
//       } catch (error) {
//         console.error('Error fetching data: ', error);
//       }
//     };
//     fetchData();
//   }, []);
  
//   const [openCardId, setOpenCardId] = useState(null);
  
//   const toggleCard = (id) => {
//     if (openCardId === id) {
//       setOpenCardId(null);
//     } else {
//       setOpenCardId(id);
//     }
//   }

//   const handleSelect = () => {
//     setColorChange(!colorChange);
//   }
//   return (
//     <div className='schemeMaincard'>
//       <Container>
//         <Row>
//           <Form.Group className="mb-3">
//             {/* <Form.Label>Search Scheme</Form.Label> */}
//             <Form.Control
//               type="text"
//               placeholder='Scheme Search'
//             />
//           </Form.Group>
//           {schemesData.map((val, index) => (
//             <Col xs={12} sm={6} md={4} lg={4} key={index}>
//               <motion.div className= {colorChange ? 'schemeCard active' : 'schemeCard'} onClick={() => toggleCard(index)}>
//                 <motion.p layout="position">{val.SchemeName.replace(/([a-z])([A-Z])/g, '$1 $2')}</motion.p>
//                 {openCardId === index && 
//                   <motion.div>
//                     <p className='desc'>{val.Desc}</p>
//                     <span><button className='btn btn-success' onClick={() => handleSelect()}>select</button></span><span><button className='btn btn-danger'>Cancel</button></span>
//                   </motion.div>
//                 }
//               </motion.div>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   )
// }

// export default MotionFramer;
