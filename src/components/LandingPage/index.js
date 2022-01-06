import { Card, Col, Divider, notification, Row, Space } from 'antd';
import { t } from 'i18next';
import React, { useState } from 'react';
import { sliderDefaultConfig } from '../../config/sliderConfig';
import ChangeLogs from '../ChangeLogs';
import CustomSlider from '../CustomSlider';
import SliderSettingsPanel from '../SliderSettingsPanel';
import { ControlOutlined  } from '@ant-design/icons';

const LandingPage = () => {

    const [sliderDuration, setSliderDuration] = useState(sliderDefaultConfig.duration)
    const [sliderDirection, setSliderDirection] = useState(sliderDefaultConfig.direction);
    const [changeLogs, setChangeLogs] = useState([]);

    const onChangeSettings = ({durationSetting, directionSetting}) => {
        const changeLog = {}
        if(durationSetting !== sliderDuration) {
            changeLog.duration = {
                from: `${sliderDuration / 1000} ${t('common.seconds')}`,
                to: `${durationSetting / 1000} ${t('common.seconds')}`
            }
            changeLog.ts = new Date().toISOString();
        }

        if(directionSetting !== sliderDirection) {
            changeLog.direction = {
                from: sliderDirection ? 
                t('settings.slidingDirection.rToL') : 
                t('settings.slidingDirection.lToR'),
                to: directionSetting ? 
                t('settings.slidingDirection.rToL') : 
                t('settings.slidingDirection.lToR')
            }
        }
        
        setChangeLogs([ changeLog, ...changeLogs]);
        
        setSliderDuration(durationSetting);
        setSliderDirection(directionSetting);
        
        notification.success({
            message: t('settings.notification.title'),
            description: t('settings.notification.description')
          });
    }

    return (
        <Card>
            <Row gutter={20}>
                <Col span={16}>
                    <CustomSlider 
                        duration={sliderDuration}
                        directionOfSlide={sliderDirection}
                        onChangeSettings={(setting) => onChangeSettings(setting)}
                    />
                </Col>
                <Col span={8}>
                    <SliderSettingsPanel
                        duration={sliderDuration}
                        direction={sliderDirection}
                        onChangeSettings={(setting) => onChangeSettings(setting)}
                    />
                </Col>
            </Row>
            <Divider orientation='left'>
                <Space>
                    <ControlOutlined />
                    { t('common.title.changeLogs') }
                </Space>
                
            </Divider>
            <Row>
                <Col span={24}>
                    <ChangeLogs 
                        data={changeLogs}
                    />
                </Col>
            </Row>
        </Card>
    )
}

export default LandingPage;