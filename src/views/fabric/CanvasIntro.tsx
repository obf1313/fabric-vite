/**
 * @description: 介绍 Canvas
 * @author: cnn
 * @createTime: 2021/9/24 10:26
 **/
import { Card, Divider } from 'antd';
import React, { useEffect } from 'react';
import CodeBox from '@components/CodeBox';
import { MyTitle } from '@components/index';

const CanvasIntro = () => {
  useEffect(() => {
    drawRectangle();
  }, []);
  // 画矩形
  const drawRectangle = () => {
    const canvas: any = document.getElementById('example');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = 'red';
      ctx.fillRect(10, 10, 150, 100);
    }
  };
  const code = 'const canvas: any = document.getElementById(\'example\');\n' +
    'if (canvas) {\n' +
    '  const ctx = canvas.getContext(\'2d\');\n' +
    '  ctx.fillStyle = \'red\';\n' +
    '  ctx.fillRect(10, 10, 150, 100);\n' +
    '}';
  return (
    <Card>
      <MyTitle title="简介" />
      <p>
        Canvas API 提供了一个通过 JavaScript 和 HTML 的 canvas 元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。
      </p>
      <p>
        Canvas API 主要聚焦于 2D 图形。而同样使用 canvas 元素的 WebGL API 则用于绘制硬件加速的 2D 和 3D 图形。
      </p>
      <Divider />
      <MyTitle title="示例" />
      <CodeBox code={code} />
      <canvas id="example" />
      <Divider />
      <MyTitle title="缺点" />
      <p>
        但是，使用过程中你会发现，Canvas API 并不能很好的满足我们的需求，比如我们只想清空画布上某一个元素，基于 Canvas API 我们需要做的却是清除区域。
      </p>
      <p>
        以及使用过程中，种种的不便也让我们用起来难以下手。于是就有了 Fabric.js，一个开源 Canvas 库。</p>
    </Card>
  );
};
export default CanvasIntro;