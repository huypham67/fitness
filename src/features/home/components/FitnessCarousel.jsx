import React from 'react';
import { Carousel, Row, Col, Card, Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
  .slick-prev, .slick-next {
    z-index: 10;
  }
`;

const carouselItems = [
  {
    id: 1,
    title: 'Weightlifting',
    description: 'Build strength and muscle',
    image: 'https://i.pinimg.com/736x/5a/f4/96/5af496e575105b81072cdaaa6fe6ba28.jpg'
  },
  {
    id: 2,
    title: 'Running',
    description: 'Improve cardio and endurance',
    image: 'https://i.pinimg.com/736x/5a/f4/96/5af496e575105b81072cdaaa6fe6ba28.jpg'
  },
  {
    id: 3,
    title: 'Group Classes',
    description: 'Train with others',
    image: 'https://i.pinimg.com/736x/5a/f4/96/5af496e575105b81072cdaaa6fe6ba28.jpg'
  }
];

const FitnessCarousel = ({ items = carouselItems, onItemClick }) => {
  return (
    <div style={{ position: 'relative' }}>
      <StyledCarousel
        arrows
        prevArrow={<Button icon={<LeftOutlined />} shape="circle" />}
        nextArrow={<Button icon={<RightOutlined />} shape="circle" />}
      >
        <div>
          <Row gutter={[24, 24]}>
            {items.map(item => (
              <Col key={item.id} xs={24} md={8}>
                <Card
                  cover={<img alt={item.title} src={item.image} />}
                  hoverable
                >
                  <Card.Meta 
                    title={item.title} 
                    description={item.description} 
                  />
                  <Button 
                    type="primary" 
                    style={{ marginTop: 16 }}
                    onClick={() => onItemClick && onItemClick(item)}
                  >
                    Learn More
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </StyledCarousel>
    </div>
  );
};

export default FitnessCarousel; 