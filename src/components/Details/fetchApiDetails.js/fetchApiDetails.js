import React, { useEffect, useState } from 'react'
import GeneralDetails from '../GeneralDetails/GeneralDetails'

const fetchApiDetails = () => {
	const [sample, setSample] = useState('');
	const handleChildData = () => {
		setSample('testing');
	}
	useEffect(() => { debugger;
		handleChildData();
	}, [])
	
  return (
    <div>
      <GeneralDetails 
				sendDataToParent={handleChildData}
			/>
    </div>
  )
}

export default fetchApiDetails