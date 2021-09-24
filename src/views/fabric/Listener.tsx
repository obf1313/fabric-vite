/**
 * @description: 监听事件
 * @author: cnn
 * @createTime: 2021/9/24 14:00
 **/
import React, { useEffect, useState } from 'react';
import { Card, Divider, Row } from 'antd';
import { MyTitle } from '@components/index';
import { fabric } from 'fabric';

const Listener = () => {
  const [fabricCanvas, setFabricCanvas] = useState<any>();
  const [selectText, setSelectText] = useState<string>('');
  useEffect(() => {
    initCanvas();
  }, []);
  useEffect(() => {
    if (fabricCanvas) {
      initText();
      initListener();
    }
  }, [fabricCanvas]);
  // 初始化 canvas
  const initCanvas = () => {
    const fabricCanvas = new fabric.Canvas('listener-canvas', {
      width: 800,
      height: 200,
      backgroundColor: '#ddd'
    });
    setFabricCanvas(fabricCanvas);
  };
  // 文本
  const initText = () => {
    const text = new fabric.Text('大家好', {
      fontSize: 24,
      top: 20,
      left: 50
    });
    fabricCanvas.add(text);
  };
  // 初始化监听器
  const initListener = () => {
    fabricCanvas.on('selection:created', (o: any) => {
      setSelectText(o.target.text);
    });
  };
  return (
    <Card>
      <MyTitle title="监听事件" />
      <p>
        fabric 不仅提供了创建了对象的方法，也提供对创建的对象进行事件监听的方法。
      </p>
      <p>
        fabric 提供的事件有：
      </p>
      <ul>
        <li>对象事件：object:modified，object:rotating，object:scaling，object:moving，object:skewing，before:transform，path:created，object:rotated，object:scaled，object:moved，object:skewed</li>
        <li>鼠标事件：mouse:down，mouse:move，mouse:up，mouse:down:before，mouse:move:before，mouse:up:before，mouse:over，mouse:out，mouse:dblclick</li>
        <li>画布事件：event:dragover，event:dragenter，event:dragleave，event:drop，after:render，before:render</li>
        <li>选择事件：before:selection，selection:cleared，selection:updated，selection:created</li>
      </ul>
      <Divider />
      <MyTitle title="示例" />
      <p>选中元素的文本内容：{selectText}</p>
      <canvas id="listener-canvas" />
    </Card>
  );
};
export default Listener;