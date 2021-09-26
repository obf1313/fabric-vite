/**
 * @description: 序列化和反序列化
 * @author: cnn
 * @createTime: 2021/9/26 14:36
 **/
import React, { useEffect, useState } from 'react';
import { Card, Divider, Row, Radio, Button, message } from 'antd';
import { fabric } from 'fabric';
import { CodeBox, MyTitle } from '@components/index';

let globalJSON = '';

const Serialize = () => {
  const [fabricCanvas, setFabricCanvas] = useState<any>();
  const [antiFabricCanvas, setAntiFabricCanvas] = useState<any>();
  useEffect(() => {
    initCanvas();
    return () => {
      globalJSON = '';
    };
  }, []);
  useEffect(() => {
    if (fabricCanvas) {
      initRect();
    }
  }, [fabricCanvas]);
  // 初始化 canvas
  const initCanvas = () => {
    const fabricCanvas = new fabric.Canvas('serialize-canvas', {
      width: 800,
      height: 250,
      backgroundColor: '#ddd'
    });
    const antiFabricCanvas = new fabric.Canvas('anti-serialize-canvas', {
      width: 800,
      height: 250,
      backgroundColor: '#ddd'
    });
    setFabricCanvas(fabricCanvas);
    setAntiFabricCanvas(antiFabricCanvas);
  };
  // 矩形
  const initRect = () => {
    const rect = new fabric.Rect({
      fill: 'red',
      left: 20,
      top: 20,
      width: 200,
      height: 100
    });
    fabricCanvas.add(rect);
  };
  // 相应不同的序列化方法
  const onClick = (e: any) => {
    let str = '';
    switch (e.target.value) {
      default:
      case 'toString':
        str = fabricCanvas.toString();
        break;
      case 'toJSON':
        str = fabricCanvas.toJSON();
        globalJSON = str;
        break;
      case 'toObject':
        str = fabricCanvas.toObject();
        break;
    }
    console.log(str);
  };
  // 导入 JSON
  const importJSON = () => {
    if (globalJSON) {
      antiFabricCanvas.loadFromJSON(globalJSON);
    } else {
      message.warn('请在序列化中选择 toJSON 导出 JSON');
    }
  };
  return (
    <Card>
      <MyTitle title="序列化和反序列化" />
      <p>
        fabric 提供了很好的序列化和反序列化方法，可以保存数据为 json、base64 的图片、svg、对象 object、字符串 toString。
      </p>
      <Divider />
      <MyTitle title="序列化" />
      <p>对于所有的 fabric 对象，都有 toString，toJSON，toObject 方法。</p>
      <p>点击不同按钮，我们可以在控制台看到输出，其实 toString 的输出并没有什么作用，一般情况下还是使用 toJSON 比较多。</p>
      <Row style={{ marginBottom: 10 }}>
        <Radio.Group buttonStyle="solid" onChange={onClick}>
          <Radio.Button value="toString">toString</Radio.Button>
          <Radio.Button value="toJSON">toJSON</Radio.Button>
          <Radio.Button value="toObject">toObject</Radio.Button>
        </Radio.Group>
      </Row>
      <canvas id="serialize-canvas" />
      <Divider />
      <MyTitle title="反序列化" />
      <p>
        对于反序列化需要注意的是 loadFromJSON 对应 toJSON、loadFromDatalessJSON 对应 toDatalessJSON。
      </p>
      <p>
        但是由于性能考虑，不是所有属性都可以进行序列化, fabric 只是包装了一些常用的属性,所以如果设置了一些比较少用的属性,在加载 JSON 数据的时候需要重新修改图像的属性。
      </p>
      <CodeBox code="antiFabricCanvas.loadFromJSON(globalJSON);" />
      <Row style={{ marginBottom: 10 }}>
        <Button onClick={importJSON}>导入 JSON</Button>
      </Row>
      <canvas id="anti-serialize-canvas" />
    </Card>
  );
};
export default Serialize;