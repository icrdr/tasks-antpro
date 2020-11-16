import { LockTwoTone, UserOutlined, WechatOutlined } from '@ant-design/icons';
import { Alert, Space, message, Typography } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { useIntl, history, FormattedMessage, SelectLang } from 'umi';
import Footer from '@/components/Footer';
import * as service from '@/pages/user/services/login.service';
import styles from './Login.less';
const { Title, Text } = Typography;

interface LoginMessageProps {
  content: string;
}

const LoginMessage: React.FC<LoginMessageProps> = (props) => (
  <Alert style={{ marginBottom: 24 }} message={props.content} type="error" showIcon />
);

const LoginForm: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [userLoginState, setUserLoginState] = useState<API.LoginStateType>({});
  const intl = useIntl();
  const { status, type: loginType } = userLoginState;

  const handleSubmit = async (values: User.LoginParamsType) => {
    setSubmitting(true);
    try {
      // 登录
      const msg = await service.login({ ...values });
      if (msg.status === 'ok') {
        message.success('登录成功！');
        const { query } = history.location;
        const { redirect } = query as { redirect: string };
        window.location.href = redirect || '/';
        return;
      }
      // 如果失败去设置用户错误信息
      setUserLoginState(msg);
    } catch (error) {
      message.error('登录失败，请重试！');
    }
    setSubmitting(false);
  };

  return (
    <ProForm
      initialValues={{ autoLogin: true }}
      submitter={{
        searchConfig: {
          submitText: intl.formatMessage({
            id: 'pages.login.submit',
            defaultMessage: '登录',
          }),
        },
        render: (_, dom) => dom.pop(),
        submitButtonProps: {
          loading: submitting,
          size: 'large',
          style: {
            width: '100%',
          },
        },
      }}
      onFinish={async (values) => {
        handleSubmit(values);
      }}
    >
      {status === 'error' && loginType === 'account' && (
        <LoginMessage
          content={intl.formatMessage({
            id: 'pages.login.accountLogin.errorMessage',
            defaultMessage: '账户或密码错误（admin/ant.design)',
          })}
        />
      )}
      <ProFormText
        name="username"
        fieldProps={{
          size: 'large',
          prefix: <UserOutlined className={styles.prefixIcon} />,
        }}
        placeholder={intl.formatMessage({
          id: 'pages.login.username.placeholder',
          defaultMessage: '用户名: admin or user',
        })}
        rules={[
          {
            required: true,
            message: (
              <FormattedMessage id="pages.login.username.required" defaultMessage="请输入用户名!" />
            ),
          },
        ]}
      />
      <ProFormText.Password
        name="password"
        fieldProps={{
          size: 'large',
          prefix: <LockTwoTone className={styles.prefixIcon} />,
        }}
        placeholder={intl.formatMessage({
          id: 'pages.login.password.placeholder',
          defaultMessage: '密码: ant.design',
        })}
        rules={[
          {
            required: true,
            message: (
              <FormattedMessage id="pages.login.password.required" defaultMessage="请输入密码！" />
            ),
          },
        ]}
      />
      <div style={{ marginBottom: 24 }}>
        <ProFormCheckbox noStyle name="autoLogin">
          <FormattedMessage id="pages.login.rememberMe" defaultMessage="自动登录" />
        </ProFormCheckbox>
        <a style={{ float: 'right' }}>
          <FormattedMessage id="pages.login.forgotPassword" defaultMessage="忘记密码" />
        </a>
      </div>
    </ProForm>
  );
};

const Login: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.lang}>{SelectLang && <SelectLang />}</div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Title>YIMU</Title>
            <Text> 一目任务管理系统 </Text>
          </div>
        </div>
        <div className={styles.main}>
          <LoginForm />
          <Space className={styles.other}>
            <FormattedMessage id="pages.login.loginWith" defaultMessage="其他登录方式" />
            <WechatOutlined className={styles.icon} />
          </Space>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
