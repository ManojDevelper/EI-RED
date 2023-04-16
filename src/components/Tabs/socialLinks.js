import React from "react";
import { Drawer } from 'antd';
import { AddressModalStyle } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import {
    setOpenLinksModal
} from "../../redux/reducer";
import {
    editLinksSetFun,
    saveEditedLinks
} from "./Functions/functions";
import right_arrow_black from "../../assets/icons/right_arrow_black.svg";


const SocialLinks = () => {
    const editState = useSelector((state) => state.compEditor)
    const dispatch = useDispatch();
    return (
        <Drawer title="Address" placement="right" open={editState.openLinksModal} headerStyle={{ display: `none` }}>
            <AddressModalStyle>
                <div className='modal_total_wrapper'>
                    <div className='addressModalHeader'>
                        <h1 className='modal_header'><img src={right_arrow_black} alt="right_arrow_black" className='drawer_memu_back' onClick={() => dispatch(setOpenLinksModal(false))} />Social Media & Links</h1>
                        <span className='modal_desc'>Please provide links to social media accounts & websites</span>
                    </div>
                    <div className='modal_body'>
                        <div className='edit_main_sec'>
                            <span className='input_label'>Website</span>
                            <input type="text" value={editState.templinks?.website} placeholder="Website" className='input' onChange={(e) => editLinksSetFun(e.target.value, "website")} />
                        </div>
                        <div className='edit_main_sec'>
                            <span className='input_label'>Instagram</span>
                            <input type="text" value={editState.templinks?.insta} placeholder="Instagram" className='input' onChange={(e) => editLinksSetFun(e.target.value, "insta")} />
                        </div>
                        <div className='edit_main_sec'>
                            <span className='input_label'>Facebook</span>
                            <input type="text" value={editState.templinks?.fb} placeholder="Facebook" className='input' onChange={(e) => editLinksSetFun(e.target.value, "fb")} />
                        </div>
                        <div className='edit_main_sec'>
                            <span className='input_label'>Twitter</span>
                            <input type="text" value={editState.templinks?.twit} placeholder="Twitter" className='input' onChange={(e) => editLinksSetFun(e.target.value, "twit")} />
                        </div>
                    </div>
                </div>
                <button className='save_btn' onClick={() => saveEditedLinks(editState)} >Save</button>
            </AddressModalStyle>
        </Drawer>
    )
}
export default SocialLinks;