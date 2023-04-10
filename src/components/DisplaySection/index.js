import React, { useState } from 'react';
import Header from "../../components/Header";
import Drawer from "../../components/Drawer";
import TabsSection from "../Tabs";
import EditMenu from "./editMemu";
import { DisplaySectionPreview, DiaplayHeader } from "./styles";
import { Modal } from 'antd';
import logo from "../../assets/images/logo.png";
import verify from "../../assets/icons/verify.svg";
import verify_disable from "../../assets/icons/verify_disable.svg";
import digital_round from "../../assets/images/digital_round.svg";
import { EditFilled } from '@ant-design/icons';
import { AddressModalStyle } from '../Tabs/styles';


const DisplaySection = () => {

    const [compVerify, setCompVerify] = useState(false);
    const [description, SetDescription] = useState("India's first and among the largest in the world, Manufacturer of Digital Inkjet Inks providing Inks for almost every Piezo Printhead Based Machine");
    const [descriptionModal, setDescriptionModal] = useState(false);

    const setdescFun = () => {
        setDescriptionModal(true);
        SetDescription("India's first and among the largest in the world, Manufacturer of Digital Inkjet Inks providing Inks for almost every Piezo Printhead Based Machine")
    }
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
                    <p className='comp_description'>{description}</p>
                    <EditFilled className="edit_icon" onClick={() => setdescFun()} />
                </div>
            </DiaplayHeader>
            <TabsSection />
            <EditMenu />

            {/* House Of Operations */}
            <Modal
                title="Description"
                centered
                open={descriptionModal}
                onOk={() => { setDescriptionModal(false) }}
                onCancel={() => { setDescriptionModal(false) }}
            >
                <AddressModalStyle>
                    <textarea value={description} onChange={(e) => SetDescription(e.target.value)} className='textArea' />
                </AddressModalStyle>
            </Modal>
        </DisplaySectionPreview>
    )
}
export default DisplaySection;