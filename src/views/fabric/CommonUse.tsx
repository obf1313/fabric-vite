/**
 * @description: 常用方法
 * @author: cnn
 * @createTime: 2021/9/26 15:24
 **/
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { MyTitle } from '@components/index';
import { fabric } from 'fabric';

const CommonUse = () => {
  const [fabricCanvas, setFabricCanvas] = useState<any>();
  useEffect(() => {
    initCanvas();
  }, []);
  useEffect(() => {
    if (fabricCanvas) {
      initListener();
      initRect();
    }
  }, [fabricCanvas]);
  // 初始化 canvas
  const initCanvas = () => {
    const fabricCanvas = new fabric.Canvas('common-canvas', {
      width: 1000,
      height: 500,
      backgroundColor: '#ddd'
    });
    setFabricCanvas(fabricCanvas);
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
  // 监听
  const initListener = () => {
    fabricCanvas.on('mouse:wheel', (event: any) => {
      let zoom = (event.e.deltaY > 0 ? -0.1 : 0.1) + fabricCanvas.getZoom();
      zoom = Math.max(0.5, zoom); // 最小为原来的 1/2
      zoom = Math.min(2, zoom); // 最大是原来的 2 倍
      const zoomPoint = new fabric.Point(event.pointer.x,event.pointer.y);
      fabricCanvas.zoomToPoint(zoomPoint, zoom);
    });
  };
  return (
    <Card>
      <MyTitle title="画布缩放" />
      <canvas id="common-canvas" />
    </Card>
  );
};
export default CommonUse;