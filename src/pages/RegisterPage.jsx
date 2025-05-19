import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Title, Text } = Typography;

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  max-width: 1920px;
  margin: 0 auto;
  
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
  
  /* Fallback background in case image doesn't load */
  background-color: #f15637;
  
  @media (max-width: 768px) {
    height: 30vh;
  }
`;

const FormSection = styled.div`
  flex: 1;
  background: linear-gradient(135deg, #f15637 0%, #FBA840 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormCard = styled.div`
  background: white;
  border-radius: 24px;
  padding: 2.5rem;
  width: 100%;
  max-width: 450px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormTitle = styled(Title)`
  color: #f15637 !important;
  text-align: center;
  margin-bottom: 0.5rem !important;
`;

const FormSubtitle = styled(Text)`
  color: #555;
  text-align: center;
  display: block;
  margin-bottom: 2rem;
`;

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 1rem;
  }
  
  .ant-input, .ant-input-password {
    width: 100%;
    padding: 0.875rem 1rem;
    border: 1px solid #e6e8ec;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:focus, &:hover {
      border-color: #0d72c1;
      box-shadow: 0 0 0 2px rgba(13, 114, 193, 0.1);
    }
  }
  
  .ant-input-affix-wrapper {
    padding: 0;
    border: 1px solid #e6e8ec;
    border-radius: 8px;
    
    .ant-input {
      border: none;
    }
    
    &:focus, &:hover {
      border-color: #0d72c1;
    }
  }
  
  .ant-checkbox-wrapper {
    margin: 1.5rem 0;
    
    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: #f15637;
      border-color: #f15637;
    }
  }
  
  .ant-btn-primary {
    height: auto;
    padding: 0.875rem;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 8px;
    background: linear-gradient(to right, #f15637, #FBA840);
    border: none;
    
    &:hover {
      opacity: 0.9;
    }
  }
`;

const LoginLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #555;
  
  a {
    color: #f15637;
    text-decoration: none;
    
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
  const onFinish = (values) => {
    console.log('Registration form submitted:', values);
    // Here you would handle registration logic
  };

  return (
    <Container>
      {/* Left side - Gym image */}
      <ImageSection />
      
      {/* Right side - Registration form */}
      <FormSection>
        <FormCard>
          <FormTitle level={2}>Create An Account</FormTitle>
          <FormSubtitle>Join us today! It takes only a few steps.</FormSubtitle>
          
          <StyledForm
            name="register_form"
            layout="vertical"
            onFinish={onFinish}
            scrollToFirstError
            requiredMark={false}
            validateTrigger={['onBlur', 'onChange']}
          >
            <Form.Item
              name="fullName"
              rules={[{ required: true, message: 'Please enter your full name' }]}
              hasFeedback
            >
              <Input placeholder="Full Name" />
            </Form.Item>
            
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email address' }
              ]}
              hasFeedback
            >
              <Input placeholder="Email Address" />
            </Form.Item>
            
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please enter a password' },
                { min: 8, message: 'Password must be at least 8 characters' }
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            
            <Form.Item
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
              hasFeedback
            >
              <Input.Password placeholder="Confirm Password" />
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
              <Button type="primary" htmlType="submit" block>
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