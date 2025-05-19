import React, { useState } from 'react';
import { Drawer, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { StyledHeader, Logo, DesktopMenu, MobileMenuButton } from './Header.styles';
import NavMenu from './components/NavMenu';
import AuthButtons from './components/AuthButtons';
import useScrollEffect from './hooks/useScrollEffect';

const { Title } = Typography;

const Header = ({ showLoginModal }) => {
  const [visible, setVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const isSticky = useScrollEffect(100);

  const showDrawer = () => {
    setVisible(true);
  };

  const hideDrawer = () => {
    setVisible(false);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <StyledHeader className={isSticky ? 'sticky' : ''}>
      <Logo>
        <Link to="/">
          {imageError ? (
            <Title level={3} style={{ margin: 0, color: '#F15637' }}>MIXI Fitness</Title>
          ) : (
            <img 
              src="/images/MIXIlogooranger.png" 
              alt="MIXI Fitness" 
              onError={handleImageError}
            />
          )}
        </Link>
      </Logo>
      
      <DesktopMenu>
        <NavMenu />
        <AuthButtons showLoginModal={showLoginModal} />
      </DesktopMenu>
      
      <MobileMenuButton
        type="text"
        icon={<MenuOutlined />}
        onClick={showDrawer}
      />
      
      <Drawer
        title="Menu"
        placement="right"
        onClose={hideDrawer}
        open={visible}
      >
        <AuthButtons 
          showLoginModal={() => {
            showLoginModal();
            hideDrawer();
          }} 
        />
      </Drawer>
    </StyledHeader>
  );
};

export default Header; 