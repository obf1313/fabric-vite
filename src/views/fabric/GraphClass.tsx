/**
 * @description: 常用图形类介绍
 * @author: cnn
 * @createTime: 2021/9/24 13:59
 **/
import React, { useEffect, useState } from 'react';
import { Card, Divider, Row } from 'antd';
import { MyTitle, CodeBox } from '@components/index';
import { fabric } from 'fabric';

const GraphClass = () => {
  const [fabricCanvas, setFabricCanvas] = useState<any>();
  useEffect(() => {
    initCanvas();
  }, []);
  useEffect(() => {
    if (fabricCanvas) {
      initLine();
      initCircle();
      initTriangle();
      initEllipse();
      initRect();
      initPolyLine();
      initPolygon();
      initText();
      initImage();
      initPath();
    }
  }, [fabricCanvas]);
  // 初始化 canvas
  const initCanvas = () => {
    const fabricCanvas = new fabric.Canvas('graph-canvas', {
      width: 950,
      height: 460,
      backgroundColor: '#ddd'
    });
    setFabricCanvas(fabricCanvas);
  };
  // 线
  const initLine = () => {
    const line = new fabric.Line([10, 0, 10, 100], {
      stroke: 'red',
      strokeWidth: 5,
    });
    fabricCanvas.add(line);
  };
  // 圆
  const initCircle = () => {
    const circle = new fabric.Circle({
      radius: 50,
      left: 20,
      top: 20,
      fill: 'red'
    });
    fabricCanvas.add(circle);
  };
  // 三角形
  const initTriangle = () => {
    const triangle = new fabric.Triangle({
      fill: 'red',
      left: 150,
      top: 20
    });
    fabricCanvas.add(triangle);
  };
  // 椭圆
  const initEllipse = () => {
    const ellipse = new fabric.Ellipse({
      rx: 50,
      ry: 20,
      fill: 'red',
      top: 20,
      left: 250
    });
    fabricCanvas.add(ellipse);
  };
  // 矩形
  const initRect = () => {
    const rect = new fabric.Rect({
      fill: 'red',
      left: 400,
      top: 20,
      width: 200,
      height: 100
    });
    fabricCanvas.add(rect);
  };
  // 折线
  const initPolyLine = () => {
    const polyLine = new fabric.Polyline([{
      x: 800,
      y: 20
    }, {
      x: 800,
      y: 60
    }, {
      x: 900,
      y: 40
    }], {
      stroke: 'red',
      fill: 'rgba(0, 0, 0, 0)'
    });
    fabricCanvas.add(polyLine);
  };
  // 多边形
  const initPolygon = () => {
    const polygon = new fabric.Polygon([{
      x: 800,
      y: 90
    }, {
      x: 800,
      y: 190
    }, {
      x: 900,
      y: 40
    }], {
      fill: 'red'
    });
    fabricCanvas.add(polygon);
  };
  // 文本
  const initText = () => {
    const text = new fabric.Text('大家好', {
      fontSize: 24,
      top: 200,
      left: 600
    });
    const iText = new fabric.IText('可以编辑', {
      fontSize: 24,
      top: 400,
      left: 200
    });
    fabricCanvas.add(text);
    fabricCanvas.add(iText);
  };
  // 图片
  const initImage = () => {
    fabric.Image.fromURL('https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg', (oImg) => {
      oImg.top = 200;
      oImg.left = 500;
      oImg.scale(0.5);
      fabricCanvas.add(oImg);
    });
  };
  // 路径
  const initPath = () => {
    const path = new fabric.Path('M 0 0 L 200 100 L 170 200 z');
    path.set({ left: 120, top: 120, fill:'red' });
    fabricCanvas.add(path);
  };
  return (
    <Card>
      <MyTitle title="图形类" />
      <Row>
        <div style={{ width: '100%', height: 300, overflow: 'auto' }}>
          <MyTitle title="线" level={5} />
          <CodeBox code={initLine.toString()} />
          <Divider />
          <MyTitle title="圆" level={5} />
          <CodeBox code={initCircle.toString()} />
          <Divider />
          <MyTitle title="三角形" level={5} />
          <CodeBox code={initTriangle.toString()} />
          <Divider />
          <MyTitle title="椭圆" level={5} />
          <CodeBox code={initEllipse.toString()} />
          <Divider />
          <MyTitle title="矩形" level={5} />
          <CodeBox code={initRect.toString()} />
          <Divider />
          <MyTitle title="折线" level={5} />
          <CodeBox code={initPolyLine.toString()} />
          <Divider />
          <MyTitle title="多边形" level={5} />
          <CodeBox code={initPolygon.toString()} />
          <Divider />
          <MyTitle title="文本" level={5} />
          <CodeBox code={initText.toString()} />
          <Divider />
          <MyTitle title="图片" level={5} />
          <CodeBox code={initImage.toString()} />
          <Divider />
          <MyTitle title="路径" level={5} />
          <CodeBox code={initPath.toString()} />
        </div>
        <canvas id="graph-canvas" style={{ marginTop: 10 }} />
      </Row>
    </Card>
  );
};
export default GraphClass;