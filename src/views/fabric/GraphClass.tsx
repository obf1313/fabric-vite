/**
 * @description: 常用图形类介绍
 * @author: cnn
 * @createTime: 2021/9/24 13:59
 **/
import React, { useEffect, useState } from 'react';
import { Button, Card, Divider } from 'antd';
import { MyTitle, CodeBox, LinkNote } from '@components/index';
import { fabric } from 'fabric';
import { funcToString } from '@utils/CommonFunc';

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
  const fill = () => {
    const obj = fabricCanvas.getActiveObject();
    if (obj) {
      obj.set('fill', 'rgba(248,147,189,0.5)');
      fabricCanvas.renderAll();
    }
  };
  return (
    <Card>
      <MyTitle title="图形类" />
      <div style={{ width: '100%', height: 300, overflow: 'auto' }}>
        <MyTitle title="线" level={5} />
        <CodeBox code={funcToString(initLine.toString())} />
        <Divider />
        <MyTitle title="圆" level={5} />
        <CodeBox code={funcToString(initCircle.toString())} />
        <Divider />
        <MyTitle title="三角形" level={5} />
        <CodeBox code={funcToString(initTriangle.toString())} />
        <Divider />
        <MyTitle title="椭圆" level={5} />
        <CodeBox code={funcToString(initEllipse.toString())} />
        <Divider />
        <MyTitle title="矩形" level={5} />
        <CodeBox code={funcToString(initRect.toString())} />
        <Divider />
        <MyTitle title="折线" level={5} />
        <CodeBox code={funcToString(initPolyLine.toString())} />
        <Divider />
        <MyTitle title="多边形" level={5} />
        <CodeBox code={funcToString(initPolygon.toString())} />
        <Divider />
        <MyTitle title="文本" level={5} />
        <CodeBox code={funcToString(initText.toString())} />
        <Divider />
        <MyTitle title="图片" level={5} />
        <CodeBox code={funcToString(initImage.toString())} />
        <Divider />
        <MyTitle title="路径" level={5} />
        <CodeBox code={funcToString(initPath.toString())} />
      </div>
      <Divider />
      <Button onClick={fill} style={{ marginBottom: 10 }} type="primary">填充颜色</Button>
      <canvas id="graph-canvas" />
      <Divider />
      <LinkNote
        linkList={[{
          name: '线 fabric.Line',
          url: 'http://fabricjs.com/docs/fabric.Line.html'
        }, {
          name: '圆 fabric.Circle',
          url: 'http://fabricjs.com/docs/fabric.Circle.html'
        }, {
          name: '三角形 fabric.Triangle',
          url: 'http://fabricjs.com/docs/fabric.Triangle.html'
        }, {
          name: '椭圆 fabric.Ellipse',
          url: 'http://fabricjs.com/docs/fabric.Ellipse.html'
        }, {
          name: '矩形 fabric.Rect',
          url: 'http://fabricjs.com/docs/fabric.Rect.html'
        }, {
          name: '折线 fabric.Polyline',
          url: 'http://fabricjs.com/docs/fabric.Polyline.html'
        }, {
          name: '多边形 fabric.Polygon',
          url: 'http://fabricjs.com/docs/fabric.Polygon.html'
        }, {
          name: '文本 fabric.Text',
          url: 'http://fabricjs.com/docs/fabric.Text.html'
        }, {
          name: '可编辑文本 fabric.IText',
          url: 'http://fabricjs.com/docs/fabric.IText.html'
        }, {
          name: '图片 fabric.Image',
          url: 'http://fabricjs.com/docs/fabric.Image.html'
        }, {
          name: '路径 fabric.Path',
          url: 'http://fabricjs.com/docs/fabric.Path.html'
        }]}
      />
    </Card>
  );
};
export default GraphClass;
