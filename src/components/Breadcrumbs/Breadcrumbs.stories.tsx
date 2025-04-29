
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs, BreadcrumbsProps } from './Breadcrumbs';
import { Home } from 'lucide-react';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Breadcrumbs show users where they are in the app hierarchy.

Anatomy:
- \u003cnav\u003e with aria-label="Breadcrumb"
- List of \u003cli\u003e with links or current item
- Optional separator (e.g., "/", ">", custom icon)

Do's:
✅ Use to show location in nested navigation
✅ Use aria-current for current item
✅ Show icon on first (home) item if desired

Don'ts:
❌ Don’t use as primary navigation
❌ Don’t truncate important labels

Theming:
- Tailwind dark mode supported
- className prop allows customization`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

const items: BreadcrumbsProps['items'] = [
  { label: 'Home', href: '/', icon: <Home size={14} /> },
  { label: 'Products', href: '/products' },
  { label: 'Shoes', href: '/products/shoes' },
  { label: 'Nike Air Max' },
];

export const Default: Story = {
  args: {
    items,
  },
};

export const WithCustomSeparator: Story = {
  args: {
    items,
    separator: '>',
  },
};

export const DarkMode: Story = {
  args: {
    items,
    className: 'bg-gray-900 text-white p-2 rounded',
  },
};
