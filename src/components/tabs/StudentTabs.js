import * as React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { FunctionContext } from '../Utils/utils';
// import { useSelector, useDispatch } from 'react-redux';
// import { updateApiUrl } from '../slice/endPointUrlSlice';
import FamilyDetails from '../Details/FamilyDetails/FamilyDetails';
import GeneralDetails from '../Details/GeneralDetails/GeneralDetails';
import ContactDetails from '../Details/ContactDetails/ContactDetails';
import AcademicDetails from '../Details/AcademicDetails/AcademicDetails';
import BankDetails from '../Details/BankDetails/BankDetails';
import { useContext } from 'react';


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function StudentTabs() {
  //const { apiData, fetchApi } = useContext(FunctionContext);
  // const [newUrl, setNewUrl] = useState('');
  // const apiUrl1 = useSelector(state => state.apiUrls.apiUrl1);
  // const dispatch = useDispatch();
  // dispatch(updateApiUrl({ apiUrlKey: 'apiUrl1', newUrl }));
  // setNewUrl('');
  //const { endpoints } = useApiEndpoints();
  //console.log(endpoints, 'contextcheck')
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const scrollToTop = () => {
		window.scrollTo({
			top: 200,
			behavior: 'smooth'
		});
	};
  const handleScrollClick = () => {
    scrollToTop();
  }
  return (
    <Box sx={{ width: '100%' }} className="studentAllDetails">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          aria-label="scrollable tabs"
          className="customTabClass"
        >
          <Tab label="General Details" {...a11yProps(0)}/>
          <Tab label="Family Details" {...a11yProps(1)} />
          <Tab label="Communication Details" {...a11yProps(2)} />
          <Tab label="Academic Details" {...a11yProps(3)} />
          <Tab label="Bank Details" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} className='tabscustom' >
          {/* Products API: {endpoints.users} */}
          <GeneralDetails 
            
          />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1} className='tabscustom' >
        <FamilyDetails />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2} className='tabscustom' >
      <ContactDetails />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3} className='tabscustom' >
        <AcademicDetails />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4} className='tabscustom' >
        <BankDetails />
      </CustomTabPanel>
    </Box>
  );
}