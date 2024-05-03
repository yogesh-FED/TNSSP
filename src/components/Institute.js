import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios';
import debounce from 'lodash.debounce';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './institute.scss';
import FontChanger from "./FontChanger/FontChanger";
import Banner from "./Banner/Banner";

const Institute = () => {
  const [searchData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [searchShowData, setSearchShowData] = useState(false);
  const [districtSearchData, setDistrictSearchData] = useState([]);
  const [districtSearchDataShow, setDistrictSearchDataShow] = useState(false);
  const [districtSearchDataFilter, setDistrictSearchDataFilter] = useState([]);
  const [onClickData, setOnClickData] = useState('district');
  const [districtclickedInputFieldData, setDistrictClickedInputFieldData] = useState('');
  const [instituteClickedInputFieldData, setInstituteClickedInputFieldData] = useState('');
  const [instituteDetails, setInstituteDetails] = useState([]);
  const handleDistrictFieldClick = () => {
    setDistrictSearchDataShow(true);
    setSearchShowData(false);
  }
  const handleInstClick = (e, searchValue, districtFieldData) => { debugger;
    setDistrictSearchDataShow(false);
    const data = 'institute';
    const instituteValue = e.target.value;
    const instituteInputValue = e.target.value;
    setSearchText(instituteValue);
    debouncedSearch(instituteValue, districtclickedInputFieldData, data);
    setInstituteClickedInputFieldData(instituteInputValue);
    setSearchShowData(instituteValue.trim() !== "");
    setSearchShowData(true);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('workingJson/institution.json');
        const instresponse = await axios.get('workingJson/instituteDetails.json');
        setInstituteDetails(instresponse.data.Institute);
        const districtResp = await axios.get('workingJson/district.json');
        setDistrictSearchData(districtResp.data.District);
        setDistrictSearchDataFilter(districtResp.data.District);
        //setSearchData(response.data.Institute);
        setSearchData(instresponse.data.Institute);
        setFilteredData(response.data.Institute);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
    console.log('test', instituteDetails);
  }, []);
  const debouncedSearch = useCallback(debounce((searchValue, districtFieldData, data) => { debugger;
    if (searchValue.trim() === "") {
      if(data !== "") {
        const filtered = searchData.filter((item) => {
          //const districtFieldValue = districtFieldData.charAt(0).toUpperCase() + districtFieldData.slice(1).toLowerCase();
          const districtFieldValue = districtFieldData
          //console.log(districtFieldData);
          return (
            item.DistrictName === districtFieldValue ? item.InstituteName.toLowerCase().includes(searchValue.toLowerCase()) : 
            districtFieldData === '' ? item.InstituteName.toLowerCase().includes(searchValue.toLowerCase()) : ''
          )
        }
        );
        setFilteredData(filtered);
      } else {
        setDistrictSearchDataFilter(districtSearchData);
        setFilteredData(searchData);
      }
    } else if(onClickData === 'district' && data === undefined) {
      setInstituteClickedInputFieldData('');
        const disFiltered = districtSearchData.filter(item =>
          item.DistrictName.toLowerCase().includes(searchValue.toLowerCase())
        );
        setDistrictSearchDataFilter(disFiltered);
    } else {
      const filtered = searchData.filter((item) => {
        //const districtFieldValue = districtFieldData.charAt(0).toUpperCase() + districtFieldData.slice(1).toLowerCase();
        const districtFieldValue = districtFieldData
        //console.log(districtFieldData);
        return (
          item.DistrictName === districtFieldValue ? item.InstituteName.toLowerCase().includes(searchValue.toLowerCase()) : 
          districtFieldData === '' ? item.InstituteName.toLowerCase().includes(searchValue.toLowerCase()) : ''
        )
      }
      );
      setFilteredData(filtered);
    }
  }, 300), [searchData]);
  

  const handleSearch = (e, args) => { debugger;
    if(args === 'institute') {
      const data = 'institute';
      const instituteValue = e.target.value;
      const instituteInputValue = e.target.value;
      setSearchText(instituteValue);
      debouncedSearch(instituteValue, districtclickedInputFieldData, data);
      setInstituteClickedInputFieldData(instituteInputValue);
      setSearchShowData(instituteValue.trim() !== "");
    }
    if(args === 'district') {
      const districtValue = e.target.value;
      const inputValue = e.target.value;
      setDistrictClickedInputFieldData(inputValue);
      setSearchText(districtValue);
      debouncedSearch(districtValue);
      setDistrictSearchDataShow(districtValue.trim() !== "");
    }
  };
  const handleListClick = (e, arg) => {
    if(arg === 'district') {
      const getClickedInput = e.target.innerText;
      setDistrictClickedInputFieldData(getClickedInput);
      setDistrictSearchDataShow(false);
    }
    if(arg === 'institute') {
      const getClickedInput = e.target.innerText;
      setInstituteClickedInputFieldData(getClickedInput);
      setSearchShowData(false);
    }
  }
  return (
    <div className="instituteMain">
      <FontChanger />
      <Banner />
      <Container>
        <Row>
          <Col lg={12} className="innerContainer">
            <h3>Institute</h3>
            <Form.Group className="mb-3 instituteForm">
            <div className="districtInput">
                <Form.Label>District</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="District Search"
                  onChange={(e)=>handleSearch(e, 'district')}
                  value={districtclickedInputFieldData}
                  onClick={() => handleDistrictFieldClick()}
                />
              </div>
              <div className="instituteInput">
                <Form.Label>Institute</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Institute Search"
                  onChange={(e)=>handleSearch(e, 'institute')}
                  value={instituteClickedInputFieldData}
                  onClick={(e) => handleInstClick(e)}
                />
              </div>
            </Form.Group> 
            {
              searchShowData && (
                <ul className=" ApiList instituteList">
                    {
                      Object.entries(filteredData).map(([key, value]) => {
                        return (
                          <li  onClick={(e) => handleListClick(e, 'institute')} key={value.id}>{value.InstituteName || value.Name}</li>
                        )
                      })
                    }
                </ul>
              )
            }
            {
              districtSearchDataShow && (
                <ul className="ApiList districtList">
                  {
                    Object.entries(districtSearchDataFilter).map(([key, value]) => {
                      return (
                        <li onClick={(e) => handleListClick(e, 'district')}  key={value.Id}>{value.DistrictName}</li>
                      )
                    })
                  }
                </ul>
              )
            }
          </Col>
        </Row>
      </Container>
      {
        instituteClickedInputFieldData && (
          <Container className="instituteDetails">
            <Row>
              <Col lg={12} className="text-center">
                <h4>{instituteClickedInputFieldData}</h4>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Row>
                  {
                    Object.entries(searchData).map(([key, value]) => {
                      return (
                        value.InstituteName === instituteClickedInputFieldData ? 
                        Object.entries(value).map(([vKey, valVal]) => {
                          return (
                            <Col lg={4} key={key.InstituteId} className="detailsList">
                              <Form.Group className="mb-3">
                                <Form.Label>
                                  {vKey.replace(/([a-z])([A-Z])/g, '$1 $2')}
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  readOnly={true}
                                  value={valVal}
                                />
                              </Form.Group>
                            </Col>
                          )
                        }) : ''
                      )
                    })
                  }
                </Row>
              </Col>
            </Row>
          </Container>
        )
      }
    </div>
  );
};

export default Institute;
