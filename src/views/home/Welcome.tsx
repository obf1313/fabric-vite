/**
 * @description: 欢迎页面
 * @author: cnn
 * @createTime: 2020/7/23 14:10
 **/
import React from 'react';
import { PageHeader } from 'antd';
import './index.less';

const Welcome = () => {
  return (
    <PageHeader
      title="Fabric.js 中文介绍，请点击右边目录查看详情。"
      style={{ margin: '-10px -10px 10px -10px', backgroundColor: '#fff' }}
    />
  );
};
export default Welcome;
