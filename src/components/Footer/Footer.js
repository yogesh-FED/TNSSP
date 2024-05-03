import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../Footer/footer.scss';

const Footer = () => {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
  return (
    <div className='footer text-center'>
      <Container fluid>
				<Row>
					<Col lg={12}>
						<p>Tamil Nadu State Scholarship Portal (TNSSP) </p>
						<p>CopyRight @ TNeGA {currentYear}</p>
					</Col>
				</Row>
			</Container>
    </div>
  )
}

export default Footer