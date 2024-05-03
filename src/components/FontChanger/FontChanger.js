import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ElementFontChangeContext } from '../Utils/utils';
import { useContext } from 'react';

const FontChanger = (props) => {
  const { fontSizes, increaseFontSize, decreaseFontSize, resetFontSize } = useContext(ElementFontChangeContext);
  return (
    <div>
      <div className={props.isSticky ? 'mainHeader sticky' : 'mainHeader'}>
        <Container fluid>
          <Row>
            <Col lg={6}>
            <p>TollFree : 18005997638</p>
            </Col>
            <Col lg={6} className='text-end fontChange'>
              <span onClick={() => increaseFontSize()} >A+</span>
              <span onClick={() => resetFontSize()}>A</span>
              <span onClick={() => decreaseFontSize()} >A-</span>
              {/* <p className='supportRequst'>Support Request</p> */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default FontChanger