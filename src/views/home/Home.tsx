/**
 * @description: 主页
 * @author: cnn
 * @createTime: 2020/7/16 17:03
 **/
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Row, Layout, Menu, Spin } from 'antd';
import { Header } from '@components/index';
import { initMenu } from '@utils/CommonFunc';
import { MenuData } from '@utils/CommonInterface';
import { PageSessionList, platform, projectName } from '@utils/CommonVars';
import logo from '@static/images/logo.png';
import './index.less';

const { Content, Sider } = Layout;

interface IProps {
  children?: any
}
const Home = (props: IProps) => {
  const { children } = props;
  const history = useHistory();
  // 如果跳转路由了，则清除 current
  history.listen((location, action) => {
    if (action === 'PUSH') {
      sessionStorage.removeItem('current');
      PageSessionList.forEach(item => {
        sessionStorage.removeItem(item);
      });
    }
  });
  const [menuList, setMenuList] = useState<Array<MenuData>>([]);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  useEffect(() => {
    getMenuList();
  }, []);
  // 获取用户菜单
  const getMenuList = () => {
    const menuList: Array<MenuData> = [{
      id: '1',
      name: 'Canvas 介绍',
      url: 'canvasIntro',
    }, {
      id: '2',
      name: 'Fabric.js 介绍',
      url: 'fabricIntro',
    }, {
      id: '3',
      name: '文档介绍',
      url: '',
      children: [{
        id: '3-1',
        name: '画布',
        url: 'fabricCanvas',
      }, {
        id: '3-2',
        name: '图形类',
        url: 'graphClass',
      }, {
        id: '3-3',
        name: '监听事件',
        url: 'listener',
      }, {
        id: '3-4',
        name: '涂鸦',
        url: 'brush',
      }, {
        id: '3-5',
        name: '效果',
        url: 'effect',
      }, {
        id: '3-6',
        name: '序列化和反序列化',
        url: 'serialize',
      }]
    }];
    setMenuList(menuList);
  };
  // 折叠
  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Row align="middle" justify="center" className="header-title-icon">
          <img src={logo} alt="logo" height={28} />
          {!collapsed && <div className="header-title">{projectName}</div>}
        </Row>
        <div className="menu">
          <Menu
            theme="dark"
            mode="inline"
          >
            {initMenu(menuList, platform)}
          </Menu>
        </div>
      </Sider>
      <Layout className="site-layout">
        <Header />
        <Content className="content">
          <div>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
