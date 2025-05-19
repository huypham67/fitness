import React, { useState } from 'react';
import { Typography, Tabs, Form, Input, Button, Upload, Avatar, Row, Col, Card, Select, DatePicker, Divider } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, UploadOutlined, CreditCardOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import moment from 'moment';

const { Title, Text } = Typography;
const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;

const ProfileContainer = styled.div`
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 24px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const ProfileCard = styled(Card)`
  margin-bottom: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const UserInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;
  
  @media (max-width: 768px) {
    padding: 16px 0;
  }
`;

const AvatarUploader = styled.div`
  margin-bottom: 16px;
  text-align: center;
`;

const StyledTabs = styled(Tabs)`
  .ant-tabs-nav {
    margin-bottom: 24px;
  }
`;

const InformationCustomerPage = () => {
  const [form] = Form.useForm();
  const [passwordForm] = Form.useForm();
  const [paymentForm] = Form.useForm();
  const [activeTab, setActiveTab] = useState('1');

  // Mock user data
  const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+84 123 456 789',
    address: '123 Street, District 1, HCMC',
    dob: '1990-01-01',
    gender: 'male',
    bio: 'Fitness enthusiast, love running and weightlifting.',
  };

  const onFinish = (values) => {
    console.log('Profile updated:', values);
    // Here you would handle profile update
  };

  const onPasswordChange = (values) => {
    console.log('Password updated:', values);
    // Here you would handle password update
    passwordForm.resetFields();
  };

  const onPaymentUpdate = (values) => {
    console.log('Payment info updated:', values);
    // Here you would handle payment info update
  };

  return (
    <ProfileContainer>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>
        My Profile
      </Title>
      
      <ProfileCard>
        <UserInfoSection>
          <AvatarUploader>
            <Avatar size={100} icon={<UserOutlined />} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            <div style={{ marginTop: 16 }}>
              <Upload showUploadList={false}>
                <Button icon={<UploadOutlined />}>Change Photo</Button>
              </Upload>
            </div>
          </AvatarUploader>
          <Title level={4}>{userData.name}</Title>
          <Text type="secondary">{userData.email}</Text>
        </UserInfoSection>
        
        <Divider style={{ margin: '0 0 24px' }} />
        
        <StyledTabs activeKey={activeTab} onChange={setActiveTab}>
          <TabPane tab="Personal Information" key="1">
            <Form
              form={form}
              layout="vertical"
              initialValues={{
                name: userData.name,
                email: userData.email,
                phone: userData.phone,
                address: userData.address,
                dob: moment(userData.dob),
                gender: userData.gender,
                bio: userData.bio,
              }}
              onFinish={onFinish}
            >
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="name"
                    label="Full Name"
                    rules={[{ required: true, message: 'Please enter your name' }]}
                  >
                    <Input prefix={<UserOutlined />} placeholder="Full Name" />
                  </Form.Item>
                </Col>
                
                <Col xs={24} md={12}>
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' }
                    ]}
                  >
                    <Input prefix={<MailOutlined />} placeholder="Email" />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="phone"
                    label="Phone Number"
                    rules={[{ required: true, message: 'Please enter your phone number' }]}
                  >
                    <Input prefix={<PhoneOutlined />} placeholder="Phone Number" />
                  </Form.Item>
                </Col>
                
                <Col xs={24} md={12}>
                  <Form.Item
                    name="dob"
                    label="Date of Birth"
                  >
                    <DatePicker style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
              </Row>
              
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="gender"
                    label="Gender"
                  >
                    <Select placeholder="Select gender">
                      <Option value="male">Male</Option>
                      <Option value="female">Female</Option>
                      <Option value="other">Other</Option>
                    </Select>
                  </Form.Item>
                </Col>
                
                <Col xs={24} md={12}>
                  <Form.Item
                    name="address"
                    label="Address"
                  >
                    <Input placeholder="Address" />
                  </Form.Item>
                </Col>
              </Row>
              
              <Form.Item
                name="bio"
                label="Bio"
              >
                <TextArea rows={4} placeholder="Tell us about yourself" />
              </Form.Item>
              
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Update Profile
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          
          <TabPane tab="Change Password" key="2">
            <Form
              form={passwordForm}
              layout="vertical"
              onFinish={onPasswordChange}
            >
              <Form.Item
                name="currentPassword"
                label="Current Password"
                rules={[{ required: true, message: 'Please enter your current password' }]}
              >
                <Input.Password prefix={<LockOutlined />} placeholder="Current Password" />
              </Form.Item>
              
              <Form.Item
                name="newPassword"
                label="New Password"
                rules={[
                  { required: true, message: 'Please enter your new password' },
                  { min: 8, message: 'Password must be at least 8 characters' }
                ]}
                hasFeedback
              >
                <Input.Password prefix={<LockOutlined />} placeholder="New Password" />
              </Form.Item>
              
              <Form.Item
                name="confirmPassword"
                label="Confirm New Password"
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
                <Input.Password prefix={<LockOutlined />} placeholder="Confirm New Password" />
              </Form.Item>
              
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Change Password
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          
          <TabPane tab="Payment Information" key="3">
            <Form
              form={paymentForm}
              layout="vertical"
              onFinish={onPaymentUpdate}
            >
              <Form.Item
                name="cardType"
                label="Card Type"
                rules={[{ required: true, message: 'Please select card type' }]}
              >
                <Select placeholder="Select card type">
                  <Option value="visa">Visa</Option>
                  <Option value="mastercard">MasterCard</Option>
                  <Option value="amex">American Express</Option>
                </Select>
              </Form.Item>
              
              <Form.Item
                name="cardNumber"
                label="Card Number"
                rules={[{ required: true, message: 'Please enter card number' }]}
              >
                <Input prefix={<CreditCardOutlined />} placeholder="Card Number" />
              </Form.Item>
              
              <Row gutter={24}>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="expirationDate"
                    label="Expiration Date"
                    rules={[{ required: true, message: 'Please enter expiration date' }]}
                  >
                    <DatePicker picker="month" style={{ width: '100%' }} />
                  </Form.Item>
                </Col>
                
                <Col xs={24} md={12}>
                  <Form.Item
                    name="cvv"
                    label="CVV"
                    rules={[{ required: true, message: 'Please enter CVV' }]}
                  >
                    <Input placeholder="CVV" maxLength={4} />
                  </Form.Item>
                </Col>
              </Row>
              
              <Form.Item
                name="nameOnCard"
                label="Name on Card"
                rules={[{ required: true, message: 'Please enter name on card' }]}
              >
                <Input placeholder="Name on Card" />
              </Form.Item>
              
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Update Payment Information
                </Button>
              </Form.Item>
            </Form>
          </TabPane>
          
          <TabPane tab="Membership" key="4">
            <ProfileCard>
              <Title level={4}>Current Membership</Title>
              <div style={{ marginBottom: 16 }}>
                <Text strong>Plan: </Text>
                <Text>Premium Quarterly</Text>
              </div>
              <div style={{ marginBottom: 16 }}>
                <Text strong>Start Date: </Text>
                <Text>January 15, 2023</Text>
              </div>
              <div style={{ marginBottom: 16 }}>
                <Text strong>Expiry Date: </Text>
                <Text>April 15, 2023</Text>
              </div>
              <div style={{ marginBottom: 16 }}>
                <Text strong>Status: </Text>
                <Text style={{ color: '#52c41a' }}>Active</Text>
              </div>
              
              <Button type="primary" style={{ marginTop: 16 }}>
                Upgrade Membership
              </Button>
            </ProfileCard>
            
            <ProfileCard title="Membership History">
              <div style={{ marginBottom: 16 }}>
                <Text strong>Oct 15, 2022 - Jan 15, 2023: </Text>
                <Text>Premium Quarterly</Text>
              </div>
              <div style={{ marginBottom: 16 }}>
                <Text strong>Jul 15, 2022 - Oct 15, 2022: </Text>
                <Text>Premium Quarterly</Text>
              </div>
              <div style={{ marginBottom: 16 }}>
                <Text strong>Jun 15, 2022 - Jul 15, 2022: </Text>
                <Text>Basic Monthly</Text>
              </div>
            </ProfileCard>
          </TabPane>
        </StyledTabs>
      </ProfileCard>
    </ProfileContainer>
  );
};

export default InformationCustomerPage; 