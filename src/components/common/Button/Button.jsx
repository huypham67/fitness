import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({
  type = 'default',
  size = 'middle',
  gradient = null,
  block = false,
  onClick,
  children,
  icon,
  ...restProps
}) => {
  const classNames = [
    gradient && `${gradient}-gradient`,
    size === 'large' && 'large',
    size === 'small' && 'small',
    block && 'full-width',
    icon && 'icon-button'
  ].filter(Boolean).join(' ');

  return (
    <StyledButton
      type={type}
      onClick={onClick}
      className={classNames}
      icon={icon}
      {...restProps}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(['small', 'middle', 'large']),
  gradient: PropTypes.oneOf(['primary', 'secondary', null]),
  block: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
  icon: PropTypes.node,
};

export default Button; 