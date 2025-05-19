import styled from 'styled-components';
import { Button as AntButton } from 'antd';

export const StyledButton = styled(AntButton)`
  border-radius: 30px;
  height: 40px;
  
  &.primary-gradient {
    background: linear-gradient(to right, #F15637, #FBA840);
    border: none;
    
    &:hover, &:active, &:focus {
      background: linear-gradient(to right, #e04626, #e99631);
      border: none;
    }
  }
  
  &.secondary-gradient {
    background: linear-gradient(to right, #14557B, #259BE1);
    border: none;
    color: white;
    
    &:hover, &:active, &:focus {
      background: linear-gradient(to right, #0d4263, #1e85c5);
      border: none;
      color: white;
    }
  }
  
  &.large {
    height: 48px;
    font-size: 16px;
  }
  
  &.small {
    height: 32px;
    font-size: 12px;
  }
  
  &.full-width {
    width: 100%;
  }
  
  &.icon-button {
    display: flex;
    align-items: center;
    justify-content: center;
    
    .anticon {
      margin-right: 8px;
    }
  }
`; 