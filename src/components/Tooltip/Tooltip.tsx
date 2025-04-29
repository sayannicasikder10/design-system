
import React, { useState } from 'react';
import clsx from 'clsx';

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, className }) => {
  const [visible, setVisible] = useState(false);
  const tooltipId = 'tooltip-' + Math.random().toString(36).substr(2, 9);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      <div aria-describedby={tooltipId}>{children}</div>
      {visible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={clsx(
            'absolute z-10 mt-2 px-2 py-1 text-sm text-white bg-gray-900 rounded shadow-lg dark:bg-gray-800',
            'whitespace-nowrap',
            className
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};
