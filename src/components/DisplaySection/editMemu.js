import React, { useState, useEffect } from 'react';
import { EditMenuPreview, TabCardsPreview, EditMenuBody, EditCardData } from "./styles";
import { Drawer } from 'antd';
import { PlusCircleOutlined, EditFilled, DeleteOutlined, MailFilled, PhoneFilled } from '@ant-design/icons';
import contact from "../../assets/icons/contact.svg";
import { useSelector, useDispatch } from 'react-redux'
import { editContact, setDataObject } from '../../redux/reducer';



const EditMenu = () => {

    const editState = useSelector((state) => state.compEditor)
    const dispatch = useDispatch()

    const getItem = JSON.parse(localStorage.getItem("contact_data"));

    console.log("getItem", getItem)

    const [email, setEmail] = useState("");

    const [tempEditObjData, setEditObjData] = useState({});


    const contactArr = [
        {
            team: "Sales Team",
            email: ["salesteam@br.in", "salesteam2@br.in"],
            phone: ["9494978555", "9493815943"]
        },
        {
            team: "Marketing Lead",
            email: ["salesteam@br.in", "salesteam2@br.in"],
            phone: ["9494978555", "9493815943"]
        },
    ]


    const setItemFun = (item, index) => {
        setEditObjData(
            {
                team: item?.team,
                email: item?.email,
                phone: item?.phone,
                id: index
            }
        );
    }

    // Update Team name Function
    const editTeamNameFun = (value) => {
        setEditObjData({
            ...tempEditObjData,
            team: value
        })
    }

    // update Email function
    const editContactFun = (value, index, name) => {
        let tempObj = [...tempEditObjData[name]];
        tempObj[index] = value;

        let updateVar = {
            ...tempEditObjData,
            [name]: [...tempObj]
        }
        setEditObjData(updateVar);
    }

    // Save Edited data to exissting array
    const saveEditedData = (tempEditObjData) => {
        const tempArr = [...editState.editContact];
        tempArr[tempEditObjData.id] = tempEditObjData
        console.log("tempArr", tempArr)
        dispatch(editContact({
            arr: tempArr
        }));
        // setting updated value to localstorage
        localStorage.setItem("contact_data", JSON.stringify(editState.editContact));
    }

    const addEmailFun = () => {
        let tempArr = [...tempEditObjData?.email];
        tempArr.push("");
        console.log("tempArr", tempArr)
        let updateVar = {
            ...tempEditObjData,
            email: tempArr
        }
        setEditObjData(updateVar)
    }

    console.log("tempEditObjData", tempEditObjData)

    return (
        <EditMenuPreview>
            <Drawer title="Contacts" placement="right" open="true">
                <EditMenuBody>
                    <div className='menu_cards'>
                        {contactArr?.map((item, index) => {
                            return (
                                <TabCardsPreview key={item?.team}>
                                    <div className='card_header'>
                                        <span className='card_title'><img src={contact} className="title_icon" />{item?.team}</span>
                                        <div className='card_icons'>
                                            <EditFilled className="edit_icon" onClick={() => setItemFun(item, index)} />
                                            <DeleteOutlined className="edit_icon" />
                                        </div>
                                    </div>
                                    <div className='card_body'>
                                        <div className='mail_sec'>
                                            <MailFilled className='mail_icon' />
                                            <span className='mails'>{item?.email[0]} / {item?.email[1]}</span>
                                        </div>
                                    </div>
                                    <div className='card_footer'>
                                        <PhoneFilled className='phone_icon' />
                                        <span className='phone'>{item?.phone[0]} / {item?.phone[1]}</span>
                                    </div>
                                </TabCardsPreview>
                            )
                        })}
                    </div>
                    <button className='save_btn'>Save</button>
                </EditMenuBody>

                {/* Contact edit form */}
                <EditCardData>
                    <div className='edit_card_data_main'>
                        <div className='edit_main_sec team_name_div'>
                            <span className='input_label'>Team Name</span>
                            <input type="text" value={tempEditObjData.team} placeholder="eg. Client Management" onChange={(e) => editTeamNameFun(e.target.value)} className='input' />
                        </div>

                        <div className='editcard_sec'>
                            <div className='edit_main_sec'>
                                <span className='input_label'>Email Id</span>
                                {editState.dataObject.email?.map((item, index) => {
                                    return (
                                        <input type="text" defaultValue={item} placeholder="eg.services@gmail.com" onChange={(e) => editContactFun(e.target.value, index, 'email')} className='input' key={item} />
                                    )
                                })}
                            </div>
                            <button className={!email == "" ? 'add_more_btn add_more_btn_dis' : 'add_more_btn'} onClick={() => addEmailFun()}><PlusCircleOutlined className='addMore' />Add More</button>
                        </div>

                        <div className='editcard_sec'>
                            <div className='edit_main_sec'>
                                <span className='input_label'>Contact Number</span>
                                {editState.dataObject.phone?.map((item, index) => {
                                    return (
                                        <input type="text" defaultValue={item} placeholder="eg. 9494978553" onChange={(e) => editContactFun(e.target.value, index, 'phone')} className='input' key={item} />
                                    )
                                })}
                            </div>
                            <button className={!email == "" ? 'add_more_btn add_more_btn_dis' : 'add_more_btn'} onClick={() => addEmailFun()}><PlusCircleOutlined className='addMore' />Add More</button>
                        </div>
                    </div>
                    <button className='save_btn' onClick={() => saveEditedData(tempEditObjData)}>Save</button>
                </EditCardData>
            </Drawer>
        </EditMenuPreview>
    )
}
export default EditMenu;