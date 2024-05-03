import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './login.scss';


const LoginForms = (props) => {
	const submitNavigate =useNavigate();
	const [inputValue, setInputValue] = useState('');
	const [submitValue, setSubmitValue] = useState('');
	const [popUpFlag, setPopUpFlag] = useState(false);
	const [handleFormShow, setHandleFormShow] = useState(true);
	const handleOTPSubmit = () => {
		submitNavigate('/StudentProfile');
	}
	const handleSubmit = (val) => {
		if(val === '' || val === 'StudentLogin'){
			setSubmitValue(val);
			setPopUpFlag(true);
			setHandleFormShow(false);
		} else if( val === 'InstituteLogin' ) {
			submitNavigate('/Institute')
		}else if( val === 'EducationLogin' ) {
			submitNavigate('/Education')
		}else if( val === 'AdminLogin' ) {
			submitNavigate('/admin')
		}else if( val === 'WelfareLogin' ) {
			submitNavigate('/Welfareadw')
		}
		else {
			submitNavigate('/')
		}
	}
	const getInputValue = (e) => {
		setInputValue(e.target.value)
	}
	const [showInstitute, setShowInstitute] = useState([]);
	const [isActive, setIsActive] = useState('Institute');
	const handleLoginClick = (e) => { debugger;
		const text = e.target.textContent;
		setIsActive(text);
	}
	useEffect(() => {
		
	})
  return (
    <div>
			<div className='loginInnerFormScreen'>
			{
				popUpFlag && (
					<div className='otp'>
						<p className='text-center'> OTP Submittion</p>
						<Form>
							<Form.Group className="mb-3">
							<Form.Label>
								Enter OTP
							</Form.Label>
							<Form.Control type="password" placeholder="Enter OTP" />
						</Form.Group>
						<Button variant="success" onClick={() => handleOTPSubmit()}>Submit</Button>
						</Form>
					</div>
				)
			}
			{
				handleFormShow && (
					<>
						{
							props.tabsClickKey === 'InstituteLogin' 
							? 
							<ul className='idLogin'>
								<li onClick={(e) => handleLoginClick(e)} className={isActive === 'Institute' ? 'active' : ''}>
									Institute
								</li>
								<li onClick={(e) => handleLoginClick(e)} className={isActive === 'District' ? 'active' : ''}>
									District
								</li>
							</ul>
							: ''
						}
						<p className='text-center'> 
						{
							props.tabsClickKey === '' ? 'Student Login' 
							: 
							props.tabsClickKey === 'StudentLogin' ? 'Student Login'
							:
							props.tabsClickKey === 'InstituteLogin' 
							? 
							isActive === '' 
							? 
							'Institute Login' 
							:
							isActive === 'Institute' 
							?
							'Institute Login'
							: 
							'District Login' 
							:
							props.tabsClickKey === 'EducationLogin' ? 'Education Login'
							:
							props.tabsClickKey === 'AdminLogin' ? 'Admin Login'
							:
							props.tabsClickKey === 'WelfareLogin' ? 'Welfare Login'
							: ''
						}
					</p>
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>
							{
								props.tabsClickKey === '' ? 'UMIS ID' 
								: 
								props.tabsClickKey === 'StudentLogin' ? 'UMIS ID'
								:
								props.tabsClickKey === 'InstituteLogin' 
									? 
									isActive === '' 
									? 
									'Institute Login' 
									:
									isActive === 'Institute' 
									?
									'Institute Login'
									: 
									'District Login'
								:
								props.tabsClickKey === 'EducationLogin' ? 'Education ID'
								:
								props.tabsClickKey === 'AdminLogin' ? 'Admin ID'
								:
								props.tabsClickKey === 'WelfareLogin' ? 'Welfare ID'
								: ''
							}
							</Form.Label>
							<Form.Control type="text" placeholder={
								props.tabsClickKey === 'WelfareLogin' ? 'Welfare ID'
								:
								props.tabsClickKey === 'StudentLogin' ? 'UMIS ID / EMIS ID'
								:
								props.tabsClickKey === 'AdminLogin' ? 'Admin ID'
								:
								props.tabsClickKey === 'EducationLogin' ? 'Education ID'
								:
								props.tabsClickKey === 'InstituteLogin' 
							? 
							isActive === '' 
							? 
							'Institute Login' 
							:
							isActive === 'Institute' 
							?
							'Institute Login'
							: 
							'District Login' 
							:
							props.tabsClickKey === '' ? 'UMIS ID/ EMIS ID'
							: ''
							} onChange={getInputValue}/>
						</Form.Group>
						<Button variant="success" onClick={() => handleSubmit(props.tabsClickKey)}>Submit</Button>
					</Form>
					</>
				)
			}
			</div>
    </div>
  )
}

export default LoginForms