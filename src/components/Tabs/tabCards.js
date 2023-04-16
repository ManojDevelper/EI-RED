import React from 'react';
import { Modal } from 'antd';
import {
    MailFilled,
    PhoneFilled
} from '@ant-design/icons';
import { TabCardsPreview, TabCardsPreviewMain, AddressModalStyle } from './styles';
import contact from "../../assets/icons/contact.svg";
import location from "../../assets/icons/location.svg";
import linksmain from "../../assets/icons/links.svg";
import work from "../../assets/icons/work.svg";
import quotes from "../../assets/icons/quotes.svg";
import globe from "../../assets/icons/globe.svg";
import instagram from "../../assets/icons/instagram.svg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import EditPencil from "../../assets/icons/edit.svg";
import { useSelector, useDispatch } from 'react-redux';
import {
    setShowContactModal,
    setHOP,
    setOpenHOPModal,
    setOpenStatementModal
} from "../../redux/reducer";
import {
    editHop,
    setAddressFun,
    setLinksFun
} from "./Functions/functions";
import EditAddress from "./editAddress";
import SocialLinks from "./socialLinks";
import Statements from "./statements";

const TabCards = () => {

    const editState = useSelector((state) => state.compEditor)
    const dispatch = useDispatch()

    return (
        <TabCardsPreviewMain>
            <TabCardsPreview>
                <div className='card_header'>
                    <span className='card_title'><img src={contact} className="title_icon" alt="contact" />Contact</span>
                    <img src={EditPencil} alt="EditPencil" className='edit_icon' onClick={() => dispatch(setShowContactModal({ bool: true }))} />
                </div>
                <div className='card_body'>
                    <div className='mail_sec'>
                        <MailFilled className='mail_icon' />
                        <span className='mails'>{editState.editContact[0]?.email?.length > 1 ? editState.editContact[0]?.email[0] + " / " + editState.editContact[0]?.email[1] : editState.editContact[0]?.email[0]}</span>
                    </div>
                    <div className='number_badge'>
                        +{editState.editContact?.length}
                    </div>
                </div>
                <div className='card_footer'>
                    <PhoneFilled className='phone_icon' />
                    <span className='phone'>{editState.editContact[0]?.phone?.length > 1 ? editState.editContact[0]?.phone[0] + " / " + editState.editContact[0]?.phone[1] : editState.editContact[0]?.phone[0]}</span>
                </div>
            </TabCardsPreview>

            <TabCardsPreview>
                <div className='card_header'>
                    <span className='card_title'><img src={location} className="title_icon" alt="location" />Address</span>
                    <img src={EditPencil} alt="EditPencil" className='edit_icon' onClick={() => setAddressFun(editState)} />
                </div>
                <div className='card_body_single'>
                    {editState.address?.floorNo}, {editState.address?.area}, {editState.address?.landmark},
                    <br /> {editState.address?.town}, {editState.address?.pincode}
                </div>
            </TabCardsPreview>

            <TabCardsPreview>
                <div className='card_header'>
                    <span className='card_title'><img src={work} className="title_icon" alt="work" />House of operations</span>
                    <img src={EditPencil} alt="EditPencil" className='edit_icon' onClick={() => editHop(editState)} />
                </div>
                <div className='card_body_single'>
                    {editState.HOP}
                </div>
            </TabCardsPreview>

            <TabCardsPreview>
                <div className='card_header'>
                    <span className='card_title'><img src={linksmain} className="title_icon" alt="img" />Social Media & Links</span>
                    <img src={EditPencil} alt="EditPencil" className='edit_icon' onClick={() => setLinksFun(editState)} />
                </div>
                <div className='card_body_icons'>
                    <div className='icon_cont'>
                        <img src={globe} className='icon' alt="img" />
                        <a href={"https://" + editState.links.website}>Website</a>
                    </div>
                    <div className='icon_cont'>
                        <img src={instagram} className='icon' alt="img" />
                        <a href={"https://" + editState.links.insta}>Instagram</a>
                    </div>
                    <div className='icon_cont'>
                        <img src={facebook} className='icon' alt="img" />
                        <a href={"https://" + editState.links.fb}>Facebook</a>
                    </div>
                    <div className='icon_cont'>
                        <img src={twitter} className='icon' alt="img" />
                        <a href={"https://" + editState.links.twit}>Twitter</a>
                    </div>
                </div>
            </TabCardsPreview>

            <TabCardsPreview>
                <div className='card_header'>
                    <span className='card_title'><img src={quotes} className="title_icon" alt="img" />Statement</span>
                    <img src={EditPencil} alt="EditPencil" className='edit_icon' onClick={() => dispatch(setOpenStatementModal(true))} />
                </div>
                <div className='card_body'>
                    <div className='mail_sec'>
                        <span className='mails'>{editState.statements[0]?.value}</span>
                    </div>
                    <div className='number_badge'>
                        +{editState.statements?.length}
                    </div>
                </div>
            </TabCardsPreview>

            {/* House Of Operations */}
            <Modal
                title="House Of Operations"
                centered
                open={editState.openHOPModal}
                onOk={() => { dispatch(setOpenHOPModal(false)) }}
                onCancel={() => { dispatch(setOpenHOPModal(false)) }}
            >
                <AddressModalStyle>
                    <textarea value={editState.HOP} onChange={(e) => dispatch(setHOP(e.target.value))} className='textArea' />
                </AddressModalStyle>
            </Modal>

            {/* Edit Address */}
            <EditAddress />

            {/* Set Social media links */}
            <SocialLinks />

            {/* Set staements list */}
            <Statements />
        </TabCardsPreviewMain>
    )
}
export default TabCards