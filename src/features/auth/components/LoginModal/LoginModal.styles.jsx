import styled from 'styled-components';
import { Button } from 'antd';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LoginLeft = styled.div`
  flex: 2;
  padding-right: 24px;
  
  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

export const LoginRight = styled.div`
  flex: 1;
  background: linear-gradient(to right, #F15637, #FBA840);
  color: white;
  padding: 24px;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    margin-top: 24px;
    padding: 16px;
  }
`;

export const SocialIconButton = styled(Button)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .anticon {
    font-size: 18px;
  }
`; 