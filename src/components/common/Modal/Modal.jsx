import React from 'react';
import PropTypes from 'prop-types';
import { StyledModal } from './Modal.styles';

const Modal = ({
  title,
  open,
  onCancel,
  onOk,
  children,
  fullScreen = false,
  ...restProps
}) => {
  const classNames = [
    fullScreen && 'full-screen',
  ].filter(Boolean).join(' ');

  return (
    <StyledModal
      title={title}
      open={open}
      onCancel={onCancel}
      onOk={onOk}
      className={classNames}
      {...restProps}
    >
      {children}
    </StyledModal>
  );
};

Modal.propTypes = {
  title: PropTypes.node,
  open: PropTypes.bool,
  onCancel: PropTypes.func,
  onOk: PropTypes.func,
  children: PropTypes.node,
  fullScreen: PropTypes.bool,
};

export default Modal; 