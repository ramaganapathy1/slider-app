import React, { useState } from 'react';
import {
  Form,
  Button,
  InputNumber,
  Divider,
  Row,
  Col,
  Slider,
  Card,
  Space,
  Popover,
  Typography,
  Radio
} from 'antd';
import { t } from 'i18next';
import {
    SettingOutlined,
    QuestionCircleOutlined,
    SwapOutlined,
    ClockCircleOutlined,
    InfoCircleOutlined,
    ExclamationCircleOutlined
} from '@ant-design/icons';
import confirm from 'antd/lib/modal/confirm';

const {
    Link : Anchor,
    Text
} = Typography

const SliderSettingsPanel = (props) => {

    const {
        duration = 1,
        direction = false,
        onChangeSettings = () => undefined
    } = props;

    const [durationSetting, setDurationSetting] = useState((duration / 1000));
    const [directionSetting, setDirectionSetting] = useState(direction);

    const enableAppySetting = () => {
        return (((duration / 1000) !== durationSetting) || 
            (direction !== directionSetting)) ? true : false;
    }

    const onSubmitSetings = () => {
        confirm({
            title: t('settings.confirmModal.title'),
            icon: <ExclamationCircleOutlined />,
            onOk() {
                onChangeSettings({
                    directionSetting,
                    durationSetting: (durationSetting * 1000)
                })
            },
            onCancel() {
              setDurationSetting(duration);
              setDirectionSetting(direction);
            },
          });
    }

    return (
    <Card 
        style={{ 
            height: '60vh',
            backgroundColor: 'whitesmoke'
        }}
    >
        <Divider orientation='left'>
            <Space>
                <SettingOutlined />
                { t('common.title.settings') }
            </Space>
        </Divider>
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout='vertical'
        >
            <Card>
                <Form.Item 
                    label={
                        <Space>
                            <ClockCircleOutlined />
                            <Text strong>
                                { t('settings.durationInSeconds') }
                            </Text>
                        </Space>
                    }
                    labelCol={24}
                >
                    <Row>
                        <Col span={20}>
                            <Slider
                                min={1}
                                max={20}
                                onChange={(val) => setDurationSetting(val)}
                                value={durationSetting}
                                tooltipVisible={false}
                            />
                        </Col>
                        <Col span={4}>
                            <InputNumber
                                min={1}
                                max={20}
                                step={1}
                                controls={true}
                                style={{ margin: '0 16px' }}
                                onChange={(val) => setDurationSetting(val)}
                                value={durationSetting}
                            />
                        </Col>
                    </Row>
                </Form.Item>
                <Popover
                    title={ t('settings.whatIsSlidingDuration') }
                    content={ t('settings.whatIsSlidingDurationDescription') }
                >
                    <Anchor>
                        <Space>
                            <InfoCircleOutlined />
                            { t('settings.whatIsSlidingDuration') }
                        </Space>
                    </Anchor>
                </Popover>
            </Card>
            <Card style={{ marginTop: 10}}>
                <Form.Item 
                    label={
                        <Space>
                            <SwapOutlined />
                            <Text strong>
                                { t('settings.slidingDirection') }
                            </Text>
                        </Space>
                    }
                    labelCol={24}
                    valuePropName="radio"
                >
                    <Radio.Group onChange={(e) => setDirectionSetting(e.target.value)} value={directionSetting}>
                        <Radio value={true}>
                            <Text>
                                { t('settings.slidingDirection.rToL') }
                            </Text>
                        </Radio>
                        <Radio value={false}>
                            <Text>
                                { t('settings.slidingDirection.lToR') }
                            </Text>
                        </Radio>
                    </Radio.Group>
                </Form.Item>
                <Popover
                    title={ t('settings.whatIsSlideDirection') }
                    content={ t('settings.whatIsSlideDirectionDescription') }
                >
                    <Anchor>
                        <Space>
                            <InfoCircleOutlined />
                            { t('settings.whatIsSlideDirection') }
                        </Space>
                    </Anchor>
                </Popover>
            </Card>
            
            <Form.Item>
                <Space style={{ marginTop: 10}}>
                    <Button
                        type='primary'
                        disabled={ !enableAppySetting() }
                        onClick={
                            () => onSubmitSetings()
                        }
                    >
                        { t('setings.action.applySetting')}
                    </Button>
                    { !enableAppySetting() && 
                        <Popover
                            title={ t('settings.whyDisabled') }
                            content={ t('settings.whyDisabledDescription') }
                        >
                            <QuestionCircleOutlined 
                                size={'small'}
                            /> 
                        </Popover>
                    }
                </Space>
            </Form.Item>
        </Form>
        
    </Card>
  );
}

export default SliderSettingsPanel;