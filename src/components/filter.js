import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('workingJson/institution.json');
        setSearchData(response.data.Institute); // Assuming this is an array
        setFilteredData(response.data.Institute);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };
    fetchData();
  }, []);

  const debouncedSearch = debounce((searchValue) => {
    const filtered = searchData.filter(item =>
      item.Name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  }, 300);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchText(value);
    debouncedSearch(value);
  };

  return (
    <div className="instituteMain">
      <FontChanger />
      <Banner />
      <Container>
        <Row>
          <Col lg={12} className="innerContainer">
            <h3>Institute</h3>
            <Form.Group className="mb-3 instituteForm">
              <div className="instituteInput">
                <Form.Label>Institute</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Institute Search"
                  onChange={handleSearch}
                />
              </div>
            </Form.Group>
            <ul>
              {filteredData.map((value) => (
                <li key={value.id}>{value.Name}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Institute;
