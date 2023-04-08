import React from 'react';
import logo from "../../assets/images/logo.png";
import { HeaderSection } from "./styles";
import { SearchOutlined, ShoppingCartOutlined, DownOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import user_icon from "../../assets/images/user_icon.png";


const Header = () => {
    return (
        <HeaderSection>
            <div className='headerSection'>
                <img src={logo} alt="logo" className='logo' />
                <div className='header_search'>
                    <SearchOutlined className='SearchOutlined' />
                    <input placeholder='Search...' className='search_input' />
                </div>
            </div>
            <div className='checkout_btn'>
                <button className='check_out'>
                    <ShoppingCartOutlined className='cart' />
                    Checkout (200)</button>

                <div className='user_container'>
                    <img src={user_icon} className='user_image' alt="user_icon" />
                    <span className='user_name'>Manoj Ponugoti</span>
                    <DownOutlined className='dropdown_icon' />
                </div>
            </div>
        </HeaderSection>
    )
}
export default Header;