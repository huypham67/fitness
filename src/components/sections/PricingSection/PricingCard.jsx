import React from 'react';
import { Card, Button, Typography } from 'antd';
import styled from 'styled-components';

const { Title, Text } = Typography;

const StyledCard = styled(Card)`
  height: 100%;
  transition: transform 0.3s ease;
  border-radius: 8px;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  ${props => props.isPopular && `
    border: 2px solid #F15637;
    box-shadow: 0 10px 20px rgba(241, 86, 55, 0.1);
  `}
  
  .ant-card-head {
    border-bottom: none;
    text-align: center;
    padding-top: 24px;
  }
  
  .price {
    font-size: 40px;
    font-weight: 700;
    margin: 8px 0;
  }
  
  .price-period {
    color: #b6b6b6;
    font-size: 14px;
  }
`;

const PricingCard = ({ plan, onSelect }) => {
  const { title, price, period, features, isPopular } = plan;
  
  return (
    <StyledCard
      title={<Title level={4} style={{ marginBottom: 0 }}>{title}</Title>}
      isPopular={isPopular}
    >
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <div className="price">{price}</div>
        <div className="price-period">{period}</div>
      </div>
      
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {features.map((feature, i) => (
          <li key={i} style={{ marginBottom: 12 }}>
            <Text>
              <span style={{ color: '#F15637', marginRight: 8 }}>✓</span>
              {feature}
            </Text>
          </li>
        ))}
      </ul>
      
      <Button type="primary" block style={{ marginTop: 16 }} onClick={onSelect}>
        Get Started
      </Button>
    </StyledCard>
  );
};

export default PricingCard; 