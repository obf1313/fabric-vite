/**
 * @description: 常用方法
 * @author: cnn
 * @createTime: 2021/9/26 15:24
 **/
import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { MyTitle } from '@components/index';
import { fabric } from 'fabric';

let canPanning: boolean = false;

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
    // 鼠标按下
    fabricCanvas.on('mouse:down', (e: any) => {
      // 按住alt键才可拖动画布
      if (e.e.altKey) {
        canPanning = true;
      }
    });
    // 缩放
    fabricCanvas.on('mouse:wheel', (event: any) => {
      let zoom = (event.e.deltaY > 0 ? -0.1 : 0.1) + fabricCanvas.getZoom();
      zoom = Math.max(0.5, zoom); // 最小为原来的 1/2
      zoom = Math.min(2, zoom); // 最大是原来的 2 倍
      const zoomPoint = new fabric.Point(event.pointer.x,event.pointer.y);
      fabricCanvas.zoomToPoint(zoomPoint, zoom);
    });
    // 鼠标抬起
    fabricCanvas.on('mouse:up', (e: any) => {
      canPanning = false;
    });
    // 鼠标移动
    fabricCanvas.on('mouse:move', (e: any) => {
      if (canPanning && e && e.e) {
        const delta = new fabric.Point(e.e.movementX, e.e.movementY);
        fabricCanvas.relativePan(delta);
      }
    });
  };
  return (
    <Card>
      <MyTitle title="画布缩放位移" />
      <p>滑动鼠标滚轮可缩放，按住 alt 键拖动画布可平移。</p>
      <canvas id="common-canvas" />
    </Card>
  );
};
export default CommonUse;