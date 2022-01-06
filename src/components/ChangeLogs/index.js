import { List } from 'antd';
import React from 'react';
import ChangeLog from '../commons/ChangeLog';

const ChangeLogs = (props) => {
    const { data } = props;
    const listItems = data.map((log) => (
        <ChangeLog 
            duration={log.duration}
            direction={log.direction}
            ts={log.ts}
        />
    ))
    return (
        <List
            bordered
            dataSource={listItems}
            renderItem={item => <List.Item>{item}</List.Item>}
            pagination={{
                pageSize: 10,
                position: 'bottom'
            }}
        />
    )
}

export default ChangeLogs;