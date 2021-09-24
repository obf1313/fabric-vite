/**
 * @description: 标题
 * @author: cnn
 * @createTime: 2020/7/21 9:30
 **/
import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

interface MyTitleProps {
  title: string,
  level?: 1 | 2 | 3 | 4 | 5
}

const MyTitle = (props: MyTitleProps) => {
  const { title, level } = props;
  return (
    <Title level={level || 3}>
      {title}
    </Title>
  );
};
export default MyTitle;
