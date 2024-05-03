import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './helps.scss';
import schemes from '../../Assets/icons/scheme.png';
import CountUp from 'react-countup';

const GovtHelps = () => {
  return (
    <div className='govtHelps text-center'>
      <h3>
				Our Goverment Helps
			</h3>
			<p className='govtHelpSub'>Our Goverment Helps Urban and Rural Student Education Better</p>
			<Container>
				<Row>
					<Col lg={12}>
						<div className='govtContainer'>
							<Row>
								<Col lg={4}>
									<div className='innerDiv'>
									<i className="fa-solid fa-list"></i>
									<p>Total Scheme</p>
									<CountUp end={54} duration={5} className='countUpNums'/> 
									</div>
								</Col>
								<Col lg={4}>
									<div className='innerDiv'>
									<i className="fa-solid fa-users"></i>
									<p>Student Benefited</p>
									<CountUp end={123456} duration={5} className='countUpNums'/> 
									</div>
								</Col>
								<Col lg={4}>
									<div className='innerDiv'>
									<i className="fa-solid fa-circle-dollar-to-slot"></i>
									<p>Total Fund Issued</p>
									<CountUp end={5} duration={5} className='countUpNums'/> Crores
									</div>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
    </div>
  )
}

export default GovtHelps