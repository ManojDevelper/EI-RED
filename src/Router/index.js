import React from "react";
import {
    Routes,
    Route,
} from "react-router-dom";
import AboutUs from "../pages/Aboutus";

function RouterComponent() {
    return (
        <Routes>
            <Route path="/" element={<AboutUs />} />
        </Routes>
    );
}
export default RouterComponent;