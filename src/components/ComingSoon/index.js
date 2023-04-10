import React from 'react';
import { ComingSoonPreview } from './styles';
import { SmileOutlined } from '@ant-design/icons';
import { Result } from 'antd';

const ComingSoon = () => {
    return (
        <ComingSoonPreview>
            <Result
                icon={<SmileOutlined className='smileIcon' />}
                title="Oops, Currently not available!"
            />
        </ComingSoonPreview>
    )
}
export default ComingSoon;