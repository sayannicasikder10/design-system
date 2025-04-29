import React, { useState } from 'react';
import clsx from 'clsx';

export interface Tab {
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  className?: string;
  defaultIndex?: number;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, className, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'ArrowRight') {
      setActiveIndex((index + 1) % tabs.length);
    } else if (e.key === 'ArrowLeft') {
      setActiveIndex((index - 1 + tabs.length) % tabs.length);
    }
  };

  return (
    <div className={clsx('w-full', className)}>
      <div role="tablist" className="flex border-b dark:border-gray-700">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            role="tab"
            aria-selected={activeIndex === index}
            aria-controls={`tabpanel-${index}`}
            id={`tab-${index}`}
            onClick={() => setActiveIndex(index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={clsx(
              'px-4 py-2 text-sm font-medium',
              'focus:outline-none focus-visible:ring',
              activeIndex === index
                ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {tabs.map((tab, index) => (
          <div
            key={tab.label}
            role="tabpanel"
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            hidden={activeIndex !== index}
            className="text-sm text-gray-800 dark:text-gray-200"
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};




