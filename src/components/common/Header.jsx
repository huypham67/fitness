import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const { Header: AntHeader } = Layout;

const StyledHeader = styled(AntHeader)`
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

const Logo = styled.div`
  img {
    height: 40px;
  }
`;

const Header = ({ showLoginModal }) => {
  const [visible, setVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const location = useLocation();

  // Handle scroll event to add sticky class
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { key: '/', label: 'Home' },
    { key: '/about', label: 'About Us' },
    { key: '/courses', label: 'Courses' },
    { key: '/contact', label: 'Contact' },
    { key: '/information-customer', label: 'Info' },
    { key: '/list-fitness-center', label: 'List' },
  ];

  return (
    <StyledHeader className={isSticky ? 'sticky' : ''}>
      <Logo>
        <Link to="/">
          <img src="/images/MIXIlogooranger.png" alt="MIXI Fitness" />
        </Link>
      </Logo>
      
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        {/* Desktop Menu */}
        <div className="desktop-menu" style={{ display: 'flex', alignItems: 'center' }}>
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            style={{ 
              flex: 1, 
              minWidth: 600, 
              border: 'none', 
              background: 'transparent'
            }}
          >
            {menuItems.map(item => (
              <Menu.Item key={item.key}>
                <Link to={item.key}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
          
          <Space className="auth-buttons">
            <Button type="link" onClick={showLoginModal}>Log in</Button>
            <Button type="primary">
              <Link to="/register">Register</Link>
            </Button>
          </Space>
        </div>
        
        {/* Mobile Menu Button */}
        <Button
          className="mobile-menu-button"
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setVisible(true)}
          style={{ display: 'none' }}
        />
      </div>
      
      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setVisible(false)}
        open={visible}
      >
        <Menu mode="vertical" selectedKeys={[location.pathname]}>
          {menuItems.map(item => (
            <Menu.Item key={item.key}>
              <Link to={item.key} onClick={() => setVisible(false)}>
                {item.label}
              </Link>
            </Menu.Item>
          ))}
        </Menu>
        <div style={{ marginTop: 20 }}>
          <Space direction="vertical" style={{ width: '100%' }}>
            <Button block onClick={() => { showLoginModal(); setVisible(false); }}>
              Log in
            </Button>
            <Button block type="primary">
              <Link to="/register" onClick={() => setVisible(false)}>Register</Link>
            </Button>
          </Space>
        </div>
      </Drawer>
    </StyledHeader>
  );
};

export default Header; 