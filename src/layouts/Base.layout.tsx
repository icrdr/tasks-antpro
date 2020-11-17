import React from 'react';
import { SelectLang } from 'umi';
import { Layout, Affix } from 'antd';
import Footer from '@/components/Footer';
import gStyle from '@/global.less';

const Base: React.FC<{}> = ({ children }) => {
  return (
    <Layout className={gStyle.container}>
      <Affix>{SelectLang && <SelectLang />}</Affix>
      <Layout.Content>{children}</Layout.Content>
      <Footer />
    </Layout>
  );
};

export default Base;
