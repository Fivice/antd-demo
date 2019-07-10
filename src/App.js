import React, { Component } from 'react';
import './App.less';
import { Layout, Icon } from 'antd';
import Nav from './components/nav/nav';
import Logo from './assets/logo.svg';
const { Header, Footer, Sider, Content } = Layout;


class App extends Component {
  state = {
    collapsed: false,
  };
  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
    return (
      <div>
        <Layout>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div className="logo">
              <Icon type = "home"></Icon>
            </div>
            <div className="nav">
              <Nav/>
            </div>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            </Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}
export default App;
