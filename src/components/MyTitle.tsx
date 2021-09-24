/**
 * @description: 标题
 * @author: cnn
 * @createTime: 2020/7/21 9:30
 **/
import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

interface MyTitleProps {
  title: string
}

const MyTitle = (props: MyTitleProps) => {
  const { title } = props;
  return (
    <Title level={3}>
      {title}
    </Title>
  );
};
export default MyTitle;
