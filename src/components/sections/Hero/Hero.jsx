import React from 'react';
import { Row, Col } from 'antd';
import { HeroSection, HeroContent, ImageContainer } from './Hero.styles';
import SearchForm from '../../../features/home/components/SearchForm';

const Hero = ({ heroImage }) => {
  return (
    <HeroSection>
      <HeroContent>
        <div className="container">
          <Row gutter={[24, 24]} align="middle">
            <Col xs={24} md={12}>
              <ImageContainer>
                <img src={heroImage || "/images/banner1.jpg"} alt="Modern Gym" />
              </ImageContainer>
            </Col>
            <Col xs={24} md={12}>
              <SearchForm />
            </Col>
          </Row>
        </div>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 