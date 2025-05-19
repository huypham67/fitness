import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { AuthButtons as StyledAuthButtons } from '../Header.styles';

const AuthButtons = ({ showLoginModal }) => {
  return (
    <StyledAuthButtons className="auth-buttons">
      <Button type="link" onClick={showLoginModal}>
        Log in
      </Button>
      <Button type="primary">
        <Link to="/register">Register</Link>
      </Button>
    </StyledAuthButtons>
  );
};

export default AuthButtons; 