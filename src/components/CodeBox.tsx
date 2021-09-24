/**
 * @description: 代码容器
 * @author: cnn
 * @createTime: 2020/7/21 15:49
 **/
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';

interface IProps {
  code: string,
  width?: number
}

const CodeBox = (props: IProps) => {
  const { code, width } = props;
  return (
    <SyntaxHighlighter
      language="javascript"
      style={{ ...github }}
      customStyle={{ width: width || '100%', padding: 20, marginBottom: 10 }}
      showLineNumbers
    >
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBox;
