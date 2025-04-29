
import React from 'react';
import clsx from 'clsx';

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  className,
  onClick,
}) => {
  const baseClasses =
    'inline-flex items-center justify-center rounded font-semibold transition-colors focus:outline-none focus-visible:ring disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600',
    secondary: 'bg-gray-300 text-black hover:bg-gray-400 dark:bg-gray-700 dark:text-white',
    danger: 'bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600',
  }[variant];

  const sizeClasses = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-5 py-3 text-lg',
  }[size];

  return (
    <button
      type="button"
      className={clsx(baseClasses, variantClasses, sizeClasses, className)}
      disabled={disabled || loading}
      onClick={onClick}
      aria-disabled={disabled}
    >
      {loading && (
        <svg
          className="animate-spin mr-2 h-4 w-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
          />
        </svg>
      )}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};
