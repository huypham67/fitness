import styled from 'styled-components';
import { Card } from 'antd';

export const HeroSection = styled.section`
  position: relative;
  margin-bottom: 48px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, rgba(241, 86, 55, 0.85), rgba(251, 168, 64, 0.85));
    z-index: 1;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  padding: 48px 0;
`;

export const ImageContainer = styled.div`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }
`;

export const SearchCard = styled(Card)`
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  .ant-card-body {
    padding: 32px;
  }
`; 