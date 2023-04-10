import React, { useState } from 'react';
import { Tabs, Modal } from 'antd';
import { ContentPreviewStyle, EditInfoPreview } from "./styles";
import { EditFilled } from '@ant-design/icons';

const ContentPreview = ({ title, data }) => {

    const [privicy, setPrivicy] = useState([...data]);
    const [active, setActive] = useState(data[0]?.title);

    return (
        <ContentPreviewStyle>
            <div className='tab_container_contant'>
                <h1 className='tab_title'>{title}<EditFilled className='edit_icon' /></h1>
                {privicy?.map((item, i) => {
                    return (
                        item?.title == active && <div className='tab_details' key={item?.title}>
                            <h1 className='tab_details_header'>{i + 1}. {item?.title}</h1>
                            <p className='tab_details_desc'>{item?.description}</p>
                        </div>
                    )
                })}
            </div>
            <div className='tab_container_wrapper'>
                <div className='tab_container_wrapper_main'>
                    <h3 className='tab_title'>Table Of Contents:</h3>
                    <ul className='side_links_wrapper'>
                        {privicy?.map((item) => {
                            return (<li className={item?.title == active ? 'side_links side_links_active' : 'side_links'} key={item?.title} onClick={() => setActive(item?.title)}>{item?.title}</li>)
                        })}
                    </ul>
                </div>
            </div>

            <Modal
                title={title}
                centered
                open={true}
            // onOk={() => setOpen(false)}
            // onCancel={() => setOpen(false)}
            >
                <EditInfoPreview>
                    <div className='info_preview_main'>

                    </div>
                </EditInfoPreview>
            </Modal>
        </ContentPreviewStyle>
    )
}
export default ContentPreview;