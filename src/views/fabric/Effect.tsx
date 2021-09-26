/**
 * @description: 效果
 * @author: cnn
 * @createTime: 2021/9/26 10:35
 **/
import React, { useEffect, useState } from 'react';
import { Card, Divider } from 'antd';
import { CodeBox, MyTitle } from '@components/index';
import { fabric } from 'fabric';
import { funcToString } from '@utils/CommonFunc';

const Effect = () => {
  const [fabricCanvas, setFabricCanvas] = useState<any>();
  const [colorList, setColorList] = useState<Array<any>>([]);
  const [redToGreen, setRedToGreen] = useState<any>();
  const [shadow, setShadow] = useState<any>();
  const [pattern, setPattern] = useState<any>();
  useEffect(() => {
    initCanvas();
  }, []);
  useEffect(() => {
    if (fabricCanvas) {
      initColor();
      initShadow();
      initPattern();
    }
  }, [fabricCanvas]);
  useEffect(() => {
    if (colorList.length > 1) {
      initGradient();
    }
  }, [colorList]);
  useEffect(() => {
    if (redToGreen) {
      initCircle();
    }
  }, [redToGreen]);
  useEffect(() => {
    if (pattern) {
      withPatternRect();
    }
  }, [pattern]);
  // 初始化 canvas
  const initCanvas = () => {
    const fabricCanvas = new fabric.Canvas('effect-canvas', {
      width: 800,
      height: 250,
      backgroundColor: '#ddd'
    });
    setFabricCanvas(fabricCanvas);
  };
  // 创建颜色
  const initColor = () => {
    const colorList = [];
    const colorRed = new fabric.Color('red');
    const colorGreen = new fabric.Color('#00FF00');
    const colorBlue = new fabric.Color('rgb(0, 0, 255)');
    colorList.push(colorRed, colorGreen, colorBlue);
    setColorList(colorList);
  };
  // 创建渐变色
  const initGradient = () => {
    const gradient = new fabric.Gradient({
      type: 'linear',
      gradientUnits: 'pixels', // or 'percentage'
      coords: { x1: 0, y1: 0, x2: 0, y2: 100 },
      colorStops:[{
        offset: 0,
        color: colorList[0].toRgb()
      }, {
        offset: 1,
        color: colorList[1].toRgb()
      }]
    });
    setRedToGreen(gradient);
  };
  // 创建阴影
  const initShadow = () => {
    const shadow = new fabric.Shadow({
      color: 'yellow',
      blur: 30
    });
    setShadow(shadow);
  };
  // 创建纹理
  const initPattern = () => {
    const img = new Image();
    img.src = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
    img.onload = () => {
      const pattern = new fabric.Pattern({ source: img });
      setPattern(pattern);
    };
  };
  // 渐变阴影圆形
  const initCircle = () => {
    const circle = new fabric.Circle({
      left: 100,
      top: 100,
      radius: 50,
      fill: redToGreen,
      shadow: shadow
    });
    fabricCanvas.add(circle);
  };
  // 带纹理的矩形
  const withPatternRect = () => {
    const rect = new fabric.Rect({
      fill: pattern,
      left: 300,
      top: 20,
      width: 200,
      height: 200
    });
    fabricCanvas.add(rect);
  };
  const gradientCode = 'const gradient = new fabric.Gradient({\n' +
    '  type: \'linear\',\n' +
    '  gradientUnits: \'pixels\', // or \'percentage\'\n' +
    '  coords: { x1: 0, y1: 0, x2: 0, y2: 100 },\n' +
    '  colorStops:[{\n' +
    '    offset: 0,\n' +
    '    color: colorList[0].toRgb()\n' +
    '  }, {\n' +
    '    offset: 1,\n' +
    '    color: colorList[1].toRgb()\n' +
    '  }]\n' +
    '});';
  const patternCode = 'const img = new Image();\n' +
    'img.src = \'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg\';\n' +
    'img.onload = () => {\n' +
    '  const pattern = new fabric.Pattern({ source: img });\n' +
    '  setPattern(pattern);\n' +
    '};';
  const resultCode = 'const circle = new fabric.Circle({\n' +
    '  left: 100,\n' +
    '  top: 100,\n' +
    '  radius: 50,\n' +
    '  fill: redToGreen,\n' +
    '  shadow: shadow\n' +
    '});\n' +
    'fabricCanvas.add(circle);\n' +
    'const rect = new fabric.Rect({\n' +
    '  fill: pattern,\n' +
    '  left: 300,\n' +
    '  top: 20,\n' +
    '  width: 200,\n' +
    '  height: 200\n' +
    '});\n' +
    'fabricCanvas.add(rect);';
  return (
    <Card>
      <MyTitle title="效果" />
      <p>本章介绍以下四种效果：</p>
      <ul>
        <li>颜色 fabric.Color</li>
        <li>渐变 fabric.Gradient</li>
        <li>阴影 fabric.Shadow</li>
        <li>纹理 fabric.Pattern</li>
      </ul>
      <Divider />
      <MyTitle title="颜色 fabric.Color" />
      <p>fabric 提供了很方便的方式创建颜色，创建好的颜色都可以直接使用。</p>
      <CodeBox code={funcToString(initColor.toString())} />
      <Divider />
      <MyTitle title="渐变 fabric.Gradient" />
      <p>使用颜色的一种更具表现力的方式是通过渐变。渐变使我们能够将一种颜色混合到另一种颜色中，从而创造出一些令人惊叹的图形效果。</p>
      <p>Fabric 支持在所有对象上设置填充或描边属性的渐变。为了给对象设置渐变，首先创建渐变，然后将其分配给填充或描边。</p>
      <CodeBox code={gradientCode} />
      <Divider />
      <MyTitle title="阴影 fabric.Shadow" />
      <CodeBox code={funcToString(initShadow.toString())} />
      <Divider />
      <MyTitle title="纹理 fabric.Pattern" />
      <CodeBox code={patternCode} />
      <Divider />
      <MyTitle title="示例结果" />
      <CodeBox code={resultCode} />
      <canvas id="effect-canvas" />
    </Card>
  );
};
export default Effect;