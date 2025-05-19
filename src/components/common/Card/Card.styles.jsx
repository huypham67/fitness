import styled from 'styled-components';
import { Card as AntCard } from 'antd';

export const StyledCard = styled(AntCard)`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.08);
  }
  
  .ant-card-cover img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  &.highlighted {
    border: 2px solid #F15637;
  }
  
  &.no-padding {
    .ant-card-body {
      padding: 0;
    }
  }
  
  &.large-card {
    .ant-card-cover img {
      height: 250px;
    }
  }
  
  &.small-card {
    .ant-card-cover img {
      height: 150px;
    }
  }
`; 