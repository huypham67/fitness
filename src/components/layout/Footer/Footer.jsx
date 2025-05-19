import React from 'react';
import { Row, Col } from 'antd';
import { 
  FacebookOutlined, 
  TwitterOutlined, 
  InstagramOutlined, 
  YoutubeOutlined 
} from '@ant-design/icons';
import { 
  StyledFooter, 
  FooterTitle, 
  FooterLink,
  FooterText,
  SocialIconsContainer,
  SocialIcon,
  Copyright
} from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <Row gutter={[24, 32]}>
          <Col xs={24} sm={12} md={6}>
            <FooterTitle>Company</FooterTitle>
            <FooterLink href="/about">About Us</FooterLink>
            <FooterLink href="/team">Our Team</FooterLink>
            <FooterLink href="/careers">Careers</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <FooterTitle>Services</FooterTitle>
            <FooterLink href="/membership">Membership</FooterLink>
            <FooterLink href="/trainers">Personal Trainers</FooterLink>
            <FooterLink href="/nutrition">Nutrition Planning</FooterLink>
            <FooterLink href="/classes">Group Classes</FooterLink>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <FooterTitle>Resources</FooterTitle>
            <FooterLink href="/blog">Blog</FooterLink>
            <FooterLink href="/faq">FAQ</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/terms">Terms of Service</FooterLink>
          </Col>
          
          <Col xs={24} sm={12} md={6}>
            <FooterTitle>Contact</FooterTitle>
            <FooterText>371 Nguyen Kiem, Ward 3, Go Vap District, HCM City</FooterText>
            <FooterText>info@mixifitness.com</FooterText>
            <FooterText>+84 123 456 789</FooterText>
            
            <SocialIconsContainer>
              <SocialIcon href="https://facebook.com" target="_blank">
                <FacebookOutlined />
              </SocialIcon>
              <SocialIcon href="https://twitter.com" target="_blank">
                <TwitterOutlined />
              </SocialIcon>
              <SocialIcon href="https://instagram.com" target="_blank">
                <InstagramOutlined />
              </SocialIcon>
              <SocialIcon href="https://youtube.com" target="_blank">
                <YoutubeOutlined />
              </SocialIcon>
            </SocialIconsContainer>
          </Col>
        </Row>
        
        <Copyright>
          &copy; {new Date().getFullYear()} MIXI Fitness. All rights reserved.
        </Copyright>
      </div>
    </StyledFooter>
  );
};

export default Footer; 