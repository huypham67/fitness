import React, { useState } from 'react';
import { Layout } from 'antd';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import LoginModal from '../features/auth/components/LoginModal';
import styled from 'styled-components';

const { Content } = Layout;

const StyledContent = styled(Content)`
  min-height: calc(100vh - 64px - 200px);
`;

const MainLayout = ({ children }) => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const showLoginModal = () => {
    setIsLoginModalVisible(true);
  };

  const hideLoginModal = () => {
    setIsLoginModalVisible(false);
  };

  return (
    <Layout>
      <Header showLoginModal={showLoginModal} />
      <StyledContent>
        {children}
      </StyledContent>
      <Footer />
      <LoginModal
        open={isLoginModalVisible}
        onClose={hideLoginModal}
        onRegister={() => {/* handle register click */}}
      />
    </Layout>
  );
};

export default MainLayout; 