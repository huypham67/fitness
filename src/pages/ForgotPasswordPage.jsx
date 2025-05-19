import React, { useState } from 'react';
import { Form, Input, Button, Typography, Steps, Result } from 'antd';
import { MailOutlined, LockOutlined, KeyOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Title, Text, Paragraph } = Typography;
const { Step } = Steps;

const ForgotPasswordContainer = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 24px;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const StyledCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 32px;
  margin-top: 24px;
  
  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const ForgotPasswordPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [email, setEmail] = useState('');
  const [resetCompleted, setResetCompleted] = useState(false);

  const handleRequestReset = (values) => {
    console.log('Request reset for:', values);
    setEmail(values.email);
    setCurrentStep(1);
  };

  const handleVerifyCode = (values) => {
    console.log('Verify code:', values);
    setCurrentStep(2);
  };

  const handleResetPassword = (values) => {
    console.log('Reset password:', values);
    setResetCompleted(true);
  };

  return (
    <ForgotPasswordContainer>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 16 }}>
        Forgot Password
      </Title>
      
      <Text type="secondary" style={{ display: 'block', textAlign: 'center', marginBottom: 32 }}>
        Follow these steps to reset your password
      </Text>
      
      <Steps current={currentStep} size="small" style={{ marginBottom: 32 }}>
        <Step title="Email" />
        <Step title="Verify" />
        <Step title="Reset" />
      </Steps>
      
      <StyledCard>
        {!resetCompleted ? (
          <>
            {currentStep === 0 && (
              <Form
                name="request_reset"
                layout="vertical"
                onFinish={handleRequestReset}
                scrollToFirstError
              >
                <Paragraph style={{ marginBottom: 24 }}>
                  Enter your email address below and we'll send you a code to reset your password.
                </Paragraph>
                
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email address' }
                  ]}
                >
                  <Input 
                    prefix={<MailOutlined />} 
                    placeholder="Email" 
                    size="large"
                  />
                </Form.Item>
                
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    block
                  >
                    Send Reset Code
                  </Button>
                </Form.Item>
              </Form>
            )}
            
            {currentStep === 1 && (
              <Form
                name="verify_code"
                layout="vertical"
                onFinish={handleVerifyCode}
                scrollToFirstError
              >
                <Paragraph style={{ marginBottom: 24 }}>
                  We've sent a 6-digit code to <strong>{email}</strong>. 
                  Please enter the code below to continue.
                </Paragraph>
                
                <Form.Item
                  name="verificationCode"
                  rules={[
                    { required: true, message: 'Please enter the verification code' },
                    { len: 6, message: 'Verification code must be 6 digits' }
                  ]}
                >
                  <Input 
                    prefix={<KeyOutlined />} 
                    placeholder="6-digit code" 
                    size="large"
                    maxLength={6}
                  />
                </Form.Item>
                
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    block
                  >
                    Verify Code
                  </Button>
                </Form.Item>
                
                <div style={{ textAlign: 'center', marginTop: 16 }}>
                  <Button type="link" onClick={() => setCurrentStep(0)}>
                    Back to email
                  </Button>
                </div>
              </Form>
            )}
            
            {currentStep === 2 && (
              <Form
                name="reset_password"
                layout="vertical"
                onFinish={handleResetPassword}
                scrollToFirstError
              >
                <Paragraph style={{ marginBottom: 24 }}>
                  Create a new password for your account.
                </Paragraph>
                
                <Form.Item
                  name="newPassword"
                  rules={[
                    { required: true, message: 'Please enter your new password' },
                    { min: 8, message: 'Password must be at least 8 characters' }
                  ]}
                  hasFeedback
                >
                  <Input.Password 
                    prefix={<LockOutlined />} 
                    placeholder="New Password" 
                    size="large"
                  />
                </Form.Item>
                
                <Form.Item
                  name="confirmPassword"
                  dependencies={['newPassword']}
                  hasFeedback
                  rules={[
                    { required: true, message: 'Please confirm your new password' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('newPassword') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('The two passwords do not match'));
                      },
                    }),
                  ]}
                >
                  <Input.Password 
                    prefix={<LockOutlined />} 
                    placeholder="Confirm New Password" 
                    size="large"
                  />
                </Form.Item>
                
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size="large"
                    block
                  >
                    Reset Password
                  </Button>
                </Form.Item>
              </Form>
            )}
          </>
        ) : (
          <Result
            status="success"
            title="Password Reset Successful!"
            subTitle="Your password has been reset successfully."
            extra={[
              <Button type="primary" key="login">
                <Link to="/">Log In</Link>
              </Button>,
            ]}
          />
        )}
      </StyledCard>
      
      <div style={{ textAlign: 'center', marginTop: 24 }}>
        <Text type="secondary">
          Remember your password? <Link to="/">Log in here</Link>
        </Text>
      </div>
    </ForgotPasswordContainer>
  );
};

export default ForgotPasswordPage; 