import React from "react";
import { Drawer } from 'antd';
import { AddressModalStyle } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import {
    ArrowLeftOutlined,
} from '@ant-design/icons';
import {
    setOpenAddressModal,
} from "../../redux/reducer";
import {
    editAddressSetFun,
    saveEditedAddress
} from "./Functions/functions";


const EditAddress = () => {
    const editState = useSelector((state) => state.compEditor)
    const dispatch = useDispatch()
    return (
        <Drawer title="Address" placement="right" open={editState.openAddressModal} headerStyle={{ display: `none` }}>
            <AddressModalStyle>
                <div className='modal_total_wrapper'>
                    <div className='addressModalHeader'>
                        <h1 className='modal_header'><ArrowLeftOutlined className='drawer_memu_back' onClick={() => dispatch(setOpenAddressModal(false))} />Address</h1>
                    </div>
                    <div className='modal_body'>
                        <div className='edit_main_sec'>
                            <input type="text" value={editState.tempaddress?.floorNo} placeholder="Floor Number / Block No" className='input' onChange={(e) => editAddressSetFun(e.target.value, "floorNo", editState)} />
                        </div>
                        <div className='edit_main_sec'>
                            <input type="text" value={editState.tempaddress?.area} placeholder="Area / Locality" className='input' onChange={(e) => editAddressSetFun(e.target.value, "area", editState)} />
                        </div>
                        <div className='edit_main_sec'>
                            <input type="text" value={editState.tempaddress?.landmark} placeholder="Nearest Landmark" className='input' onChange={(e) => editAddressSetFun(e.target.value, "landmark", editState)} />
                        </div>
                        <div className='edit_main_sec'>
                            <input type="text" value={editState.tempaddress?.town} placeholder="Town / City" className='input' onChange={(e) => editAddressSetFun(e.target.value, "town", editState)} />
                        </div>
                        <div className='edit_main_sec'>
                            <input type="text" value={editState.tempaddress?.pincode} placeholder="Pincode" className='input' onChange={(e) => editAddressSetFun(e.target.value, "pincode", editState)} />
                        </div>
                    </div>
                </div>
                <button className='save_btn' onClick={() => saveEditedAddress(editState)} >Save</button>
            </AddressModalStyle>
        </Drawer>
    )
}
export default EditAddress;