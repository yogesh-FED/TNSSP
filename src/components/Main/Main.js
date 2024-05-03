import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MainNav from '../MainpageNav/MainNav';
import SliderComp from '../Slider/SliderComp';
import LatestAnnoucement from '../LatestAnnoucement/LatestAnnoucement';
import GovtHelps from '../GovtHelps/GovtHelps';
import Footer from '../Footer/Footer';
import { ElementFontChangeProvider } from '../Utils/utils';
const Main = () => {
  return (
    <>
      <ElementFontChangeProvider>
        <MainNav />
        <LatestAnnoucement />
        <GovtHelps />
        <Footer />
      </ElementFontChangeProvider>
    </>
  )
}

export default Main