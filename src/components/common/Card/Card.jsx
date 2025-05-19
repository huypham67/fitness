import React from 'react';
import PropTypes from 'prop-types';
import { StyledCard } from './Card.styles';

const Card = ({
  title,
  cover,
  children,
  highlighted = false,
  noPadding = false,
  size = 'middle',
  ...restProps
}) => {
  const classNames = [
    highlighted && 'highlighted',
    noPadding && 'no-padding',
    size === 'large' && 'large-card',
    size === 'small' && 'small-card',
  ].filter(Boolean).join(' ');

  return (
    <StyledCard
      title={title}
      cover={cover}
      className={classNames}
      {...restProps}
    >
      {children}
    </StyledCard>
  );
};

Card.propTypes = {
  title: PropTypes.node,
  cover: PropTypes.node,
  children: PropTypes.node,
  highlighted: PropTypes.bool,
  noPadding: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'middle', 'large']),
};

export default Card; 