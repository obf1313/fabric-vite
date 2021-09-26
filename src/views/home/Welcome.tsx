/**
 * @description: 欢迎页面
 * @author: cnn
 * @createTime: 2020/7/23 14:10
 **/
import React, { useContext, useEffect, useState } from 'react';
import { PageHeader, Avatar, Row, Typography, Space } from 'antd';
import './index.less';
import dayJs from 'dayjs';
import { HomeContext } from '../../index';

const { Text } = Typography;

const Welcome = () => {
  const { homeState } = useContext(HomeContext);
  const [welcomeTime, setWelcomeTime] = useState<string>('早安');
  useEffect(() => {
    const hour: number = dayJs().get('hour');
    if (hour >= 5 && hour < 12) {
      setWelcomeTime('早安');
    } else if (hour >= 12 && hour < 15) {
      setWelcomeTime('中午好');
    } else if (hour >= 15 && hour < 19) {
      setWelcomeTime('下午好');
    } else {
      setWelcomeTime('晚安');
    }
  }, []);
  return (
    <PageHeader
      title="Fabric.js 中文介绍，请点击右边目录查看详情。"
      style={{ margin: '-10px -10px 10px -10px', backgroundColor: '#fff' }}
    />
  );
};
export default Welcome;
