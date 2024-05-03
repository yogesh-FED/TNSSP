import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../HomeBanner/homebanner.scss';
import LogoTn from '../../Assets/Header-image/logo_tn.png'
import LogoTnega from '../../Assets/Header-image/logo_tnega.png'
import { useNavigate } from 'react-router';

const HomeBanner = () => {
  const [academicYear, setAcademicYear] = useState('');
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
	const navigate = useNavigate();
	const goToHome = () => {
		alert();
		navigate('/');
	}
  return (
    <>
      <Container fluid className='HomeBannerParent'>
				<Row>
					<Col lg={12} className='loginHeader'>
						<Row>
							<Col md={2} className='logoImg text-center'>
								<img src={LogoTn} alt=''/>
							</Col>
							<Col md={8}>
								<div className='LoginPageTitleHeader text-center'>
									<p>Government of Tamil Nadu</p>
									<h1>Student Scholarship Portal</h1>
									<p>(Academic Year {`${currentYear - 1}-${currentYear}`})</p>
								</div>
							</Col>
							<Col md={2} className='logoImg text-center'>
								<img src={LogoTnega} alt='' />
							</Col>
						</Row>
					</Col>
				</Row>
			</Container>
    </>
  )
}

export default HomeBanner