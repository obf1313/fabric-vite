/**
 * @description: 文档介绍 - 画布 - Canvas / StaticCanvas。
 * @author: cnn
 * @createTime: 2021/9/24 10:29
 **/
import React, { useEffect } from 'react';
import { Card, Divider } from 'antd';
import { fabric } from 'fabric';
import CodeBox from '@components/CodeBox';
import LinkNote from '@components/document/LinkNote';
import { MyTitle } from '@components/index';

const FabricCanvas = () => {
  useEffect(() => {
    initCanvas();
    initStaticCanvas();
  }, []);
  // 初始化 canvas
  const initCanvas = () => {
    const fabricCanvas = new fabric.Canvas('fabric-canvas', {
      width: 800,
      height: 200,
      backgroundColor: '#ddd'
    });
    const rect = new fabric.Rect({
      fill: 'red',
      left: 10,
      top: 10,
      width: 200,
      height: 100
    });
    fabricCanvas.add(rect);
  };
  // 初始化 StaticCanvas
  const initStaticCanvas = () => {
    const staticCanvas = new fabric.StaticCanvas('static-canvas', {
      width: 800,
      height: 200,
      backgroundColor: '#ddd'
    });
    const rect = new fabric.Rect({
      fill: 'red',
      left: 10,
      top: 10,
      width: 200,
      height: 100
    });
    staticCanvas.add(rect);
  };
  const code = 'const fabricCanvas = new fabric.Canvas(\'fabric-canvas\', {\n' +
    '  width: 800,\n' +
    '  height: 200,\n' +
    '  backgroundColor: \'#ddd\'\n' +
    '});\n' +
    'const rect = new fabric.Rect({\n' +
    '  fill: \'red\',\n' +
    '  left: 10,\n' +
    '  top: 10,\n' +
    '  width: 200,\n' +
    '  height: 100\n' +
    '});\n' +
    'fabricCanvas.add(rect);';
  const staticCode = 'const staticCanvas = new fabric.StaticCanvas(\'static-canvas\', {\n' +
    '  width: 800,\n' +
    '  height: 200,\n' +
    '  backgroundColor: \'#ddd\'\n' +
    '});\n' +
    'const rect = new fabric.Rect({\n' +
    '  fill: \'red\',\n' +
    '  left: 10,\n' +
    '  top: 10,\n' +
    '  width: 200,\n' +
    '  height: 100\n' +
    '});\n' +
    'staticCanvas.add(rect);';
  return (
    <Card>
      <MyTitle title="画布" />
      <p>
        Fabric.js 有两种不同的画布，一种是 Canvas，另一种是 StaticCanvas，顾名思义，普通画布和静态画布的区别，下面我们分别使用两个实例来看他们之间的区别。
      </p>
      <Divider />
      <MyTitle title="Canvas" />
      <p>
        我们画了一个 200 * 100 的矩形，画布使用的是 fabric.Canvas，其中的矩形可以随意的拖动拉伸。
      </p>
      <CodeBox code={code} />
      <canvas id="fabric-canvas" />
      <Divider />
      <MyTitle title="StaticCanvas" />
      <p>
        我们画了一个 200 * 100 的矩形，画布使用的是 fabric.StaticCanvas，其中的矩形不能支持拖动拉伸，也就意味着该画布内所有的元素都不能拖动。
      </p>
      <CodeBox code={staticCode} />
      <canvas id="static-canvas" />
      <Divider />
      <LinkNote
        linkList={[{
          name: 'fabric.StaticCanvas',
          url: 'http://fabricjs.com/docs/fabric.StaticCanvas.html'
        }, {
          name: 'fabric.Canvas',
          url: 'http://fabricjs.com/docs/fabric.Canvas.html'
        }]}
      />
    </Card>
  );
};
export default FabricCanvas;