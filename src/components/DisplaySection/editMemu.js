import React from 'react';
import { EditMenuPreview, TabCardsPreview, EditMenuBody, EditCardData } from "./styles";
import { Drawer } from 'antd';
import {
    PlusCircleOutlined,
    EditFilled,
    DeleteOutlined,
    MailFilled,
    PhoneFilled,
    ArrowLeftOutlined
} from '@ant-design/icons';
import contact from "../../assets/icons/contact.svg";
import { useSelector, useDispatch } from 'react-redux';
import {
    setShowContactModal,
    setEditContactShow
} from '../../redux/reducer';
import {
    addNewContactCardFun,
    setItemFun,
    editNameFun,
    emailEditFun,
    phoneEditFun,
    addEmailContainer,
    addPhoneContainer,
    saveContactFun,
    deleteCardFun
} from "./Functions/functions";



const EditMenu = () => {

    const editState = useSelector((state) => state.compEditor);
    const dispatch = useDispatch();

    return (
        <EditMenuPreview>
            <Drawer title="Contacts" placement="right" open={editState.showContactModal} headerStyle={{ display: `none` }}>
                {!editState.editContactShow
                    ?
                    <EditMenuBody>
                        <div className='addressModalHeader'>
                            <div className='modal_head_title_wrap'>
                                <h1 className='modal_header'><ArrowLeftOutlined className='drawer_memu_back' onClick={() => { dispatch(setShowContactModal({ bool: false })) }} />Contacts</h1>
                                <span className='addButton' onClick={() => addNewContactCardFun(editState)}><PlusCircleOutlined /> add</span>
                            </div>
                            <span className='modal_desc'>Please provide the company emails and contacts</span>
                        </div>
                        <div className='menu_cards'>
                            {editState.editContact?.map((item, index) => {
                                return (
                                    <TabCardsPreview key={item?.team}>
                                        <div className='card_header'>
                                            <span className='card_title'><img src={contact} className="title_icon" alt="img" />{item?.team}</span>
                                            <div className='card_icons'>
                                                <EditFilled className="edit_icon" onClick={() => setItemFun(item, index, editState)} />
                                                <DeleteOutlined className="edit_icon" onClick={() => deleteCardFun(index, editState)} />
                                            </div>
                                        </div>
                                        <div className='card_body'>
                                            <div className='mail_sec'>
                                                <MailFilled className='mail_icon' />
                                                <span className='mails'>{item?.email.length > 1 ? item?.email[0] + " / " + item?.email[1] : item?.email[0]}</span>
                                            </div>
                                        </div>
                                        <div className='card_footer'>
                                            <PhoneFilled className='phone_icon' />
                                            <span className='phone'>{item?.phone.length > 1 ? item?.phone[0] + " / " + item?.phone[1] : item?.phone[0]}</span>
                                        </div>
                                    </TabCardsPreview>
                                )
                            })}
                        </div>
                        <button className='save_btn' onClick={() => dispatch(setShowContactModal({ bool: false }))}>Save</button>
                    </EditMenuBody>
                    :
                    <EditCardData>
                        <div className='addressModalHeader'>
                            <div className='modal_head_title_wrap'>
                                <h1 className='modal_header'><ArrowLeftOutlined className='drawer_memu_back' onClick={() => { dispatch(setEditContactShow(false)) }} />Contacts</h1>
                            </div>
                            <span className='modal_desc'>Please provide the company emails and contacts</span>
                        </div>
                        <div className='edit_card_data_main'>
                            {/* <div className='edit_main_sec team_name_div'>
                                <span className='input_label'>Team Name</span>
                                <input value={editState.dataObject.team} type="text" placeholder="eg. Client Management" onChange={(e) => editNameFun(e.target.value, editState)} className='input' />
                            </div> */}

                            <div className='editcard_sec'>
                                <div className='edit_main_sec'>
                                    <span className='input_label'>Email Id</span>
                                    {editState.editEmail?.map((item, index) => {
                                        return (
                                            <input value={item} type="text" placeholder="eg.services@gmail.com" className='input' onChange={(e) => emailEditFun(e.target.value, index, editState)} key={index} />
                                        )
                                    })}
                                </div>
                                <button className='add_more_btn' onClick={() => addEmailContainer(editState)}><PlusCircleOutlined className='addMore' />Add More</button>
                            </div>

                            <div className='editcard_sec'>
                                <div className='edit_main_sec'>
                                    <span className='input_label'>Contact Number</span>
                                    {editState.editPhone?.map((item, index) => {
                                        return (
                                            <input value={item} type="text" placeholder="eg. 9494978553" className='input' onChange={(e) => phoneEditFun(e.target.value, index, editState)} key={index} />
                                        )
                                    })}
                                </div>
                                <button className='add_more_btn' onClick={() => addPhoneContainer(editState)}><PlusCircleOutlined className='addMore' />Add More</button>
                            </div>
                        </div>
                        <button className='save_btn' onClick={() => { saveContactFun(editState) }}>Save</button>
                    </EditCardData>
                }
            </Drawer>
        </EditMenuPreview>
    )
}
export default EditMenu;