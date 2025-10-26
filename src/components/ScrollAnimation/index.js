import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './index.scss';

const ScrollAnimation = ({
  children,
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1
}) => {
  const [ref, isVisible] = useScrollAnimation(threshold);

  return (
    <div
      ref={ref}
      className={`scroll-animation ${animation} ${isVisible ? 'visible' : ''}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
