import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Divider, Typography } from 'antd';
import { UserOutlined, LockOutlined, GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Modal from './Modal';
import styled from 'styled-components';

const { Text } = Typography;

const SocialButton = styled(Button)`
  width: 100%;
  margin-bottom: 16px;
  height: 40px;
  
  &.google {
    background-color: #fff;
    color: #757575;
    border-color: #ddd;
    
    &:hover {
      background-color: #f1f1f1;
      border-color: #ccc;
    }
  }
  
  &.facebook {
    background-color: #3b5998;
    color: #fff;
    border: none;
    
    &:hover {
      background-color: #304d8a;
    }
  }
`;

const LoginModal = ({ visible, onCancel }) => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Login form values:', values);
    // Handle login logic
  };

  return (
    <Modal
      title="Login to Your Account"
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={400}
    >
      <SocialButton 
        icon={<GoogleOutlined />}
        className="google"
      >
        Continue with Google
      </SocialButton>
      
      <SocialButton 
        icon={<FacebookOutlined />}
        className="facebook"
      >
        Continue with Facebook
      </SocialButton>
      
      <Divider>or</Divider>
      
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please enter your email' },
            { type: 'email', message: 'Please enter a valid email' }
          ]}
        >
          <Input 
            prefix={<UserOutlined />} 
            placeholder="Email" 
            size="large"
          />
        </Form.Item>
        
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password 
            prefix={<LockOutlined />} 
            placeholder="Password" 
            size="large"
          />
        </Form.Item>
        
        <Form.Item>
          <Link to="/forgot-password" style={{ float: 'right' }}>
            Forgot password?
          </Link>
        </Form.Item>
        
        <Form.Item>
          <Button 
            type="primary" 
            htmlType="submit" 
            block 
            size="large"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
      
      <div style={{ textAlign: 'center' }}>
        <Text>Don't have an account? </Text>
        <Link to="/register" onClick={onCancel}>Register now</Link>
      </div>
    </Modal>
  );
};

LoginModal.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
};

export default LoginModal; 