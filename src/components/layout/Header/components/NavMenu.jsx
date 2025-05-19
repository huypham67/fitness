import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { StyledMenu } from '../Header.styles';

const menuItems = [
  { key: '/', label: 'Home' },
  { key: '/about', label: 'About Us' },
  { key: '/courses', label: 'Courses' },
  { key: '/contact', label: 'Contact' },
  { key: '/information-customer', label: 'Info' },
  { key: '/list-fitness-center', label: 'List' },
];

const NavMenu = () => {
  const location = useLocation();

  return (
    <StyledMenu
      mode="horizontal"
      selectedKeys={[location.pathname]}
    >
      {menuItems.map(item => (
        <Menu.Item key={item.key}>
          <Link to={item.key}>{item.label}</Link>
        </Menu.Item>
      ))}
    </StyledMenu>
  );
};

export default NavMenu; 