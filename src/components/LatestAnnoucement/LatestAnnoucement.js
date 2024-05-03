import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './latestannouce.scss';
import SliderComp from '../Slider/SliderComp';

const LatestAnnoucement = () => {
  return (
    <>
			<div className='latestAnnouce text-center'>
			<h3>LATEST ANNOUCEMENT</h3>
				<Container fluid>
					<Row>
						<Col lg={12}>
							<div className='latestInfoDiv'>
								<SliderComp />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
  )
}

export default LatestAnnoucement