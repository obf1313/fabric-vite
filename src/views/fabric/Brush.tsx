/**
 * @description: 涂鸦
 * @author: cnn
 * @createTime: 2021/9/26 10:35
 **/
import React, { useEffect, useState } from 'react';
import { Card, Divider, Row, Radio } from 'antd';
import { fabric } from 'fabric';
import { CodeBox, MyTitle } from '@components/index';
import { funcToString } from '@utils/CommonFunc';

const Brush = () => {
  const [fabricCanvas, setFabricCanvas] = useState<any>();
  useEffect(() => {
    initCanvas();
  }, []);
  useEffect(() => {
    if (fabricCanvas) {
      initPencilBrush();
    }
  }, [fabricCanvas]);
  // 初始化 canvas
  const initCanvas = () => {
    const fabricCanvas = new fabric.Canvas('brush-canvas', {
      width: 800,
      height: 300,
      backgroundColor: '#ddd'
    });
    setFabricCanvas(fabricCanvas);
  };
  // 笔刷改变
  const onBrushChange = (e: any) => {
    switch (e.target.value) {
      default:
      case 'pencil':
        initPencilBrush();
        break;
      case 'circle':
        initCircleBrush();
        break;
      case 'spray':
        initSprayBrush();
        break;
      case 'pattern':
        initPatternBrush();
        break;
    }
  };
  // 开启铅笔笔刷
  const initPencilBrush = () => {
    // 开启画布自由绘画模式
    fabricCanvas.isDrawingMode = true;
    // 设置自由绘画模式画笔类型为 铅笔笔刷
    // @ts-ignore
    fabricCanvas.freeDrawingBrush = new fabric.PencilBrush(fabricCanvas);
    // 设置自由绘画模式 画笔颜色与画笔线条大小
    fabricCanvas.freeDrawingBrush.color = '#000000';
    fabricCanvas.freeDrawingBrush.width = 4;
  };
  // 开启圆圈模式
  const initCircleBrush = () => {
    // 开启画布自由绘画模式
    fabricCanvas.isDrawingMode = true;
    // 设置自由绘画模式画笔类型为 圆圈笔刷
    // @ts-ignore
    fabricCanvas.freeDrawingBrush = new fabric.CircleBrush(fabricCanvas);
    // 设置自由绘画模式 画笔颜色与画笔线条大小
    fabricCanvas.freeDrawingBrush.color = '#000000';
    fabricCanvas.freeDrawingBrush.width = 4;
  };
  // 开启喷墨笔刷
  const initSprayBrush = () => {
    // 开启画布自由绘画模式
    fabricCanvas.isDrawingMode = true;
    // 设置自由绘画模式画笔类型为 喷墨笔刷
    // @ts-ignore
    fabricCanvas.freeDrawingBrush = new fabric.SprayBrush(fabricCanvas);
    // 设置自由绘画模式 画笔颜色与画笔线条大小
    fabricCanvas.freeDrawingBrush.color = '#000000';
    fabricCanvas.freeDrawingBrush.width = 4;
  };
  // 开启图案笔刷
  const initPatternBrush = () => {
    const img = new Image();
    img.src = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';
    img.onload = () => {
      // 开启画布自由绘画模式
      fabricCanvas.isDrawingMode = true;
      // @ts-ignore
      const patternBrush = new fabric.PatternBrush(fabricCanvas);
      // 图案笔刷的来源
      // @ts-ignore
      patternBrush.source = img;
      // 设置自由绘画模式画笔类型为 图案笔刷
      fabricCanvas.freeDrawingBrush = patternBrush;
      // 设置自由绘画模式 画笔颜色与画笔线条大小
      fabricCanvas.freeDrawingBrush.color = '#000000';
      fabricCanvas.freeDrawingBrush.width = 4;
    };
  };
  return (
    <Card>
      <MyTitle title="涂鸦" />
      <p>fabric 封装好了画笔功能，我们在使用的时候对画笔进行一些配置即可使用。</p>
      <div style={{ height: 280, overflow: 'auto' }}>
        <MyTitle title="铅笔模式 PencilBrush" />
        <CodeBox code={funcToString(initPencilBrush.toString())} />
        <Divider />
        <MyTitle title="圆圈模式 CircleBrush" />
        <CodeBox code={funcToString(initCircleBrush.toString())} />
        <Divider />
        <MyTitle title="喷墨模式 SprayBrush" />
        <CodeBox code={funcToString(initSprayBrush.toString())} />
        <Divider />
        <MyTitle title="图案笔刷 PatternBrush" />
        <CodeBox code={funcToString(initPatternBrush.toString())} />
      </div>
      <Divider />
      <MyTitle title="示例" />
      <Row style={{ marginBottom: 10 }}>
        <Radio.Group defaultValue="pencil" buttonStyle="solid" onChange={onBrushChange}>
          <Radio.Button value="pencil">铅笔</Radio.Button>
          <Radio.Button value="circle">圆圈</Radio.Button>
          <Radio.Button value="spray">喷墨</Radio.Button>
          <Radio.Button value="pattern">图案</Radio.Button>
        </Radio.Group>
      </Row>
      <canvas id="brush-canvas" />
    </Card>
  );
};
export default Brush;