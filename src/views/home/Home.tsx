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
import { HomeContext } from '../../index';
import { post } from '@utils/Ajax';
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
  const [selectedKeys, setSelectedKeys] = useState<Array<string>>([]);
  const [openKeys, setOpenKeys] = useState<Array<string>>(menuList.map((menu: MenuData) => menu.id));
  const [collapsed, setCollapsed] = useState<boolean>(false);
  useEffect(() => {
    getMenuList();
  }, []);
  // 获取用户菜单
  const getMenuList = () => {
    const menuList: Array<MenuData> = [{
      id: '1',
      name: '测试',
      icon: '',
      url: '',
      menuType: 0,
      children: []
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
            selectedKeys={selectedKeys}
            openKeys={openKeys}
            onSelect={(item: any) => setSelectedKeys(item.keyPath)}
            onOpenChange={(openKeys: any) => setOpenKeys(openKeys)}
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
