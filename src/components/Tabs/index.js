import React from 'react';
import TabCards from "./tabCards";
import { TabsSectionPreview } from "./styles";
import { Tabs } from 'antd';
import ContentPreview from "./ContentPreview";
import { privacyPolicyMock, termsConditions } from "../../utils/mock";
import ComingSoon from "../ComingSoon";


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
            label: `FAQ`,
            children: <ComingSoon />,
        },
        {
            key: '3',
            label: `Complaints and feedback`,
            children: <ComingSoon />,
        },
        {
            key: '4',
            label: `Privacy Policy`,
            children: <ContentPreview
                title="Your Privicy Matters"
                data={privacyPolicyMock} />,
        },
        {
            key: '5',
            label: `Terms & Conditions`,
            children: <ContentPreview
                title="Terms & Conditions"
                data={termsConditions} />,
        },
    ];

    return (
        <TabsSectionPreview>
            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </TabsSectionPreview>
    )
}
export default TabsSection;