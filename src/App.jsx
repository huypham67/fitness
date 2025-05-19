import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import theme from './theme';

// Import layouts
import MainLayout from './layouts/MainLayout';

// Import pages
import HomePage from './pages/HomePage';
import ListFitnessCenterPage from './pages/ListFitnessCenterPage';
import DetailFitnessPage from './pages/DetailFitnessPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ContactPage from './pages/ContactPage';
import InformationCustomerPage from './pages/InformationCustomerPage';

function App() {
  return (
    <ConfigProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout><HomePage /></MainLayout>} />
          <Route path="/list-fitness-center" element={<MainLayout><ListFitnessCenterPage /></MainLayout>} />
          <Route path="/detail-fitness/:id" element={<MainLayout><DetailFitnessPage /></MainLayout>} />
          <Route path="/register" element={<MainLayout><RegisterPage /></MainLayout>} />
          <Route path="/forgot-password" element={<MainLayout><ForgotPasswordPage /></MainLayout>} />
          <Route path="/contact" element={<MainLayout><ContactPage /></MainLayout>} />
          <Route path="/information-customer" element={<MainLayout><InformationCustomerPage /></MainLayout>} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
}

export default App; 