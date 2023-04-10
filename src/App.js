import React, { useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import AboutUs from "./pages/Aboutus";
import logo1 from "./assets/images/intro-logo.svg"
import logo2 from "./assets/images/intro-text.svg"
function App() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/Login")
  //   }, 2000)
  // }, [])
  return (
    <>
      <div id="loader">
        <div id="image_container">
          <div id="img1_cont">
            <img src={logo1} alt="img" id="image" />
          </div>
          <img src={logo2} alt="img" id="image2" />
        </div>
      </div>
      {/* <AboutUs /> */}
    </>
  );
}

export default App;
