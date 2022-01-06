import { Breadcrumb, Space } from 'antd';
import React from 'react';
import { HomeOutlined } from '@ant-design/icons';

const BreadCrumbBar = (props) => {
    const {
        breads = []
    } = props;

    const renderItem = (bread) => {
        switch(bread) {
            case 'Home':
                return (
                    <Space>
                        <HomeOutlined />
                        { bread }
                    </Space>
                )
            default:
                return bread;
        }
    }

    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
          {
              breads.map((bread, index) => {
                return (
                    <Breadcrumb.Item key={index}>
                        { renderItem(bread) }
                    </Breadcrumb.Item>
                )
              })
          }
        </Breadcrumb>
    )
}

export default BreadCrumbBar;