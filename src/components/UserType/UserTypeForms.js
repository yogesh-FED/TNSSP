import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LoginForms from '../Login/LoginForms';

const UserTypeForms = (props) => {
  return (
    <div>
			<Container>
				<Row>
					<Col md={12} className='loginScreensParent'>
						<Row>
						<Col md={6}>
							<LoginForms 
								tabsClickKey = {props.tabsClickKey}
							/>
						</Col>
						<Col md={6} className={`loginBg ${props.tabsClickKey}`}>
						</Col>
						</Row>
					</Col>
				</Row>
			</Container>
    </div>
  )
}

export default UserTypeForms