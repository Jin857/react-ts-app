// components/LoadingSpinner.tsx
import React from 'react';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'medium',
  color = '#3b82f6',
  className = '',
}) => {
  const sizeMap = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
  };

  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`
          animate-spin rounded-full border-2 border-solid border-current border-r-transparent
          ${sizeMap[size]}
        `}
        style={{ 
          borderColor: color,
          borderRightColor: 'transparent'
        }}
        role="status"
        aria-label="加载中"
      >
        <span className="sr-only">加载中...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;