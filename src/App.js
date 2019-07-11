import React, { Component } from 'react';
import './App.less';
import { Layout, Icon } from 'antd';
import Nav from './components/nav/nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logoUrL from './assets/logo.svg';
import User from './pages/user/user';
import Camera from './pages/camera/Camera';
import Upload from './pages/upload/upload';
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
          <Router>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo">
                <img src={logoUrL} alt='logo' />
                <span className={this.state.collapsed ? 'hide' : 'show'}>Admin</span>
              </div>
              <div className="nav">
                <Nav />
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
              <Content>
                <Route exact path="/user" component={User} />
                <Route path="/camera" component={Camera} />
                <Route path="/upload" component={Upload} />
              </Content>
              <Footer>Footer</Footer>
            </Layout>
          </Router>
        </Layout>
      </div>
    )
  }
}
export default App;
