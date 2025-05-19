import React from 'react';
import { Row, Col, Typography } from 'antd';
import PricingCard from './PricingCard';

const { Title } = Typography;

const defaultPlans = [
  {
    id: 1,
    title: 'Monthly',
    price: '$88',
    period: 'per month',
    features: [
      'Access to all basic equipment',
      'Group fitness classes',
      'Locker room access',
      'Free wifi'
    ],
    isPopular: false
  },
  {
    id: 2,
    title: 'Quarterly',
    price: '$199',
    period: 'per 3 months',
    features: [
      'All features in Monthly plan',
      'Personal trainer consultation',
      'Nutrition planning',
      'Access to premium classes'
    ],
    isPopular: true
  },
  {
    id: 3,
    title: 'Annual',
    price: '$699',
    period: 'per year',
    features: [
      'All features in Quarterly plan',
      'Free merchandise',
      'Bring a friend (5 passes)',
      'Priority booking'
    ],
    isPopular: false
  }
];

const PricingSection = ({ plans = defaultPlans, onPlanSelect }) => {
  return (
    <div style={{ marginTop: 48, marginBottom: 48 }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>
        Choose Your Pricing Plan
      </Title>
      
      <Row gutter={[24, 24]}>
        {plans.map(plan => (
          <Col key={plan.id} xs={24} md={8}>
            <PricingCard 
              plan={plan} 
              onSelect={() => onPlanSelect && onPlanSelect(plan)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default PricingSection; 