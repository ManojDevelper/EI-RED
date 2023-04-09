import React, { useState } from 'react';
import Header from "../../components/Header";
import Drawer from "../../components/Drawer";
import TabCards from "./tabCards";
import { TabsSectionPreview, DiaplayHeader } from "./styles";
import { Button, Space, Tabs } from 'antd';
import logo from "../../assets/images/logo.png";
import verify from "../../assets/icons/verify.svg";
import verify_disable from "../../assets/icons/verify_disable.svg";
import digital_round from "../../assets/images/digital_round.svg";
import { EditFilled } from '@ant-design/icons';
import contact from "../../assets/icons/contact.svg";
import location from "../../assets/icons/location.svg";
import links from "../../assets/icons/links.svg";
import work from "../../assets/icons/work.svg";
import quotes from "../../assets/icons/quotes.svg";


const TabsSection = () => {

    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: '1',
            label: `Info`,
            children: <TabCards />,
        },
        {
            key: '2',
            label: `Faq`,
            children: `Content of Tab Pane 2`,
        },
        {
            key: '3',
            label: `Complaints and feedback`,
            children: `Content of Tab Pane 3`,
        },
        {
            key: '4',
            label: `Privacy Policy`,
            children: `Content of Tab Pane 3`,
        },
        {
            key: '5',
            label: `Terms & Conditions`,
            children: <div>hello</div>,
        },
    ];

    return (
        <TabsSectionPreview>
            <h2 className='tabsec_title'>compVerify</h2>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </TabsSectionPreview>
    )
}
export default TabsSection;