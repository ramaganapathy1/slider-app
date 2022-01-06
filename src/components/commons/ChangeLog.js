import { Divider, Space, Typography } from 'antd';
import React from 'react';
import { 
    SwapOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';
import { t } from 'i18next';

const {
    Text
} = Typography;

const ChangeLog = (props) => {
    const {
        duration = {},
        direction = {},
        ts = new Date().toISOString()
    } = props;

    return (
        <Space>
            [{ ts }]
            <Divider type='vertical'/>
            <Space>
                <ClockCircleOutlined />
                {duration.from ? <>
                    <Text 
                        delete
                        italic
                    >
                        { duration.from || 'no change'}
                    </Text>
                    <Text type='secondary'>
                        to
                    </Text>
                    <Text type='success'>
                        { duration.to || 'no change'}
                    </Text>
                </> : <Text>{ t('changelog.noChange') }</Text>}
            </Space>
            <Divider type='vertical'/>
            <Space>
                <SwapOutlined />
                { direction.from ? 
                    <>
                        <Text 
                        delete
                        italic
                        >
                            { direction.from || 'no change'}
                        </Text>
                        <Text type='secondary'>
                            to
                        </Text>
                        <Text type='success'>
                            { direction.to || 'no change'}
                        </Text>
                    </> : <Text>{ t('changelog.noChange') }</Text>
                }
            </Space>
        </Space>
    )
}

export default ChangeLog;