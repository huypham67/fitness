import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';
import { Link } from 'react-router-dom';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  max-width: 1920px;
  margin: 0 auto;
  background: linear-gradient(135deg, #f15637 0%, #FBA840 100%);
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  background-image: url('/images/registerImg.png');
  background-size: cover;
  background-position: left center;
  position: relative;
  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: rgba(255,255,255,0.95);
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormCard = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 0.8rem 2.2rem 0.8rem 2.2rem;
  width: 100%;
  max-width: 460px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.07);
  @media (max-width: 600px) {
    padding: 0.7rem 0.5rem 0.7rem 0.5rem;
    max-width: 98vw;
  }
`;

const FormTitle = styled.h1`
  color: #f15637;
  text-align: center;
  margin-bottom: 0.2rem;
  font-size: 1.6rem;
  font-weight: 700;
`;

const FormSubtitle = styled.p`
  color: #555;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.05rem;
`;

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 0.9rem;
  }
  .ant-input-affix-wrapper, .ant-input, .ant-input-password {
    border-radius: 10px;
    min-height: 48px;
    font-size: 1rem;
    background: #fafbfc;
    border: 1px solid #e6e8ec;
    transition: border 0.2s;
  }
  .ant-input-affix-wrapper-focused, .ant-input:focus, .ant-input-password:focus {
    border-color: #f15637;
    box-shadow: 0 0 0 2px rgba(241,86,55,0.08);
  }
  .ant-input-affix-wrapper .ant-input-prefix {
    color: #f15637;
    margin-right: 8px;
  }
  .ant-form-item-label > label {
    font-weight: 500;
    color: #333;
  }
  .ant-form-item-explain-error {
    font-size: 0.95em;
    margin-top: 2px;
  }
  .ant-checkbox-inner {
    border-radius: 4px;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #f15637;
    border-color: #f15637;
  }
  .ant-btn-primary {
    width: 100%;
    height: 48px;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 10px;
    background: linear-gradient(to right, #f15637, #FBA840);
    border: none;
    box-shadow: 0 2px 8px rgba(241,86,55,0.08);
    transition: background 0.2s, opacity 0.2s;
    &:hover {
      opacity: 0.92;
      background: linear-gradient(to right, #FBA840, #f15637);
    }
  }
`;

const LoginLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.97rem;
  color: #555;
  a {
    color: #f15637;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const TermsLink = styled.a`
  color: #3772ff;
  &:hover {
    text-decoration: underline;
  }
`;

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      message.success('Registration successful!');
    }, 1200);
  };

  return (
    <Container>
      <ImageSection />
      <FormSection>
        <FormCard>
          <FormTitle>Create An Account</FormTitle>
          <FormSubtitle>Join us today! It takes only a few steps.</FormSubtitle>
          <StyledForm
            name="register_form"
            layout="vertical"
            onFinish={onFinish}
            scrollToFirstError
            requiredMark={false}
            autoComplete="off"
          >
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[
                { required: true, message: 'Please enter your full name' },
                { min: 2, message: 'Name must be at least 2 characters' }
              ]}
            >
              <Input
                placeholder="Full Name"
                size="large"
                prefix={<UserOutlined />}
              />
            </Form.Item>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email address' }
              ]}
            >
              <Input
                placeholder="Email Address"
                size="large"
                prefix={<MailOutlined />}
              />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please enter a password' },
                { min: 8, message: 'Password must be at least 8 characters' },
                {
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                  message: 'Password must contain at least one uppercase letter, one lowercase letter, and one number'
                }
              ]}
            >
              <Input.Password
                placeholder="Password"
                size="large"
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords do not match'));
                  },
                }),
              ]}
            >
              <Input.Password
                placeholder="Confirm Password"
                size="large"
                prefix={<LockOutlined />}
              />
            </Form.Item>
            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value ? Promise.resolve() : Promise.reject(new Error('You must accept the terms and conditions')),
                },
              ]}
            >
              <Checkbox>
                I agree to the <TermsLink href="#">Terms & Conditions</TermsLink>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" loading={loading}>
                Sign Up
              </Button>
            </Form.Item>
          </StyledForm>
          <LoginLink>
            Already have an account? <Link to="/">Back to landing page</Link>
          </LoginLink>
        </FormCard>
      </FormSection>
    </Container>
  );
};

export default RegisterPage; 