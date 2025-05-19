import React from 'react';
import { Layout, Row, Col, Typography, Space, Divider } from 'antd';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, YoutubeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

const StyledFooter = styled(AntFooter)`
  background-color: #f8f9fa;
  padding: 48px 24px 24px;
`;

const FooterTitle = styled(Title)`
  font-size: 18px !important;
  margin-bottom: 16px !important;
`;

const FooterLink = styled(Link)`
  display: block;
  color: #6c757d;
  margin-bottom: 8px;
  
  &:hover {
    color: #F15637;
  }
`;

const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f1f1f1;
  color: #333;
  margin-right: 12px;
  font-size: 18px;
  transition: all 0.3s ease;
  
  &:hover {
    background: linear-gradient(to right, #F15637, #FBA840);
    color: white;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <Row gutter={[24, 32]}>
          <Col xs={24} sm={12} md={6}>
            <FooterTitle level={5}>About Us</FooterTitle>
            <Text type="secondary">
              MIXI Fitness helps you find the perfect fitness center for your needs. 
              Stay fit and healthy with our best-in-class partners.
            </Text>
            <Space style={{ marginTop: 16 }}>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                <FacebookOutlined />
              </SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                <TwitterOutlined />
              </SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                <InstagramOutlined />
              </SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                <YoutubeOutlined />
              </SocialIcon>
            </Space>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <FooterTitle level={5}>Quick Links</FooterTitle>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
            <FooterLink to="/list-fitness-center">Find a Center</FooterLink>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <FooterTitle level={5}>Services</FooterTitle>
            <FooterLink to="/services">Gym Memberships</FooterLink>
            <FooterLink to="/services">Personal Training</FooterLink>
            <FooterLink to="/services">Fitness Classes</FooterLink>
            <FooterLink to="/services">Nutrition Advice</FooterLink>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <FooterTitle level={5}>Contact Info</FooterTitle>
            <Text type="secondary" style={{ display: 'block', marginBottom: 8 }}>
              123 Fitness Street, District 1, HCMC, Vietnam
            </Text>
            <Text type="secondary" style={{ display: 'block', marginBottom: 8 }}>
              info@mixifitness.com
            </Text>
            <Text type="secondary" style={{ display: 'block', marginBottom: 8 }}>
              +84 123 456 789
            </Text>
          </Col>
        </Row>
        
        <Divider style={{ margin: '24px 0' }} />
        
        <Row>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Text type="secondary">
              © {new Date().getFullYear()} MIXI Fitness. All rights reserved.
            </Text>
          </Col>
        </Row>
      </div>
    </StyledFooter>
  );
};

export default Footer; 