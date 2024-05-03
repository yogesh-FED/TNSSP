import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './userType.scss';
import { useState, useEffect } from 'react';
import UserTypeForms from '../UserType/UserTypeForms';
import axios from 'axios';

function UserType(props) {
	const [handleTabsClick, setHandleTabsClick] = useState('');
	const scrollToTop = () => {
		window.scrollTo({
			top: 200,
			behavior: 'smooth'
		});
	};
	const handleTabClick = (eventKey) => {
		setHandleTabsClick(eventKey);
		scrollToTop();
	}
	const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('workingJson/userTypeTabs.json'); 
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
			{/* <span>Select User Type</span> */}
			{data && (
				<Tabs
					defaultActiveKey="StudentLogin"
					id="uncontrolled-tab-example"
					className="mb-3 justify-content-center userType"
					onSelect={handleTabClick}
				>
					{data.UserType.map((item, index) => (
						<Tab key={index} eventKey={item.eventKey} title={item.title}>
							<UserTypeForms tabsClickKey = {handleTabsClick} />
						</Tab>
					))}
				</Tabs>
			)}
    </>
  );
}

export default UserType;