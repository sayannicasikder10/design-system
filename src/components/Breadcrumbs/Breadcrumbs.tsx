import React from 'react';
import clsx from 'clsx';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator = '/',
  className,
}) => {
  return (
    <nav className={clsx('text-sm', className)} aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center space-x-1 text-gray-600 dark:text-gray-300">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center space-x-1">
              {item.icon && <span className="mr-1">{item.icon}</span>}
              {item.href && !isLast ? (
                <a
                  href={item.href}
                  className="hover:underline focus:outline-none focus-visible:ring"
                >
                  {item.label}
                </a>
              ) : (
                <span aria-current="page" className="font-semibold text-gray-800 dark:text-white">
                  {item.label}
                </span>
              )}
              {!isLast && <span className="mx-1">{separator}</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
