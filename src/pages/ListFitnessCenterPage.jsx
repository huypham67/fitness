import React from 'react';
import { Typography, Row, Col, Card, Tag, Rate, Button, Input, Select, Checkbox } from 'antd';
import { SearchOutlined, EnvironmentOutlined, ClockCircleOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const { Title, Text } = Typography;
const { Option } = Select;
const { Search } = Input;

const PageHeader = styled.div`
  background: linear-gradient(to right, rgba(241, 86, 55, 0.85), rgba(251, 168, 64, 0.85));
  padding: 40px 0;
  color: white;
  text-align: center;
  margin-bottom: 40px;
`;

const FilterCard = styled(Card)`
  margin-bottom: 24px;
`;

const FitnessCard = styled(Card)`
  margin-bottom: 24px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  .ant-card-cover img {
    height: 200px;
    object-fit: cover;
  }
`;

const PriceTag = styled(Tag)`
  font-weight: bold;
  font-size: 14px;
  padding: 2px 8px;
`;

const ListFitnessCenterPage = () => {
  // Placeholder data for fitness centers
  const fitnessCenters = [
    {
      id: 1,
      name: 'Elite Fitness Center',
      location: 'District 1, HCMC',
      rating: 4.8,
      price: '800k-1.2M',
      image: 'https://i.pinimg.com/736x/5a/f4/96/5af496e575105b81072cdaaa6fe6ba28.jpg',
      tags: ['Gym', 'Pool', 'Yoga'],
      hours: '06:00 - 22:00',
    },
    {
      id: 2,
      name: 'PowerFit Gym',
      location: 'District 3, HCMC',
      rating: 4.5,
      price: '500k-900k',
      image: 'https://i.pinimg.com/736x/5a/f4/96/5af496e575105b81072cdaaa6fe6ba28.jpg',
      tags: ['Gym', 'Group Classes'],
      hours: '05:30 - 23:00',
    },
    {
      id: 3,
      name: 'Serene Yoga Studio',
      location: 'District 2, HCMC',
      rating: 4.9,
      price: '300k-700k',
      image: 'https://i.pinimg.com/736x/5a/f4/96/5af496e575105b81072cdaaa6fe6ba28.jpg',
      tags: ['Yoga', 'Meditation'],
      hours: '08:00 - 21:00',
    },
    {
      id: 4,
      name: 'FitZone Center',
      location: 'District 7, HCMC',
      rating: 4.7,
      price: '900k-1.5M',
      image: 'https://i.pinimg.com/736x/5a/f4/96/5af496e575105b81072cdaaa6fe6ba28.jpg',
      tags: ['Gym', 'Pool', 'Sauna'],
      hours: '06:00 - 22:30',
    },
  ];

  return (
    <>
      <PageHeader>
        <div className="container">
          <Title level={2} style={{ color: 'white', marginBottom: 24 }}>
            Find Your Perfect Fitness Center
          </Title>
          <Search
            placeholder="Search by name or location"
            allowClear
            enterButton={<><SearchOutlined /> Search</>}
            size="large"
            style={{ maxWidth: 600, margin: '0 auto' }}
          />
        </div>
      </PageHeader>
      
      <div className="container">
        <Row gutter={24}>
          {/* Filters Column */}
          <Col xs={24} lg={6}>
            <FilterCard title="Filters">
              <div style={{ marginBottom: 16 }}>
                <Text strong>Location</Text>
                <Select 
                  placeholder="Select district" 
                  style={{ width: '100%', marginTop: 8 }}
                >
                  <Option value="d1">District 1</Option>
                  <Option value="d2">District 2</Option>
                  <Option value="d3">District 3</Option>
                  <Option value="d7">District 7</Option>
                </Select>
              </div>
              
              <div style={{ marginBottom: 16 }}>
                <Text strong>Price Range</Text>
                <Select 
                  placeholder="Select price range" 
                  style={{ width: '100%', marginTop: 8 }}
                >
                  <Option value="under500k">Under 500k</Option>
                  <Option value="500k-1m">500k - 1M</Option>
                  <Option value="1m-2m">1M - 2M</Option>
                  <Option value="above2m">Above 2M</Option>
                </Select>
              </div>
              
              <div style={{ marginBottom: 16 }}>
                <Text strong>Facilities</Text>
                <div style={{ marginTop: 8 }}>
                  <Checkbox>Gym</Checkbox>
                  <Checkbox>Pool</Checkbox>
                  <Checkbox>Yoga Studio</Checkbox>
                  <Checkbox>Sauna</Checkbox>
                  <Checkbox>Group Classes</Checkbox>
                </div>
              </div>
              
              <div style={{ marginBottom: 16 }}>
                <Text strong>Rating</Text>
                <div style={{ marginTop: 8 }}>
                  <Rate defaultValue={0} />
                  <Text style={{ marginLeft: 8 }}>& Up</Text>
                </div>
              </div>
              
              <Button type="primary" block>Apply Filters</Button>
            </FilterCard>
          </Col>
          
          {/* Results Column */}
          <Col xs={24} lg={18}>
            <div style={{ marginBottom: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text strong>{fitnessCenters.length} results found</Text>
              <Select 
                defaultValue="recommended" 
                style={{ width: 200 }}
              >
                <Option value="recommended">Recommended</Option>
                <Option value="price-asc">Price: Low to High</Option>
                <Option value="price-desc">Price: High to Low</Option>
                <Option value="rating">Highest Rating</Option>
              </Select>
            </div>
            
            {fitnessCenters.map(center => (
              <FitnessCard
                key={center.id}
                hoverable
                cover={<img alt={center.name} src={center.image} />}
                actions={[
                  <Button type="primary" block href={`/detail-fitness/${center.id}`}>View Details</Button>
                ]}
              >
                <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <Title level={4} style={{ marginBottom: 4 }}>{center.name}</Title>
                    <Text type="secondary"><EnvironmentOutlined /> {center.location}</Text>
                    <div style={{ marginTop: 4 }}>
                      <Text type="secondary"><ClockCircleOutlined /> {center.hours}</Text>
                    </div>
                  </div>
                  <PriceTag color="#F15637">{center.price}</PriceTag>
                </div>
                
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                  <Rate disabled defaultValue={center.rating} style={{ fontSize: 14 }} />
                  <Text style={{ marginLeft: 8 }}>{center.rating}/5</Text>
                </div>
                
                <div>
                  {center.tags.map(tag => (
                    <Tag key={tag} color="blue" style={{ marginBottom: 4 }}>{tag}</Tag>
                  ))}
                </div>
              </FitnessCard>
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ListFitnessCenterPage; 