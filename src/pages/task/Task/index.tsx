import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography } from 'antd';
import { useRequest } from 'umi';
import { queryRule } from '../../other/ListTableList/service';

function getUsername(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('ddd');
    }, 1000);
  });
}

const YourComponent: React.FC = () => {
  const { data, error, loading } = useRequest(getUsername, { formatResult: (data) => data });
  console.log(data);
  if (error) return <div>failed to load</div>;
  if (loading) return <div>loading...</div>;
  return <div>Username: {data}</div>;
};

export default (): React.ReactNode => (
  <PageContainer>
    <Card>
      <YourComponent />
    </Card>
  </PageContainer>
);
