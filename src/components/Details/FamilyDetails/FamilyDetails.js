import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Objent from '../Objent/Objent';

const FamilyDetails = () => {
	const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('workingJson/generalDetails.json'); 
        setData(response.data.FamilyDetails[0]);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
     fetchData();
  }, []);
  return (
    <div className='details'>
			<Container fluid>
				<Row>
					<Col lg={12} className='detailsDesc'>
						{
							data && (
								<>
									{
										<Row>
										<Objent apiData = {data} />
										</Row>
									}
								</>
							)
						}
					</Col>
				</Row>
			</Container>
    </div>
  )
}

export default FamilyDetails