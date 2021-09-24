/**
 * @description: 参考链接
 * @author: cnn
 * @createTime: 2021/9/24 13:48
 **/
import React from 'react'
import { Button, Typography } from 'antd';

const { Title } = Typography;

interface ILink {
  name: string,
  url: string
}

interface IProps {
  linkList: Array<ILink>
}

const LinkNote = (props: IProps) => {
  const { linkList } = props;
  const openWindow = (url: string) => {
    window.open(url);
  };
  return (
    <>
      <Title level={3}>备注</Title>
      <p>
        更多属性和方法请参考：
      </p>
      {linkList.map((item: ILink) => (
        <p key={item.name}>
          <a onClick={() => openWindow(item.url)}>{item.name}</a>
        </p>
      ))}
    </>
  );
};
export default LinkNote;