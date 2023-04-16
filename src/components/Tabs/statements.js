import React from "react";
import { Drawer } from 'antd';
import { AddressModalStyle } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import {
    DeleteOutlined,
    EditOutlined,
    CheckOutlined,
    PlusCircleOutlined
} from '@ant-design/icons';
import {
    setEditStatement,
    setOpenStatementModal
} from "../../redux/reducer";
import {
    editStatementsFun,
    saveEditedCardFun,
    deleteEditCardFun,
    addNewStatementFun,
    saveEditedStatementsFun
} from "./Functions/functions";
import quotes from "../../assets/icons/quotes.svg";
import right_arrow_black from "../../assets/icons/right_arrow_black.svg";

const Statements = () => {
    const editState = useSelector((state) => state.compEditor)
    const dispatch = useDispatch()
    return (
        <Drawer placement="right" open={editState.openStatementModal} headerStyle={{ display: `none` }}>
            <AddressModalStyle>
                <div className='modal_total_wrapper'>
                    <div className='addressModalHeader'>
                        <div className='modal_head_title_wrap'>
                            <h1 className='modal_header'><img src={right_arrow_black} alt="right_arrow_black" className='drawer_memu_back' onClick={() => dispatch(setOpenStatementModal(false))} />Statement</h1>
                            <span className='addButton' onClick={() => addNewStatementFun(editState)}><PlusCircleOutlined /> add</span>
                        </div>
                        <span className='modal_desc'>Write Down The statements of the company in to convey your vision to the potential customer.</span>
                    </div>
                    <div className='modal_body'>
                        {editState.statements?.map((item, index) => {
                            return (
                                <div className='address_cards' key={item?.value}>
                                    <div className='card_header'>
                                        <img src={quotes} className='quotes_icon' alt="img" />
                                        <div className='card_action_btns'>
                                            <DeleteOutlined onClick={() => deleteEditCardFun(item.id, editState)} />
                                            {item?.edit ?
                                                <CheckOutlined onClick={() => saveEditedCardFun(editState.editStatement, index, editState)} />
                                                :
                                                <EditOutlined onClick={() => editStatementsFun(item?.value, index, editState)} />
                                            }
                                        </div>
                                    </div>
                                    {item?.edit ?
                                        <input type="text" value={editState.editStatement} placeholder="Add Statement..." className='edit_statement_input' onChange={(e) => dispatch(setEditStatement(e.target.value))} />
                                        :
                                        <p className='card_desc'>{item?.value}</p>
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>
                <button className='save_btn' onClick={() => saveEditedStatementsFun(editState)} >Save</button>
            </AddressModalStyle>
        </Drawer>
    )
}

export default Statements;