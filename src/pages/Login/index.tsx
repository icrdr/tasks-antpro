import React from 'react';
import { useIntl, history, FormattedMessage, SelectLang, useRequest } from 'umi';
import { Alert, Space, message, Typography, Col, Layout, Affix, Divider } from 'antd';
import { LockTwoTone, UserOutlined, WechatOutlined } from '@ant-design/icons';
import ProForm, { ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { login, loginParams } from './login.service';
import gStyle from '@/global.less';

const { Title } = Typography;

const LoginForm: React.FC = () => {
  const { loading, run } = useRequest(login, {
    manual: true,
    onSuccess: (res) => {
      message.success(successMsg);
      history.push('/');
    },
    formatResult: (res) => res,
  });

  const intl = useIntl();

  const successMsg = intl.formatMessage({
    id: 'pages.login.success.msg',
  });

  const submitBtn = intl.formatMessage({
    id: 'pages.login.submit.btn',
  });

  const errorMsg = intl.formatMessage({
    id: 'pages.login.error.msg',
  });

  const usernamePhd = intl.formatMessage({
    id: 'pages.login.username.phd',
  });

  const PasswordPhd = intl.formatMessage({
    id: 'pages.login.password.phd',
  });

  const rememberMeTex = intl.formatMessage({
    id: 'pages.login.rememberMe.tex',
  });

  const passwordRule = [
    {
      required: true,
      message: intl.formatMessage({
        id: 'pages.login.username.required',
      }),
    },
  ];

  const usernameRule = [
    {
      required: true,
      message: intl.formatMessage({
        id: 'pages.login.password.required',
      }),
    },
  ];

  return (
    <ProForm
      initialValues={{ autoLogin: true }}
      submitter={{
        searchConfig: { submitText: submitBtn },
        render: (_, doms) => doms.pop(), // remove 'cancel' botton
        submitButtonProps: {
          loading: loading,
          size: 'large',
          style: { width: '100%' },
        },
      }}
      onFinish={(values: loginParams) => run(values)}
    >
      {/* <Alert className="m-b:2" message={errorMsg} type="error" showIcon /> */}
      {/* {status === 'error' && <LoginMessage content={errorMsg} />} */}
      <ProFormText
        name="username"
        fieldProps={{
          size: 'large',
          prefix: <UserOutlined className={gStyle.prefixIcon} />,
        }}
        placeholder={usernamePhd}
        rules={usernameRule}
      />
      <ProFormText.Password
        name="password"
        fieldProps={{
          size: 'large',
          prefix: <LockTwoTone className={gStyle.prefixIcon} />,
        }}
        placeholder={PasswordPhd}
        rules={passwordRule}
      />
      <ProFormCheckbox noStyle name="autoLogin">
        {rememberMeTex}
      </ProFormCheckbox>
      <Divider />
      {/* <a style={{ float: 'right' }}>
          <FormattedMessage id="pages.login.forgotPassword"/>
        </a> */}
    </ProForm>
  );
};

const Login: React.FC<{}> = () => {
  return (
    <Col span={8} offset={8}>
      <Space direction="vertical" style={{ width: '100%' }}>
        <Title> YIMU </Title>
        <LoginForm />
        <Space>
          <FormattedMessage id="pages.login.loginWith.tex" />
          <WechatOutlined className={gStyle.icon} />
        </Space>
      </Space>
    </Col>
  );
};

export default Login;
