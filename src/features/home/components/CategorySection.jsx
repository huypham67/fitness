import React from 'react';
import { Typography, Button } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const CategoryContainer = styled.div`
  margin-bottom: 24px;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  
  @media (max-width: 576px) {
    flex-wrap: wrap;
  }
`;

const CategoryButton = styled(Button)`
  margin: 0 8px 8px;
  min-width: 100px;
`;

const CategorySection = ({ categories = ['Walking', 'Running', 'Lifting'], onCategorySelect }) => {
  return (
    <CategoryContainer>
      <Title level={2} style={{ marginBottom: 24 }}>
        Find A Fitness Near You
      </Title>
      
      <ButtonGroup>
        {categories.map((category, index) => (
          <CategoryButton 
            key={index} 
            shape="round"
            onClick={() => onCategorySelect && onCategorySelect(category)}
          >
            {category}
          </CategoryButton>
        ))}
      </ButtonGroup>
    </CategoryContainer>
  );
};

export default CategorySection; 