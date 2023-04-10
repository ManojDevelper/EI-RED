import React, { useState } from 'react';
import { Modal, Drawer } from 'antd';
import {
    EditFilled,
    MailFilled,
    PhoneFilled,
    ArrowLeftOutlined,
    DeleteOutlined,
    EditOutlined,
    CheckOutlined,
    PlusCircleOutlined
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
import { useSelector, useDispatch } from 'react-redux';
import { setStatements, setShowContactModal } from "../../redux/reducer";

const TabCards = () => {

    const editState = useSelector((state) => state.compEditor)
    const dispatch = useDispatch()

    const [address, setAddress] = useState({
        floorNo: "75",
        area: "Chinmaya Nagar Stage 1",
        landmark: "Kilpauk",
        town: "Chennai",
        pincode: "600010"
    });

    const [tempaddress, setTempAddress] = useState({
        floorNo: "75",
        area: "Chinmaya Nagar Stage 1",
        landmark: "Kilpauk",
        town: "Chennai",
        pincode: "600010"
    });

    const [openAddressModal, setOpenAddressModal] = useState(false);

    const [HOP, setHOP] = useState("Monday To Friday - 9:00Am To 6:00Pm");
    const [openHOPModal, setOpenHOPModal] = useState(false);

    const [links, setLinks] = useState({
        website: "www.google.com",
        insta: "www.instagram.com",
        fb: "www.facebook.com",
        twit: "www.twitter.com"
    });

    const [templinks, setTempLinks] = useState({
        website: "www.google.com",
        insta: "www.instagram.com",
        fb: "www.facebook.com",
        twit: "www.twitter.com"
    });
    const [openLinksModal, setOpenLinksModal] = useState(false);

    const [editStatement, setEditStatement] = useState("");

    const [openStatementModal, setOpenStatementModal] = useState(false);


    const editHop = () => {
        setHOP("Monday To Friday - 9:00Am To 6:00Pm");
        setOpenHOPModal(true);
    }

    // Set edited data function
    const setAddressFun = () => {
        setTempAddress({ ...address });
        setOpenAddressModal(true);
    };

    // Save edited data function
    const editAddressSetFun = (value, name) => {
        setTempAddress({
            ...tempaddress,
            [name]: value
        });
    };

    // Up date address with edited address
    const saveEditedAddress = () => {
        setAddress({ ...tempaddress });
        setOpenAddressModal(false);
    };


    // Initial links set function
    const setLinksFun = () => {
        setTempLinks({ ...links });
        setOpenLinksModal(true);
    }

    // Save edited data function
    const editLinksSetFun = (value, name) => {
        setTempLinks({
            ...templinks,
            [name]: value
        });
    };

    // Up date links with edited links
    const saveEditedLinks = () => {
        setLinks({ ...templinks });
        setOpenLinksModal(false);
    };

    // edit statements
    const editStatementsFun = (value, index) => {
        const tempArr = JSON.parse(JSON.stringify(editState.statements));
        tempArr[index]["edit"] = true;
        setEditStatement(value);
        dispatch(setStatements({
            statements: tempArr
        }));
    }

    const setEditStatementFun = (value, index) => {
        const tempArr = JSON.parse(JSON.stringify(editState.statements));
        tempArr[index]["value"] = value;
        // dispatch(setStatements({
        //     statements: tempArr
        // }));
    }

    const saveEditedCardFun = (value, index) => {
        const tempArr = JSON.parse(JSON.stringify(editState.statements));
        tempArr[index]["value"] = value;
        tempArr[index]["edit"] = false;
        dispatch(setStatements({
            statements: tempArr
        }));
    }

    const deleteEditCardFun = (index) => {
        const tempArr = JSON.parse(JSON.stringify(editState.statements));
        dispatch(setStatements({
            statements: tempArr?.filter((itm) => itm.id !== index)
        }));
    }

    const addNewStatementFun = () => {
        const tempArr = JSON.parse(JSON.stringify(editState.statements));
        tempArr.push({ value: "", edit: true, id: Math.random() });
        dispatch(setStatements({
            statements: tempArr
        }));
    }

    const saveEditedStatementsFun = () => {
        const tempArr = JSON.parse(JSON.stringify(editState.statements));
        setOpenStatementModal(false);
        dispatch(setStatements({
            statements: tempArr?.filter((itm) => itm.value !== "")
        }));
    }



    return (
        <TabCardsPreviewMain>
            <TabCardsPreview>
                <div className='card_header'>
                    <span className='card_title'><img src={contact} className="title_icon" />Contact</span>
                    <EditFilled className="edit_icon" onClick={() => dispatch(setShowContactModal({ bool: true }))} />
                </div>
                <div className='card_body'>
                    <div className='mail_sec'>
                        <MailFilled className='mail_icon' />
                        <span className='mails'>salesteam@br.in / salesteam2@br.in</span>
                    </div>
                    <div className='number_badge'>
                        +5
                    </div>
                </div>
                <div className='card_footer'>
                    <PhoneFilled className='phone_icon' />
                    <span className='phone'>+91 9494978552 / 9493815946</span>
                </div>
            </TabCardsPreview>

            <TabCardsPreview>
                <div className='card_header'>
                    <span className='card_title'><img src={location} className="title_icon" />Address</span>
                    <EditFilled className="edit_icon" onClick={() => setAddressFun()} />
                </div>
                <div className='card_body_single'>
                    {address?.floorNo}, {address?.area}, {address?.landmark},
                    <br /> {address?.town}, {address?.pincode}
                </div>
            </TabCardsPreview>

            <TabCardsPreview>
                <div className='card_header'>
                    <span className='card_title'><img src={work} className="title_icon" />House of operations</span>
                    <EditFilled className="edit_icon" onClick={() => editHop()} />
                </div>
                <div className='card_body_single'>
                    {HOP}
                </div>
            </TabCardsPreview>

            <TabCardsPreview>
                <div className='card_header'>
                    <span className='card_title'><img src={linksmain} className="title_icon" />Social Media & Links</span>
                    <EditFilled className="edit_icon" onClick={() => setLinksFun()} />
                </div>
                <div className='card_body_icons'>
                    <div className='icon_cont'>
                        <img src={globe} className='icon' />
                        <a href={"https://" + links.website}>Website</a>
                    </div>
                    <div className='icon_cont'>
                        <img src={instagram} className='icon' />
                        <a href={"https://" + links.insta}>Instagram</a>
                    </div>
                    <div className='icon_cont'>
                        <img src={facebook} className='icon' />
                        <a href={"https://" + links.fb}>Facebook</a>
                    </div>
                    <div className='icon_cont'>
                        <img src={twitter} className='icon' />
                        <a href={"https://" + links.twit}>Twitter</a>
                    </div>
                </div>
            </TabCardsPreview>

            <TabCardsPreview>
                <div className='card_header'>
                    <span className='card_title'><img src={quotes} className="title_icon" />Statement</span>
                    <EditFilled className="edit_icon" onClick={() => setOpenStatementModal(true)} />
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
                open={openHOPModal}
                onOk={() => { setOpenHOPModal(false) }}
                onCancel={() => { setOpenHOPModal(false) }}
            >
                <AddressModalStyle>
                    <textarea value={HOP} onChange={(e) => setHOP(e.target.value)} className='textArea' />
                </AddressModalStyle>
            </Modal>

            {/* Edit Address */}
            <Drawer title="Address" placement="right" open={openAddressModal} headerStyle={{ display: `none` }}>
                <AddressModalStyle>
                    <div className='modal_total_wrapper'>
                        <div className='addressModalHeader'>
                            <h1 className='modal_header'><ArrowLeftOutlined className='drawer_memu_back' onClick={() => setOpenAddressModal(false)} />Address</h1>
                        </div>
                        <div className='modal_body'>
                            <div className='edit_main_sec'>
                                <input type="text" value={tempaddress?.floorNo} placeholder="Floor Number / Block No" className='input' onChange={(e) => editAddressSetFun(e.target.value, "floorNo")} />
                            </div>
                            <div className='edit_main_sec'>
                                <input type="text" value={tempaddress?.area} placeholder="Area / Locality" className='input' onChange={(e) => editAddressSetFun(e.target.value, "area")} />
                            </div>
                            <div className='edit_main_sec'>
                                <input type="text" value={tempaddress?.landmark} placeholder="Nearest Landmark" className='input' onChange={(e) => editAddressSetFun(e.target.value, "landmark")} />
                            </div>
                            <div className='edit_main_sec'>
                                <input type="text" value={tempaddress?.town} placeholder="Town / City" className='input' onChange={(e) => editAddressSetFun(e.target.value, "town")} />
                            </div>
                            <div className='edit_main_sec'>
                                <input type="text" value={tempaddress?.pincode} placeholder="Pincode" className='input' onChange={(e) => editAddressSetFun(e.target.value, "pincode")} />
                            </div>
                        </div>
                    </div>
                    <button className='save_btn' onClick={() => saveEditedAddress()} >Save</button>
                </AddressModalStyle>
            </Drawer>


            {/* Set Social media links */}
            <Drawer title="Address" placement="right" open={openLinksModal} headerStyle={{ display: `none` }}>
                <AddressModalStyle>
                    <div className='modal_total_wrapper'>
                        <div className='addressModalHeader'>
                            <h1 className='modal_header'><ArrowLeftOutlined className='drawer_memu_back' onClick={() => setOpenLinksModal(false)} />Social Media & Links</h1>
                            <span className='modal_desc'>Please provide links to social media accounts & websites</span>
                        </div>
                        <div className='modal_body'>
                            <div className='edit_main_sec'>
                                <span className='input_label'>Website</span>
                                <input type="text" value={templinks?.website} placeholder="Website" className='input' onChange={(e) => editLinksSetFun(e.target.value, "website")} />
                            </div>
                            <div className='edit_main_sec'>
                                <span className='input_label'>Instagram</span>
                                <input type="text" value={templinks?.insta} placeholder="Instagram" className='input' onChange={(e) => editLinksSetFun(e.target.value, "insta")} />
                            </div>
                            <div className='edit_main_sec'>
                                <span className='input_label'>Facebook</span>
                                <input type="text" value={templinks?.fb} placeholder="Facebook" className='input' onChange={(e) => editLinksSetFun(e.target.value, "fb")} />
                            </div>
                            <div className='edit_main_sec'>
                                <span className='input_label'>Twitter</span>
                                <input type="text" value={templinks?.twit} placeholder="Twitter" className='input' onChange={(e) => editLinksSetFun(e.target.value, "twit")} />
                            </div>
                        </div>
                    </div>
                    <button className='save_btn' onClick={() => saveEditedLinks()} >Save</button>
                </AddressModalStyle>
            </Drawer>


            {/* Set staements list */}
            <Drawer placement="right" open={openStatementModal} headerStyle={{ display: `none` }}>
                <AddressModalStyle>
                    <div className='modal_total_wrapper'>
                        <div className='addressModalHeader'>
                            <div className='modal_head_title_wrap'>
                                <h1 className='modal_header'><ArrowLeftOutlined className='drawer_memu_back' onClick={() => setOpenStatementModal(false)} />Statement</h1>
                                <span className='addButton' onClick={() => addNewStatementFun()}><PlusCircleOutlined /> add</span>
                            </div>
                            <span className='modal_desc'>Write Down The statements of the company in to convey your vision to the potential customer.</span>
                        </div>
                        <div className='modal_body'>
                            {editState.statements?.map((item, index) => {
                                return (
                                    <div className='address_cards' key={item?.value}>
                                        <div className='card_header'>
                                            <img src={quotes} className='quotes_icon' />
                                            <div className='card_action_btns'>
                                                <DeleteOutlined onClick={() => deleteEditCardFun(item.id)} />
                                                {item?.edit ?
                                                    <CheckOutlined onClick={() => saveEditedCardFun(editStatement, index)} />
                                                    :
                                                    <EditOutlined onClick={() => editStatementsFun(item?.value, index)} />
                                                }
                                            </div>
                                        </div>
                                        {item?.edit ?
                                            <input type="text" value={editStatement} placeholder="Add Statement..." className='edit_statement_input' onChange={(e) => setEditStatement(e.target.value)} />
                                            :
                                            <p className='card_desc'>{item?.value}</p>
                                        }
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <button className='save_btn' onClick={() => saveEditedStatementsFun()} >Save</button>
                </AddressModalStyle>
            </Drawer>
        </TabCardsPreviewMain>
    )
}
export default TabCards