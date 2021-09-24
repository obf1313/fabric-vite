/**
 * @description: 介绍 Fabric.js
 * @author: cnn
 * @createTime: 2021/9/24 10:28
 **/
import React from 'react';
import { Card, Divider, Typography } from 'antd';

const { Title } = Typography;

const FabricIntro = () => {
  return (
    <Card>
      <Title level={3}>简介</Title>
      <p>
        Fabric.js 为 Canvas 提供所缺少的对象模型, svg parser, 交互和一整套其他不可或缺的工具。
      </p>
      <Divider />
      <Title level={3}>Fabric.js 能做的事情</Title>
      <ul>
        <li>在 Canvas 上创建、填充图形（包括图片、文字、规则图形和复杂路径组成图形）。</li>
        <li>给图形填充渐变颜色。</li>
        <li>组合图形（包括组合图形、图形文字、图片等）。</li>
        <li>设置图形动画集用户交互。</li>
        <li>生成 JSON, SVG 数据等。</li>
        <li>生成 Canvas 对象自带拖拉拽功能。</li>
        <li>画布的平移、缩放。</li>
      </ul>
    </Card>
  );
};
export default FabricIntro;