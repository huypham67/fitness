import styled from 'styled-components';
import { Layout } from 'antd';

const { Footer } = Layout;

export const StyledFooter = styled(Footer)`
  background: #23242A;
  color: white;
  padding: 48px 0 24px;
`;

export const FooterTitle = styled.h4`
  color: white;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
`;

export const FooterLink = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
  transition: color 0.3s;
  
  &:hover {
    color: white;
  }
`;

export const FooterText = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
`;

export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 16px;
`;

export const SocialIcon = styled.a`
  color: rgba(255, 255, 255, 0.7);
  font-size: 18px;
  transition: color 0.3s;
  
  &:hover {
    color: #F15637;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
`; 