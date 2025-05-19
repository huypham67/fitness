import styled from 'styled-components';
import { Modal as AntModal } from 'antd';

export const StyledModal = styled(AntModal)`
  .ant-modal-content {
    border-radius: 8px;
    overflow: hidden;
  }
  
  .ant-modal-header {
    background: #fff;
    padding: 16px 24px;
    
    .ant-modal-title {
      font-weight: 600;
    }
  }
  
  .ant-modal-body {
    padding: 24px;
  }
  
  .ant-modal-footer {
    padding: 16px 24px;
    border-top: 1px solid #f0f0f0;
  }
  
  &.full-screen {
    width: 100% !important;
    max-width: 100% !important;
    height: 100vh;
    top: 0;
    padding: 0;
    
    .ant-modal-content {
      border-radius: 0;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }
    
    .ant-modal-body {
      flex: 1;
      overflow-y: auto;
    }
  }
`; 