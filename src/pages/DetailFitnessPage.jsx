import React, { useState } from 'react';
import { Typography, Row, Col, Carousel, Card, Tag, Button, Tabs, Rate, Divider, List, Avatar, Form, Input } from 'antd';
import { EnvironmentOutlined, PhoneOutlined, ClockCircleOutlined, GlobalOutlined, HeartOutlined, HeartFilled, CheckCircleOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const { Title, Text, Paragraph } = Typography;
const { TabPane } = Tabs;
const { TextArea } = Input;

const DetailContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 24px;
  
  @media (max-width: 768px) {
    padding: 0 16px;
    margin: 24px auto;
  }
`;

const StyledCarousel = styled(Carousel)`
  .slick-dots {
    margin-bottom: 24px;
  }

  .slick-slide img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  @media (max-width: 768px) {
    .slick-slide img {
      height: 300px;
    }
  }
`;

const DetailCard = styled(Card)`
  border-radius: 8px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const PriceTag = styled(Tag)`
  font-size: 16px;
  padding: 4px 12px;
  border-radius: 4px;
  margin-left: 16px;
`;

const AmenityItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  
  .anticon {
    color: #52c41a;
    margin-right: 8px;
  }
`;

// Create a custom ReviewComment component to replace the Comment component
const ReviewComment = ({ author, avatar, content, datetime }) => (
  <div style={{ marginBottom: 16 }}>
    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
      <Avatar src={avatar} alt={author} />
      <div style={{ marginLeft: 12 }}>
        <Text strong>{author}</Text>
        <div style={{ color: 'rgba(0, 0, 0, 0.45)', fontSize: 12, marginBottom: 4 }}>{datetime}</div>
        {content}
      </div>
    </div>
  </div>
);

const DetailFitnessPage = () => {
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  
  // Mock data for fitness center details
  const fitnessData = {
    id: id || '1',
    name: 'Elite Fitness Center',
    rating: 4.8,
    reviewCount: 124,
    price: '800k - 1.2M VND',
    location: '123 Fitness Street, District 1, HCMC',
    phone: '+84 123 456 789',
    website: 'www.elitefitnesscenter.com',
    openHours: '06:00 - 22:00',
    description: 'Elite Fitness Center is a premium fitness facility located in the heart of Ho Chi Minh City. With state-of-the-art equipment, professional trainers, and a wide range of fitness classes, we provide the perfect environment for you to achieve your fitness goals.',
    images: [
      'https://i.pinimg.com/736x/5a/f4/96/5af496e575105b81072cdaaa6fe6ba28.jpg',
      'https://i.pinimg.com/736x/5a/f4/96/5af496e575105b81072cdaaa6fe6ba28.jpg',
      'https://i.pinimg.com/736x/5a/f4/96/5af496e575105b81072cdaaa6fe6ba28.jpg',
    ],
    amenities: [
      'Modern Equipment',
      'Swimming Pool',
      'Sauna & Steam Room',
      'Group Classes',
      'Personal Training',
      'Locker Rooms',
      'Nutrition Consulting',
      'Parking',
      'Towel Service',
      'Wifi',
    ],
    classes: [
      { name: 'Yoga', time: 'Mon, Wed, Fri: 07:00 - 08:00', instructor: 'Jane Smith' },
      { name: 'Zumba', time: 'Tue, Thu: 18:00 - 19:00', instructor: 'Mike Johnson' },
      { name: 'HIIT', time: 'Mon, Wed, Fri: 18:30 - 19:30', instructor: 'David Lee' },
      { name: 'Spinning', time: 'Tue, Thu, Sat: 08:00 - 09:00', instructor: 'Sarah Brown' },
    ],
    reviews: [
      { 
        author: 'John Doe', 
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', 
        rating: 5, 
        content: 'Great facilities and professional staff. The swimming pool is amazing!', 
        date: '2023-03-15' 
      },
      { 
        author: 'Jane Smith', 
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', 
        rating: 4, 
        content: 'Modern equipment and clean environment. The only thing I would improve is the locker room space.', 
        date: '2023-02-28' 
      },
      { 
        author: 'Mike Johnson', 
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', 
        rating: 5, 
        content: 'I love the yoga classes here! The instructors are very knowledgeable and helpful.', 
        date: '2023-02-10' 
      },
    ],
    memberships: [
      { type: 'Daily Pass', price: '200k VND', description: 'Full access for one day' },
      { type: 'Monthly', price: '1.2M VND', description: 'Unlimited access to all facilities' },
      { type: 'Quarterly', price: '3M VND', description: 'Save 15% compared to monthly plan' },
      { type: 'Annual', price: '10M VND', description: 'Best value, save 30% compared to monthly plan' },
    ],
    trainers: [
      { name: 'John Smith', specialty: 'Weight Training', experience: '8 years', avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
      { name: 'Sarah Lee', specialty: 'Yoga', experience: '6 years', avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
      { name: 'Mike Brown', specialty: 'Cardio & HIIT', experience: '5 years', avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' },
    ]
  };
  
  const handleLike = () => {
    setLiked(!liked);
  };
  
  const handleSubmitReview = (values) => {
    console.log('Review submitted:', values);
    // Here you would handle review submission
  };

  return (
    <DetailContainer>
      {/* Image Carousel */}
      <StyledCarousel autoplay>
        {fitnessData.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`${fitnessData.name} - ${index + 1}`} />
          </div>
        ))}
      </StyledCarousel>
      
      {/* Main Info Section */}
      <Row gutter={24}>
        <Col xs={24} lg={16}>
          <DetailCard>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
              <div>
                <Title level={2} style={{ marginBottom: 8 }}>
                  {fitnessData.name}
                  <PriceTag color="#F15637">{fitnessData.price}</PriceTag>
                </Title>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
                  <Rate disabled allowHalf defaultValue={fitnessData.rating} style={{ fontSize: 16 }} />
                  <Text style={{ marginLeft: 8 }}>{fitnessData.rating} ({fitnessData.reviewCount} reviews)</Text>
                </div>
              </div>
              <Button 
                type="default" 
                icon={liked ? <HeartFilled style={{ color: '#F15637' }} /> : <HeartOutlined />} 
                onClick={handleLike}
                size="large"
              >
                {liked ? 'Saved' : 'Save'}
              </Button>
            </div>
            
            <div style={{ marginBottom: 16 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 8 }}>
                <EnvironmentOutlined style={{ marginRight: 8, marginTop: 4 }} />
                <Text>{fitnessData.location}</Text>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 8 }}>
                <PhoneOutlined style={{ marginRight: 8, marginTop: 4 }} />
                <Text>{fitnessData.phone}</Text>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 8 }}>
                <GlobalOutlined style={{ marginRight: 8, marginTop: 4 }} />
                <Text>{fitnessData.website}</Text>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                <ClockCircleOutlined style={{ marginRight: 8, marginTop: 4 }} />
                <Text>{fitnessData.openHours}</Text>
              </div>
            </div>
            
            <Divider style={{ margin: '16px 0' }} />
            
            <div>
              <Title level={4}>About {fitnessData.name}</Title>
              <Paragraph>{fitnessData.description}</Paragraph>
            </div>
          </DetailCard>
          
          {/* Tabs for different sections */}
          <DetailCard>
            <Tabs defaultActiveKey="1">
              <TabPane tab="Amenities" key="1">
                <Row gutter={[16, 8]}>
                  {fitnessData.amenities.map((amenity, index) => (
                    <Col xs={24} sm={12} key={index}>
                      <AmenityItem>
                        <CheckCircleOutlined />
                        <Text>{amenity}</Text>
                      </AmenityItem>
                    </Col>
                  ))}
                </Row>
              </TabPane>
              
              <TabPane tab="Classes" key="2">
                <List
                  itemLayout="horizontal"
                  dataSource={fitnessData.classes}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        title={item.name}
                        description={
                          <>
                            <div><Text strong>Time:</Text> {item.time}</div>
                            <div><Text strong>Instructor:</Text> {item.instructor}</div>
                          </>
                        }
                      />
                    </List.Item>
                  )}
                />
              </TabPane>
              
              <TabPane tab="Reviews" key="3">
                <List
                  itemLayout="horizontal"
                  dataSource={fitnessData.reviews}
                  renderItem={item => (
                    <ReviewComment
                      author={item.author}
                      avatar={<Avatar src={item.avatar} alt={item.author} />}
                      content={
                        <>
                          <Rate disabled defaultValue={item.rating} style={{ fontSize: 12, marginBottom: 8 }} />
                          <p>{item.content}</p>
                        </>
                      }
                      datetime={item.date}
                    />
                  )}
                />
                
                <Divider />
                
                <Title level={4}>Write a Review</Title>
                <Form onFinish={handleSubmitReview}>
                  <Form.Item name="rating" label="Your Rating" rules={[{ required: true, message: 'Please rate' }]}>
                    <Rate />
                  </Form.Item>
                  
                  <Form.Item name="review" rules={[{ required: true, message: 'Please write your review' }]}>
                    <TextArea rows={4} placeholder="Write your review here..." />
                  </Form.Item>
                  
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Submit Review
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
              
              <TabPane tab="Trainers" key="4">
                <List
                  itemLayout="horizontal"
                  dataSource={fitnessData.trainers}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src={item.avatar} size={64} />}
                        title={item.name}
                        description={
                          <>
                            <div><Text strong>Specialty:</Text> {item.specialty}</div>
                            <div><Text strong>Experience:</Text> {item.experience}</div>
                          </>
                        }
                      />
                    </List.Item>
                  )}
                />
              </TabPane>
            </Tabs>
          </DetailCard>
        </Col>
        
        {/* Sidebar with Memberships */}
        <Col xs={24} lg={8}>
          <DetailCard title="Membership Options">
            <List
              itemLayout="vertical"
              dataSource={fitnessData.memberships}
              renderItem={item => (
                <List.Item
                  extra={
                    <Button type="primary">Select</Button>
                  }
                >
                  <List.Item.Meta
                    title={item.type}
                    description={
                      <>
                        <Text strong style={{ fontSize: 16, color: '#F15637' }}>{item.price}</Text>
                        <div>{item.description}</div>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </DetailCard>
          
          <DetailCard title="Contact Us">
            <Form layout="vertical">
              <Form.Item name="name" label="Your Name" rules={[{ required: true }]}>
                <Input placeholder="Enter your name" />
              </Form.Item>
              
              <Form.Item name="email" label="Your Email" rules={[{ required: true, type: 'email' }]}>
                <Input placeholder="Enter your email" />
              </Form.Item>
              
              <Form.Item name="phone" label="Your Phone" rules={[{ required: true }]}>
                <Input placeholder="Enter your phone number" />
              </Form.Item>
              
              <Form.Item name="message" label="Message" rules={[{ required: true }]}>
                <TextArea rows={4} placeholder="Enter your message" />
              </Form.Item>
              
              <Form.Item>
                <Button type="primary" block>
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </DetailCard>
        </Col>
      </Row>
    </DetailContainer>
  );
};

export default DetailFitnessPage; 