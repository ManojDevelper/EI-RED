import React, { useState } from 'react';
import Header from "../../components/Header";
import Drawer from "../../components/Drawer";
import { DisplaySectionPreview, DiaplayHeader } from "./styles";
import { Button, Space } from 'antd';
import logo from "../../assets/images/logo.png";
import verify from "../../assets/icons/verify.svg";
import verify_disable from "../../assets/icons/verify_disable.svg";
import digital_round from "../../assets/images/digital_round.svg";
import { EditFilled } from '@ant-design/icons';


const DisplaySection = () => {

    const [compVerify, setCompVerify] = useState(false);
    return (
        <DisplaySectionPreview>
            <DiaplayHeader>
                <h1 className='tab_title'>About Us</h1>
                <div className='logo_sec'>
                    <img src={logo} alt="logo" className='logo' />
                    <div className='comp_details_wrap'>
                        <span className='comp_title'>A.T.Inks</span>
                        <br />
                        <span className='comp_desc'>Digital Inks</span>
                    </div>
                    <p className='verify_btn' onClick={() => setCompVerify(true)}><img src={compVerify ? verify : verify_disable} className='verify_icon' /> {!compVerify ? "Verify Company" : "Verified"}</p>
                </div>
                <div className='compo_edit_wrapper'>
                    <p className='comp_description'>India's first and among the largest in the world, Manufacturer of Digital Inkjet Inks providing Inks for almost every Piezo Printhead Based Machine</p>
                    <EditFilled className="edit_icon" />
                </div>
            </DiaplayHeader>
        </DisplaySectionPreview>
    )
}
export default DisplaySection;