import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useRequest } from 'umi';


const FFFF: React.FC = () => {
  return <div>2</div>;
};

const Task: React.FC<{}> = () => {
  return (
    <PageContainer>
      <Card>
        <FFFF />
      </Card>
    </PageContainer>
  );
};

export default Task;
