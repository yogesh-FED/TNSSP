import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './dashboard.scss';

const Dashboard = () => {
  return (
	<>
		<Container fluid className='dashboardParent'>
			<Row>
				<Col lg={12}>
					<h3 className='text-center'>Dashboard</h3>
				</Col>
				<Col lg={12}>
					<Row>
						<Col lg={2}>
							<div className='dashboardStyle'>

							</div>
						</Col>
						<Col lg={3}>
							<div className='dashboardStyle'>

							</div>
						</Col>
						<Col lg={2}>
							<div className='dashboardStyle'>

							</div>							
						</Col>
						<Col lg={5}>
							<div className='dashboardStyle'>

							</div>							
						</Col>
					</Row>
					<Row>
						<Col lg={6}>
							<div className='dashboardStyle'>

							</div>							
						</Col>
						<Col lg={6}>
							<div className='dashboardStyle'>

							</div>							
						</Col>
					</Row>
				</Col>
			</Row>
		</Container>
	</>
  )
}

export default Dashboard