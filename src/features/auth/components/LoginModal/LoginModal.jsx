import React from 'react';
import { Modal, Form, Input, Button, Checkbox } from 'antd';
import { ArrowLeftOutlined, MailOutlined, LockOutlined, FacebookFilled, GoogleOutlined, AppleFilled } from '@ant-design/icons';
import styled from 'styled-components';

const StyledModal = styled(Modal)`
  .ant-modal-content {
    border-radius: 18px;
    padding: 0;
    overflow: hidden;
    max-width: 720px;
  }
  .ant-modal-body {
    padding: 0;
  }
`;

const LoginPopup = styled.div`
  display: flex;
  min-height: 420px;
  @media (max-width: 700px) {
    flex-direction: column;
    min-height: unset;
  }
`;

const Left = styled.div`
  flex: 1.2;
  background: #fff;
  padding: 2.2rem 2rem 2rem 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  @media (max-width: 700px) {
    padding: 1.5rem 1rem 1rem 1rem;
  }
`;

const Right = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #f15637 0%, #FBA840 100%);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1.2rem;
  text-align: center;
  @media (max-width: 700px) {
    min-height: 180px;
    padding: 1.2rem 0.5rem;
  }
`;

const CloseBtn = styled(Button)`
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  border: none;
  background: transparent;
  font-size: 1.3rem;
  color: #f15637;
  z-index: 2;
  &:hover {
    color: #d13c1a;
    background: #f7e6e0;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
  color: #f15637;
`;

const SubTitle = styled.p`
  color: #888;
  margin-bottom: 1.5rem;
`;

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 1rem;
  }
  .ant-input-affix-wrapper, .ant-input, .ant-input-password {
    border-radius: 10px;
    min-height: 44px;
    font-size: 1rem;
    background: #fafbfc;
    border: 1px solid #e6e8ec;
  }
  .ant-input-affix-wrapper .ant-input-prefix {
    color: #f15637;
    margin-right: 8px;
  }
  .ant-btn-primary {
    width: 100%;
    height: 44px;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 10px;
    background: linear-gradient(to right, #f15637, #FBA840);
    border: none;
    margin-top: 0.2rem;
  }
`;

const FormFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.1rem;
  font-size: 0.97rem;
  .forgot {
    color: #f15637;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }
`;

const SocialLogin = styled.div`
  text-align: center;
  margin-top: 1.2rem;
  p {
    color: #888;
    margin-bottom: 0.7rem;
  }
  .social-icons {
    display: flex;
    justify-content: center;
    gap: 1.1rem;
    margin-top: 0.2rem;
  }
  .social-icon {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    color: #555;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
    &:hover {
      background: #f15637;
      color: #fff;
    }
  }
`;

const WelcomeTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;
const WelcomeDesc = styled.p`
  font-size: 1.05rem;
  margin-bottom: 1.2rem;
`;
const RegisterBtn = styled(Button)`
  background: #fff;
  color: #f15637;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.1rem;
  border: none;
  margin-top: 0.5rem;
  width: 120px;
  &:hover {
    background: #f7e6e0;
    color: #d13c1a;
  }
`;

const LoginModal = ({ open, onClose, onRegister }) => {
  const [form] = Form.useForm();
  const handleFinish = (values) => {
    // Xử lý đăng nhập ở đây
    onClose();
  };
  return (
    <StyledModal open={open} footer={null} closable={false} width={720}>
      <LoginPopup>
        <Left>
          <CloseBtn icon={<ArrowLeftOutlined />} onClick={onClose} />
          <Title>Login</Title>
          <SubTitle>Welcome back<br />Please log in to continue</SubTitle>
          <StyledForm form={form} layout="vertical" onFinish={handleFinish}>
            <Form.Item label="E-mail" name="email" rules={[{ required: true, message: 'Please enter your email' }, { type: 'email', message: 'Invalid email' }]}> 
              <Input placeholder="E-mail" prefix={<MailOutlined />} size="large" />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please enter your password' }]}> 
              <Input.Password placeholder="Password" prefix={<LockOutlined />} size="large" />
            </Form.Item>
            <FormFooter>
              <Checkbox>Remember Me</Checkbox>
              <a href="/forgotPassword" className="forgot">Forgot Password?</a>
            </FormFooter>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>Log In</Button>
            </Form.Item>
          </StyledForm>
          <SocialLogin>
            <p>Or Sign In With</p>
            <div className="social-icons">
              <div className="social-icon"><FacebookFilled style={{ color: '#1877f3' }} /></div>
              <div className="social-icon"><GoogleOutlined style={{ color: '#ea4335' }} /></div>
              <div className="social-icon"><AppleFilled style={{ color: '#111' }} /></div>
            </div>
          </SocialLogin>
        </Left>
        <Right>
          <WelcomeTitle>Welcome Back</WelcomeTitle>
          <WelcomeDesc>Create A New Account<br />To Start Your Journey With Us</WelcomeDesc>
          <RegisterBtn onClick={onRegister}>Register</RegisterBtn>
        </Right>
      </LoginPopup>
    </StyledModal>
  );
};

export default LoginModal; 