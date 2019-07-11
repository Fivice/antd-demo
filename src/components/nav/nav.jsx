import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
export class Nav extends Component {
    render() {
        return (

            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item>
                    <Link to='/user'>
                        <Icon type="user" />
                        <span>user</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to='/camera'><Icon type="video-camera" />
                        <span>camera</span></Link>

                </Menu.Item>
                <Menu.Item key="3">
                    <Link to='/upload'>
                        <Icon type="upload" />
                        <span>upload</span>
                    </Link>

                </Menu.Item>
            </Menu>
        )
    }
}

export default Nav
