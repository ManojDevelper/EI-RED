import React, { Fragment, useEffect, useState } from 'react';
import Header from "../../components/Header";
import Drawer from "../../components/Drawer";
import DisplaySection from "../../components/DisplaySection";
import { BottomWrapper } from "./styles";
import logo1 from "../../assets/images/intro-logo.svg"
import logo2 from "../../assets/images/intro-text.svg"
const AboutUs = () => {

  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000)
  }, [])
  return (
    <Fragment>
      {show ?
        <div id="loader">
          <div id="image_container">
            <div id="img1_cont">
              <img src={logo1} alt="img" id="image" />
            </div>
            <img src={logo2} alt="img" id="image2" />
          </div>
        </div>
        :
        <Fragment>
          <Header />
          <BottomWrapper>
            <Drawer />
            <DisplaySection />
          </BottomWrapper>
        </Fragment>
      }
    </Fragment>
  )
}
export default AboutUs;