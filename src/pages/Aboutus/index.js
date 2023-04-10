import React, { Fragment } from 'react';
import Header from "../../components/Header";
import Drawer from "../../components/Drawer";
import DisplaySection from "../../components/DisplaySection";
import { BottomWrapper } from "./styles";


const AboutUs = () => {
  return (
    <Fragment>
      <Header />
      <BottomWrapper>
        <Drawer />
        <DisplaySection />
      </BottomWrapper>
    </Fragment>
  )
}
export default AboutUs;