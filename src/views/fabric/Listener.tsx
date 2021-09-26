/**
 * @description: 监听事件
 * @author: cnn
 * @createTime: 2021/9/24 14:00
 **/
import React, { useEffect, useState } from 'react';
import { Card, Divider } from 'antd';
import { CodeBox, LinkNote, MyTitle } from '@components/index';
import { fabric } from 'fabric';
import { funcToString } from '@utils/CommonFunc';

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
    const text1 = new fabric.Text('大家不好', {
      fontSize: 24,
      top: 60,
      left: 200
    });
    fabricCanvas.add(text);
    fabricCanvas.add(text1);
  };
  // 初始化监听器
  const initListener = () => {
    fabricCanvas.on('selection:created', (o: any) => {
      setSelectText(o.target.text);
    });
    fabricCanvas.on('selection:updated', (o: any) => {
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
      <p>下面来看一个例子，我们创建了两个文本元素，建立了两个监听事件，选中事件和选中事件更新，在选中文本或者切换文本时显示选中文本的文字。</p>
      <CodeBox code={funcToString(initListener.toString())} />
      <p>选中元素的文本内容：<span style={{ color: 'red' }}>{selectText}</span></p>
      <canvas id="listener-canvas" />
      <Divider />
      <LinkNote
        linkList={[{
          name: '监听器 fabric.Canvas.Fires',
          url: 'http://fabricjs.com/docs/fabric.Canvas.html'
        }]}
      />
    </Card>
  );
};
export default Listener;