import styled from 'styled-components';
import { Layout, Menu, Button } from 'antd';

const { Header } = Layout;

export const StyledHeader = styled(Header)`
  background: #f8f9fa;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 64px;
  display: flex;
  align-items: center;
  
  &.sticky {
    background-image: linear-gradient(to right, #F15637, #FBA840);
    
    .ant-menu {
      background: transparent;
      color: white;
    }
    
    .ant-menu-item-selected {
      color: white !important;
      border-bottom: 2px solid white !important;
    }
    
    .auth-buttons button {
      color: white;
    }
  }
`;

export const Logo = styled.div`
  img {
    height: 40px;
  }
`;

export const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledMenu = styled(Menu)`
  flex: 1;
  min-width: 600px;
  border: none;
  background: transparent;
  
  @media (max-width: 992px) {
    min-width: 400px;
  }
`;

export const MobileMenuButton = styled(Button)`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`; 