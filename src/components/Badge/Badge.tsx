import React from 'react';
import clsx from 'clsx';

export interface BadgeProps {
  label: string;
  color?: 'default' | 'primary' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  ariaLabel?: string;
  role?: 'status' | 'text';
  className?: string; 
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  color = 'default',
  size = 'md',
  ariaLabel,
  role = 'status',
  className, 
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full';
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  }[size];

  const colorClasses = {
    default: 'bg-gray-200 text-gray-800',
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    danger: 'bg-red-100 text-red-800',
  }[color];

  return (
    <span
      className={clsx(baseClasses, sizeClasses, colorClasses, className)} 
      role={role}
      aria-label={ariaLabel || label}
    >
      {label}
    </span>
  );
};
