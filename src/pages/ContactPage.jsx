import React from 'react';
import { Form, Input, Button, Typography, Row, Col, Card } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, UserOutlined, MessageOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Text, Paragraph } = Typography;
const { TextArea } = Input;

const PageHeader = styled.div`
  background: linear-gradient(to right, rgba(241, 86, 55, 0.85), rgba(251, 168, 64, 0.85));
  padding: 60px 0;
  color: white;
  text-align: center;
  margin-bottom: 40px;
`;

const ContactContainer = styled.div`
  padding: 0 24px 60px;
  
  @media (max-width: 768px) {
    padding: 0 16px 40px;
  }
`;

const ContactCard = styled(Card)`
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .ant-card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 32px 24px;
  }
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  background: linear-gradient(to right, #F15637, #FBA840);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: white;
  font-size: 24px;
`;

const ContactPage = () => {
  const onFinish = (values) => {
    console.log('Contact form submitted:', values);
    // Here you would handle form submission
  };

  return (
    <>
      <PageHeader>
        <div className="container">
          <Title level={1} style={{ color: 'white', marginBottom: 16 }}>
            Contact Us
          </Title>
          <Text style={{ color: 'white', fontSize: 18 }}>
            Get in touch with our team for any questions or inquiries
          </Text>
        </div>
      </PageHeader>
      
      <ContactContainer className="container">
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} md={8}>
            <ContactCard>
              <IconWrapper>
                <PhoneOutlined />
              </IconWrapper>
              <Title level={4}>Phone</Title>
              <Paragraph>For any immediate assistance</Paragraph>
              <Text strong>+84 123 456 789</Text>
            </ContactCard>
          </Col>
          
          <Col xs={24} md={8}>
            <ContactCard>
              <IconWrapper>
                <MailOutlined />
              </IconWrapper>
              <Title level={4}>Email</Title>
              <Paragraph>For inquiries and support</Paragraph>
              <Text strong>info@mixifitness.com</Text>
            </ContactCard>
          </Col>
          
          <Col xs={24} md={8}>
            <ContactCard>
              <IconWrapper>
                <EnvironmentOutlined />
              </IconWrapper>
              <Title level={4}>Location</Title>
              <Paragraph>Our main office address</Paragraph>
              <Text strong>123 Fitness Street, District 1, HCMC</Text>
            </ContactCard>
          </Col>
        </Row>
        
        <div style={{ maxWidth: 800, margin: '60px auto 0' }}>
          <Title level={2} style={{ textAlign: 'center', marginBottom: 48 }}>
            Send Us a Message
          </Title>
          
          <Form
            name="contact_form"
            layout="vertical"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Row gutter={16}>
              <Col xs={24} md={12}>
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: 'Please enter your name' }]}
                >
                  <Input 
                    prefix={<UserOutlined />} 
                    placeholder="Your Name" 
                    size="large" 
                  />
                </Form.Item>
              </Col>
              
              <Col xs={24} md={12}>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email' }
                  ]}
                >
                  <Input 
                    prefix={<MailOutlined />} 
                    placeholder="Your Email" 
                    size="large" 
                  />
                </Form.Item>
              </Col>
            </Row>
            
            <Form.Item
              name="subject"
              rules={[{ required: true, message: 'Please enter a subject' }]}
            >
              <Input 
                placeholder="Subject" 
                size="large" 
              />
            </Form.Item>
            
            <Form.Item
              name="message"
              rules={[{ required: true, message: 'Please enter your message' }]}
            >
              <TextArea 
                prefix={<MessageOutlined />}
                placeholder="Your Message" 
                rows={6}
              />
            </Form.Item>
            
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={{ height: 48, minWidth: 120 }}
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </ContactContainer>
      
      {/* Map section could be added here */}
    </>
  );
};

export default ContactPage; 