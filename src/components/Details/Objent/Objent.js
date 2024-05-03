import React from 'react';
import Col from 'react-bootstrap/Col';

const Objent = (props) => {
	const apiData = props.apiData;
  return (
    <>
    {
			apiData && (
				Object.entries(apiData).map(([key, value]) => (
				<Col md={4} key={key} className='detailsRows'>
					<h6>{key.replace(/([a-z])([A-Z])/g, '$1 $2')}</h6>
					<span>{value}</span>
				</Col>
				))
			)
		}
    </>
  )
}

export default Objent