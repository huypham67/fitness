import React from 'react';
import { Input, Select, Button, Typography, Form } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { SearchCard } from '../../../components/sections/Hero/Hero.styles';

const { Title } = Typography;
const { Option } = Select;

const SearchForm = () => {
  const [form] = Form.useForm();
  
  const onFinish = (values) => {
    console.log('Search values:', values);
    // Handle search logic
  };

  return (
    <SearchCard>
      <Title level={4}>Search for gyms, yoga studios, fitness centers</Title>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="location">
          <Input
            placeholder="Location (e.g. HCMC, Ha Noi)"
            size="large"
          />
        </Form.Item>
        
        <Form.Item name="priceRange">
          <Select
            placeholder="Select Price Range"
            style={{ width: '100%' }}
            size="large"
          >
            <Option value="under500k">Under 500k</Option>
            <Option value="500k-1m">500k - 1M</Option>
            <Option value="1m-2m">1M - 2M</Option>
            <Option value="above2m">Above 2M</Option>
          </Select>
        </Form.Item>
        
        <Form.Item name="serviceType">
          <Select
            placeholder="Select Service Type"
            style={{ width: '100%' }}
            size="large"
          >
            <Option value="gym">Gym</Option>
            <Option value="yoga">Yoga Studio</Option>
            <Option value="fitness">Fitness Center</Option>
            <Option value="swimming">Swimming Pool</Option>
          </Select>
        </Form.Item>
        
        <Form.Item>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            size="large"
            htmlType="submit"
            style={{ float: 'right', background: 'linear-gradient(to right, #14557B, #259BE1)' }}
          >
            Search
          </Button>
        </Form.Item>
      </Form>
    </SearchCard>
  );
};

export default SearchForm;
