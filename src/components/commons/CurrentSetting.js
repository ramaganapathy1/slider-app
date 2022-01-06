import { Card, Space } from 'antd';
import React from 'react';
import { 
    SwapOutlined,
    ClockCircleOutlined
} from '@ant-design/icons';
import { t } from 'i18next';
import Meta from 'antd/lib/card/Meta';
import { CheckCircleTwoTone  } from '@ant-design/icons';

const CurrentSetting = (props) => (
    <Card>
        <Meta 
            title={ t('currentSettings.title') }
            avatar={<CheckCircleTwoTone twoToneColor="#52c41a" />}
        />
        <Space style={{ marginTop: 10}}>
            <Space>
                <ClockCircleOutlined />
                { `${props.duration / 1000} ${t('common.seconds')}` }
            </Space>
            <Space>
                <SwapOutlined />
                { props.direction ? t('settings.slidingDirection.rToL') : t('settings.slidingDirection.lToR')}
            </Space>
        </Space>
    </Card>
)

export default CurrentSetting;