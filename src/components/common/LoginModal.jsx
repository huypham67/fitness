import React from 'react';
import { Modal, Form, Input, Button, Checkbox, Divider, Space } from 'antd';
import { FacebookOutlined, GoogleOutlined, AppleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LoginLeft = styled.div`
  flex: 2;
  padding-right: 24px;
  
  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const LoginRight = styled.div`
  flex: 1;
  background: linear-gradient(to right, #F15637, #FBA840);
  color: white;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    margin-top: 24px;
    padding: 16px;
  }
`;

const SocialIconButton = styled(Button)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .anticon {
    font-size: 18px;
  }
`;

const LoginModal = ({ visible, onCancel }) => {
  const onFinish = (values) => {
    console.log('Login form submitted:', values);
    // Here you would handle login logic
  };

  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={800}
      bodyStyle={{ padding: '24px' }}
    >
      <LoginContainer>
        <LoginLeft>
          <h1 style={{ fontSize: '28px', marginBottom: '8px' }}>Login</h1>
          <p style={{ marginBottom: '24px', color: '#666' }}>
            Welcome back<br />Please log in to continue
          </p>
          
          <Form
            name="login_form"
            layout="vertical"
            onFinish={onFinish}
          >
            <Form.Item
              label="E-mail"
              name="email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email address' }
              ]}
            >
              <Input placeholder="E-mail" size="large" />
            </Form.Item>
            
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password placeholder="Password" size="large" />
            </Form.Item>
            
            <Form.Item style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Checkbox>Remember Me</Checkbox>
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>
            </Form.Item>
            
            <Form.Item>
              <Button 
                type="primary" 
                htmlType="submit" 
                block
                size="large"
                style={{
                  height: '48px',
                  fontSize: '16px',
                  fontWeight: 500
                }}
              >
                Log In
              </Button>
            </Form.Item>
          </Form>
          
          <Divider>Or Sign In With</Divider>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <SocialIconButton type="default" icon={<FacebookOutlined />} />
            <SocialIconButton type="default" icon={<GoogleOutlined />} />
            <SocialIconButton type="default" icon={<AppleOutlined />} />
          </div>
        </LoginLeft>
        
        <LoginRight>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Welcome Back</h2>
          <p style={{ marginBottom: '24px' }}>
            Create A New Account<br />To Start Your Journey With Us
          </p>
          <Button
            type="default"
            ghost
            size="large"
            style={{ width: '100%', maxWidth: '200px' }}
          >
            <Link to="/register">Register</Link>
          </Button>
        </LoginRight>
      </LoginContainer>
    </Modal>
  );
};

export default LoginModal; 