import React, { Component } from 'react'
import { Menu, Icon } from 'antd';

export class Nav extends Component {
    render() {
        return (
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item>
                    <Icon type="user" />
                    <span>Nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="video-camera" />
                    <span>nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="upload" />
                    <span>nav 3</span>
                </Menu.Item>
            </Menu>
        )
    }
}

export default Nav
